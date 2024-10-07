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
import Controls from '@/components/Controls';
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
    <div className="min-h-60 max-w-96 mx-auto flex flex-col justify-between items-center p-2">
      <section className="min-h-32 w-full">
        {playback && (
          <article className="w-full text-center flex flex-col items-center justify-center p-2">
            <div
              className={`${karla.variable} text-base`}
            >{`${song.title}`}</div>
            <div className="text-sm">{`${elapsed} / ${duration}`}</div>
          </article>
        )}
      </section>

      <section className="flex justify-between items-end p-2">
        <div className="flex flex-col justify-center items-center flex-1">
          <button
            onClick={play}
            className="flex flex-col justify-center items-center p-4"
          >
            {playback ? (
              <Pause weight="duotone" className="h-6 w-6" />
            ) : (
              <Play weight="duotone" className="h-6 w-6" />
            )}
            <label className="" htmlFor="play">
              {playback ? 'Pause' : 'Play'}
            </label>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <button
            onClick={previousSong}
            className="flex flex-col justify-center items-center p-4"
          >
            <SkipBack weight="duotone" className="h-6 w-6" />
            <label className="" htmlFor="previous">
              Previous
            </label>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <button
            onClick={nextSong}
            className="flex flex-col justify-center items-center p-4"
          >
            <SkipForward weight="duotone" className="h-6 w-6" />
            <label className="" htmlFor="next">
              Next
            </label>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <button
            onClick={muteChange}
            className="flex flex-col justify-center items-center p-4"
          >
            {mute ? (
              <SpeakerX weight="duotone" className="h-6 w-6" />
            ) : (
              <SpeakerSlash weight="duotone" className="h-6 w-6" />
            )}
            <label className="" htmlFor="mute">
              {mute ? 'Unmute' : 'Mute'}
            </label>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleSongChange}
          />
          <label className="">Volume</label>
        </div>
      </section>
      <Controls />
    </div>
  );
}
