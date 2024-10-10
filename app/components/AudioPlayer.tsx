'use client';
import useAudio from '@/hooks/useAudio';
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  SpeakerSlash,
  SpeakerX
} from '@phosphor-icons/react';
import { karla } from '@/style/fonts';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const {
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
    nextSong
  } = useAudio();

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    volumeChange(event);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col justify-between items-center p-2 space-y-4 my-4">
      <section className="w-full text-center min-h-20">
        {playback && (
          <article className="flex flex-col items-center justify-center p-2">
            <div className={`${karla.variable} text-xl font-semibold`}>
              {song.title}
            </div>
            <div className="text-base subpixel-antialiased">
              {elapsed} / {duration}
            </div>
          </article>
        )}
      </section>

      <section className="grid grid-cols-3 gap-4 items-center justify-center w-full min-h-20">
        <button
          onClick={previousSong}
          className="flex flex-col justify-center items-center"
        >
          <SkipBack weight="bold" className="h-6 w-6" />
          <span className="text-xs">Previous</span>
        </button>

        <button
          onClick={play}
          className="flex flex-col justify-center items-center"
        >
          {playback ? (
            <Pause weight="bold" className="h-8 w-8 " />
          ) : (
            <Play weight="bold" className="h-8 w-8 " />
          )}
          <span className="text-xs">{playback ? 'Pause' : 'Play'}</span>
        </button>

        <button
          onClick={nextSong}
          className="flex flex-col justify-center items-center"
        >
          <SkipForward weight="bold" className="h-6 w-6" />
          <span className="text-xs">Next</span>
        </button>
      </section>

      <section className="flex justify-evenly items-center w-full space-x-4">
        <button
          onClick={muteChange}
          className="flex flex-col justify-center items-center min-w-12"
        >
          {mute ? (
            <SpeakerX weight="bold" className="h-6 w-6" />
          ) : (
            <SpeakerSlash weight="bold" className="h-6 w-6" />
          )}
          <span className="text-xs">{mute ? 'Unmute' : 'Mute'}</span>
        </button>
        <div className="relative w-full h-full flex justify-end items-center">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-control"
          />
        </div>
      </section>
    </div>
  );
}
