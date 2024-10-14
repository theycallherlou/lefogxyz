'use client';
import { useEffect } from 'react';
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  SpeakerNone,
  SpeakerSlash
} from '@phosphor-icons/react';
import './AudioPlayer.css';
import { useAudioContext } from '@/contexts/AudioContext';

export default function AudioControls() {
  const {
    volume,
    mute,
    playback,
    handlePlayPause,
    handleVolumeChange,
    handleMuteChange,
    handlePreviousSong,
    handleNextSong,
    volumeSliderRef
  } = useAudioContext() ?? {};

  // set background size on load
  useEffect(() => {
    if (volumeSliderRef?.current) {
      const value = (parseFloat(volumeSliderRef.current.value) * 100).toFixed(
        2
      );
      volumeSliderRef.current.style.backgroundSize = `${value}% 100%`;
    }
  }, [volumeSliderRef]);

  const volumeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleVolumeChange) {
      handleVolumeChange(event);
    }
    const target = event.target as HTMLInputElement;
    const value = (parseFloat(target.value) * 100).toFixed(2);
    target.style.backgroundSize = `${value}% 100%`;
  };

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col justify-between items- my-4">
      <section className="w-full flex justify-between min-w-40 mx-auto">
        <button onClick={handlePreviousSong} className="control-btn">
          <SkipBack weight="bold" className="h-6 min-w-6 mx-auto" />
          <label className="control-label">Previous</label>
        </button>

        <button onClick={handlePlayPause} className="control-btn">
          {playback ? (
            <Pause weight="bold" className="h-8 min-w-8 mx-auto" />
          ) : (
            <Play weight="bold" className="h-8 min-w-8 mx-auto" />
          )}
          <label className="control-label">{playback ? 'Pause' : 'Play'}</label>
        </button>

        <button onClick={handleNextSong} className="control-btn">
          <SkipForward weight="bold" className="h-6 min-w-6 mx-auto" />
          <label className="control-label">Next</label>
        </button>
      </section>

      <div className="w-full flex justify-between items-center space-x-6">
        <button
          id="mute"
          type="button"
          aria-label="Mute"
          onClick={handleMuteChange}
          className="control-btn"
        >
          {mute ? (
            <SpeakerNone weight="bold" className="h-6 min-w-6 mx-auto" />
          ) : (
            <SpeakerSlash weight="bold" className="h-6 min-w-6 mx-auto" />
          )}
          <label className="control-label">{mute ? 'Unmute' : 'Mute'}</label>
        </button>
        <div className="relative w-full h-full flex justify-center items-center px-8">
          <input
            id="volume"
            ref={volumeSliderRef}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={volumeChangeHandler}
            className="w-full"
            style={{}}
          />
        </div>
      </div>
    </div>
  );
}
