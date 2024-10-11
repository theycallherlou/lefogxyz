'use client';
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
import { useAudioContext } from '@/contexts/AudioContext';

export default function AudioControls() {
  const {
    song,
    volume,
    mute,
    playback,
    elapsed,
    duration,
    handlePlayPause,
    handleVolumeChange,
    handleMuteChange,
    handlePreviousSong,
    handleNextSong
  } = useAudioContext() ?? {};

  const volumeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleVolumeChange) {
      handleVolumeChange(event);
    }
  };

  return (
    <div className="bg-text-lighter rounded-lg shadow-lg w-full max-w-md mx-auto flex flex-col justify-between items-center p-2 space-y-4 my-4">
      <section className="w-full text-center min-h-20">
        {playback && (
          <article className="flex flex-col items-center justify-center p-2">
            <div className={`${karla.variable} text-xl font-semibold`}>
              {song?.title}
            </div>
            <div className="text-base subpixel-antialiased">
              {elapsed} / {duration}
            </div>
          </article>
        )}
      </section>

      <section className="grid grid-cols-3 gap-4 items-center justify-center w-full min-h-20">
        <button
          onClick={handlePreviousSong}
          className="control-btn flex flex-col justify-center items-center"
        >
          <SkipBack weight="bold" className="h-6 w-6" />
          <span className="control-label text-xs sm:text-sm lg:text-base">
            Previous
          </span>
        </button>

        <button
          onClick={handlePlayPause}
          className="control-btn flex flex-col justify-center items-center"
        >
          {playback ? (
            <Pause weight="bold" className="h-8 w-8 " />
          ) : (
            <Play weight="bold" className="h-8 w-8 " />
          )}
          <span className="control-label text-xs sm:text-sm lg:text-base">
            {playback ? 'Pause' : 'Play'}
          </span>
        </button>

        <button
          onClick={handleNextSong}
          className="control-btn flex flex-col justify-center items-center"
        >
          <SkipForward weight="bold" className="h-6 w-6" />
          <span className="control-label text-xs sm:text-sm lg:text-base">
            Next
          </span>
        </button>
      </section>

      <section className="flex justify-evenly items-center w-full space-x-4">
        <button
          onClick={handleMuteChange}
          className="control-btn flex flex-col justify-center items-center min-w-12"
        >
          {mute ? (
            <SpeakerX weight="bold" className="h-6 w-6" />
          ) : (
            <SpeakerSlash weight="bold" className="h-6 w-6" />
          )}
          <span className="control-label text-xs sm:text-sm lg:text-base">
            {mute ? 'Unmute' : 'Mute'}
          </span>
        </button>
        <div className="relative w-full h-full flex justify-end items-center p-4">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={volumeChangeHandler}
            className="volume-control"
            style={{
              backgroundSize: `${((volume ?? 0) * 100).toFixed(2)}% 100%`
            }}
          />
        </div>
      </section>
    </div>
  );
}
