'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react';
import { Howl } from 'howler';
import { AudioContextType } from '@/types';

const AudioContext = createContext<AudioContextType | null>(null);

const playlist = [
  {
    id: 0,
    title: 'They Call Her Lou',
    album: 'unreleased',
    artist: 'lefog',
    url: '/audio/lou.mp3',
    duration: '02:35'
  },
  {
    id: 1,
    title: 'Draw From the Sleep Well',
    album: 'unreleased',
    artist: 'lefog',
    url: '/audio/well.mp3',
    duration: '03:45'
  }
];

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [playback, setPlayback] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [mute, setMute] = useState<boolean>(false);
  const [elapsed, setElapsed] = useState<string>('00:00');
  const [duration, setDuration] = useState<string>('00:00');

  const songRef = useRef<Howl | null>(null);

  const song = playlist[currentIndex];

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

  const loadNewSong = useCallback(
    (src: string) => {
      if (songRef.current) {
        songRef.current.unload();
      }

      songRef.current = new Howl({
        src: [song.url],
        html5: true,
        preload: 'metadata',
        autoplay: false,
        loop: false,
        volume: volume,
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
          handleNextSong();
        }
      });
    },
    [volume]
  );

  const handlePlayPause = useCallback(async () => {
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

  const handleVolumeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
      songRef.current?.volume(newVolume);
    },
    [setVolume]
  );

  const handleMuteChange = useCallback(() => {
    setMute((prevMute: boolean) => {
      const newMute = !prevMute;
      songRef.current?.mute(newMute);
      return newMute;
    });
  }, []);

  const handleSongChange = useCallback(
    (newIndex: number) => {
      // Unload any previous Howl instance
      if (songRef.current) {
        songRef.current.unload();
      }

      // Update the currentIndex to the clicked song
      setCurrentIndex(newIndex);

      // Load and play the new song
      const selectedSong = playlist[newIndex].url;
      const newSong = new Howl({
        src: [selectedSong],
        html5: true,
        volume: volume,
        onplay: () => {
          setPlayback(true); // Set playback to true
        },
        onend: () => {
          setPlayback(false); // Set playback to false when the song ends
        }
      });

      // Assign the new Howl instance to songRef and play it
      songRef.current = newSong;
      songRef.current.play();
    },
    [volume, playlist] // Dependencies
  );

  const handlePreviousSong = useCallback(() => {
    const nextIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    handleSongChange(nextIndex);
  }, [currentIndex, handleSongChange]);

  const handleNextSong = useCallback(() => {
    const nextIndex = currentIndex < playlist.length - 1 ? currentIndex + 1 : 0;
    handleSongChange(nextIndex);
  }, [currentIndex, handleSongChange]);

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

  return (
    <AudioContext.Provider
      value={{
        playlist,
        song,
        currentIndex,
        playback,
        handleVolumeChange,
        handleMuteChange,
        handlePlayPause,
        handleSongChange,
        handlePreviousSong,
        handleNextSong,
        elapsed,
        duration,
        volume,
        setVolume,
        mute,
        setMute
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudioContext must be used within a provider');
  }
  return context;
};
