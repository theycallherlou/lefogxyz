'use client';
import { useState } from 'react';
import AudioControls from './AudioControls';
import { playlist } from '@/data';
import { ITrack } from '@/types';
import './AudioPlayer.css';
import { useAudioContext } from '@/contexts/AudioContext';

export default function AudioPlayer() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};
  const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(true);

  const toggleAudioPlayer = () => {
    setIsAudioPlayerVisible((prevState: boolean) => !prevState);
  };

  return (
    <div className="bg-text-lighter h-full w-full rounded-lg shadow-lg flex flex-col justify-end items-center p-2">
      <ul className="list-none p-2">
        {playlist.map((track: ITrack, index: number) => (
          <li
            key={track.id}
            className={`${currentIndex === index ? 'active' : ''}`}
          >
            <button
              className="bg-none border-none w-full text-left text-xs"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.title} | {track.album} | {track.artist}
            </button>
          </li>
        ))}
      </ul>
      <section
        className={`w-full ${isAudioPlayerVisible ? 'visible' : 'hidden'}`}
      >
        <AudioControls />
      </section>
      <button onClick={toggleAudioPlayer} className="toggle-button">
        {isAudioPlayerVisible ? 'Hide Player' : 'Show Player'}
      </button>
    </div>
  );
}
