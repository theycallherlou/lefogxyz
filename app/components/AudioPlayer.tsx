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
    <div className="h-full w-full flex flex-col justify-end items-center p-2">
      <section className="w-full flex flex-col justify-end items-center p-2">
        <ul className="list-none p-0">
          {playlist.map((track: ITrack, index: number) => (
            <li
              key={track.id}
              className={`${
                currentIndex === index ? 'active' : ''
              } my-2 cursor-pointer`}
            >
              <button
                className="bg-none border-none text-base cursor-pointer p-2 w-full text-left"
                onClick={() => handleSongChange && handleSongChange(index)}
              >
                {track.title} - {track.album} - {track.artist}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section
        className={`mt-4 w-full ${isAudioPlayerVisible ? 'visible' : 'hidden'}`}
      >
        <AudioControls />
      </section>
      <button
        onClick={toggleAudioPlayer}
        className="toggle-button px-4 py-2 rounded transition-colors duration-300 "
      >
        {isAudioPlayerVisible ? 'Hide Audio Player' : 'Show Audio Player'}
      </button>
    </div>
  );
}
