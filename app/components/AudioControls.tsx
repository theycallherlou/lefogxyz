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
    <div className="w-full max-w-md mx-auto flex flex-col justify-between items-center">
      <section className="w-full text-center min-h-20">
        {playback && (
          <article className="flex flex-col items-center justify-center">
            <div className={`${karla.variable} text-xl font-semibold`}>
              {song?.title}
            </div>
            <div className="text-base subpixel-antialiased">
              {elapsed} / {duration}
            </div>
          </article>
        )}
      </section>

      <section className="grid grid-cols-3 gap-4 items-center justify-center w-full">
        <button
          onClick={handlePreviousSong}
          className="control-btn flex flex-col justify-center items-center"
        >
          <SkipBack weight="bold" className="h-6 w-6" />
          <label className="control-label text-xs sm:text-sm lg:text-base">
            Previous
          </label>
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
          <label className="control-label text-xs sm:text-sm lg:text-base">
            {playback ? 'Pause' : 'Play'}
          </label>
        </button>

        <button
          onClick={handleNextSong}
          className="control-btn flex flex-col justify-center items-center"
        >
          <SkipForward weight="bold" className="h-4 w-4" />
          <label className="control-label text-xs sm:text-sm lg:text-base">
            Next
          </label>
        </button>
      </section>

      <section className="flex justify-center items-center w-full px-2">
        <button
          onClick={handleMuteChange}
          className="control-btn flex flex-col justify-center items-center min-w-12"
        >
          {mute ? (
            <SpeakerX weight="bold" className="h-4 w-4" />
          ) : (
            <SpeakerSlash weight="bold" className="h-4 w-4" />
          )}
          <label className="control-label text-xs sm:text-sm lg:text-base">
            {mute ? 'Unmute' : 'Mute'}
          </label>
        </button>
        <div className="relative w-full h-full flex justify-end items-center">
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
