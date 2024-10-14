import { useAudioContext } from '@/contexts/AudioContext';
import { playlist } from '@/data';
import { ITrack } from '@/types';

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};
  return (
    <div>
      <ul className="list-none p-2">
        {playlist.map((track: ITrack, index: number) => (
          <li
            key={track.id}
            className={`${currentIndex === index ? 'active' : ''}`}
          >
            <button
              className="text-xs sm:text-sm md:text-base lg:text-lg subpixel-antialiased"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.title} | {track.album} | {track.artist}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
