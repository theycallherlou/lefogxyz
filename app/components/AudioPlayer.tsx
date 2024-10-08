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

  const handleSongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    volumeChange(event);
  };

  return (
    <div className="outline-2 outline-offset-4 outline-primary-darker border-2 border-primary-lighter backdrop-opacity-10 backdrop-blur-xl w-full max-w-md mx-auto rounded-lg shadow-lg flex flex-col justify-between items-center p-4 space-y-4 my-4">
      {/* Song Title and Duration */}
      <section className="w-full text-center">
        {playback && (
          <article className="flex flex-col items-center justify-center p-2">
            <div className={`${karla.variable} text-lg font-semibold`}>
              {song.title}
            </div>
            <div className="text-sm text-gray-600">
              {elapsed} / {duration}
            </div>
          </article>
        )}
      </section>

      {/* Control Buttons: Play, Previous, Next */}
      <section className="grid grid-cols-3 gap-4 items-center justify-center w-full">
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
            <Pause weight="bold" className="h-8 w-8" />
          ) : (
            <Play weight="bold" className="h-8 w-8" />
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

      <section className="flex justify-between items-center w-full space-x-4">
        <button
          onClick={muteChange}
          className="flex flex-col justify-center items-center"
        >
          {mute ? (
            <SpeakerX weight="bold" className="h-4 md:h-6 w-4 md:w-6" />
          ) : (
            <SpeakerSlash weight="bold" className="h-4 md:h-6 w-4 md:w-6" />
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
            value="0.5"
            className="volume-control"
          />
        </div>
      </section>
    </div>
  );
}
