'use client';
import { useState } from 'react';
import AudioControls from './AudioControls';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(true);

  const toggleAudioPlayer = () => {
    setIsAudioPlayerVisible((prevState: boolean) => !prevState);
  };

  return (
    <div className="player-card border-2 border-blue-300 h-full w-full flex flex-col justify-end items-center p-2">
      <button
        onClick={toggleAudioPlayer}
        className="toggle-button px-4 py-2 rounded transition-colors duration-300 "
      >
        {isAudioPlayerVisible ? 'Hide Audio Player' : 'Show Audio Player'}
      </button>

      <div className="audio-player-container mt-4 w-full">
        {isAudioPlayerVisible && (
          <AudioControls isVisible={isAudioPlayerVisible} />
        )}
      </div>
    </div>
  );
}
