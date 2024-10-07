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
    <div className="h-full w-full flex flex-col justify-around items-center p-2">
      <section className="min-h-40 w-full flex flex-col justify-evenly items-center text-center p-2">
        {playback && (
          <article className="">
            <div className="font-semibold subpixel-antialiased">{`${song.title}`}</div>
            <div className="font-normal subpixel-antialiased">{`${elapsed} / ${duration}`}</div>
          </article>
        )}
      </section>

      <section className="w-full flex justify-between items-center p-2">
        <div className="icon-container">
          <button onClick={play} className="icon-button">
            {playback ? (
              <Pause weight="duotone" className="w-48 h-48 sm:w-52 sm:h-52sa" />
            ) : (
              <Play weight="duotone" className="w-48 h-48 sm:w-52 sm:h-52sa" />
            )}
          </button>
          <label className="icon-label" htmlFor="play">
            {playback ? 'Pause' : 'Play'}
          </label>
        </div>

        <div className="icon-container">
          <button onClick={previousSong} className="icon-button">
            <SkipBack
              weight="duotone"
              className="w-48 h-48 sm:w-52 sm:h-52sa"
            />
          </button>
          <label className="icon-label">Previous</label>
        </div>

        <div className="icon-container">
          <button onClick={nextSong} className="icon-button">
            <SkipForward weight="duotone" />
          </button>
          <label className="icon-label">Next</label>
        </div>

        <div className="icon-container">
          <button onClick={muteChange} className="icon-button">
            {mute ? (
              <SpeakerX weight="duotone" />
            ) : (
              <SpeakerSlash weight="duotone" />
            )}
            <label className="icon-label">{mute ? 'Unmute' : 'Mute'}</label>
          </button>
        </div>

        <div className="icon-container">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleSongChange}
          />
          <label className="icon-label">Volume</label>
        </div>
      </section>
    </div>
  );
}
