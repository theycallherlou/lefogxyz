'use client';
import { useState } from 'react';
import AudioControls from './AudioControls';
import AudioPlaylist from './AudioPlaylist';
import './AudioPlayer.css';
import { useAudioContext } from '@/contexts/AudioContext';

export default function AudioPlayer() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};
  const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(true);

  const toggleAudioPlayer = () => {
    setIsAudioPlayerVisible((prevState: boolean) => !prevState);
  };

  return (
    <>
      <div className="min-h-60 w-full rounded-lg shadow-lg">
        <div
          className={`${
            isAudioPlayerVisible ? 'visible' : 'hidden'
          } h-full w-full flex flex-col justify-end items-center p-2`}
        >
          <AudioPlaylist />
          <section
            className={`w-full ${isAudioPlayerVisible ? 'visible' : 'hidden'}`}
          >
            <AudioControls />
          </section>
        </div>
      </div>
      <button onClick={toggleAudioPlayer} className="toggle-button">
        {isAudioPlayerVisible ? 'Hide Player' : 'Show Player'}
      </button>
    </>
  );
}
