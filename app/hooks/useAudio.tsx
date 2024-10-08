'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Howl, Howler } from 'howler';
import { playlist } from '@/data';

export default function useAudio() {
  const [playback, setPlayback] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);
  const [mute, setMute] = useState<boolean>(false);
  const [elapsed, setElapsed] = useState<string>('00:00');
  const [duration, setDuration] = useState<string>('00:00');

  const song = playlist[currentIndex];

  const songRef = useRef<Howl | null>(null);

  const play = useCallback(async () => {
    if (!songRef.current) return;

    if (Howler.ctx.state === 'suspended') {
      try {
        await Howler.ctx.resume();
      } catch (error) {
        console.error(
          `There was an error resuming the audio context: ${error}`
        );
      }
    }

    if (songRef.current.playing()) {
      songRef.current.pause();
    } else {
      songRef.current.play();
    }
  }, []);

  const volumeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
      songRef.current?.volume(newVolume);
    },
    [setVolume]
  );

  const muteChange = useCallback(() => {
    setMute((prevMute: boolean) => {
      const newMute = !prevMute;
      songRef.current?.mute(newMute);
      return newMute;
    });
  }, []);

  const changeSong = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
    setElapsed('00:00');
    setPlayback(false);
  }, []);

  const previousSong = useCallback(() => {
    const nextIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    changeSong(nextIndex);
  }, [currentIndex, changeSong]);

  const nextSong = useCallback(() => {
    const nextIndex = currentIndex < playlist.length - 1 ? currentIndex + 1 : 0;
    changeSong(nextIndex);
  }, [currentIndex, changeSong]);

  const formatTime = (seconds: number): string => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return '00:00';
    }
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(
      2,
      '0'
    )}`;
  };

  useEffect(() => {
    const howl = new Howl({
      src: [song.url],
      html5: true,
      preload: 'metadata',
      onload: () => {
        const durationSeconds = songRef.current?.duration() as number;
        setDuration(formatTime(durationSeconds));
      },
      onplay: () => {
        setPlayback(true);
      },
      onpause: () => {
        setPlayback(false);
      },
      onend: () => {
        nextSong();
      }
    });

    songRef.current = howl;

    return () => {
      howl.unload();
      songRef.current = null;
    };
  }, [song.url, nextSong]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (playback && songRef.current) {
      intervalId = setInterval(() => {
        const currentSeconds = songRef.current?.seek() as number;
        setElapsed(formatTime(currentSeconds));
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [playback]);

  return {
    song,
    play,
    volume,
    volumeChange,
    mute,
    muteChange,
    playback,
    elapsed,
    duration,
    previousSong,
    nextSong,
    currentIndex,
    changeSong,
    formatTime
  };
}
