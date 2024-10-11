export interface ITrack {
  id: number;
  title: string;
  album: string;
  artist: string;
  url: string;
  duration: string;
}

interface AudioContextType {
  playlist: ITrack[];
  song: ITrack;
  currentIndex: number;
  playback: boolean;
  loadNewSong: (src: string) => void;
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMuteChange: () => void;
  handlePlayPause: () => Promise<void>;
  handleSongChange: (newIndex: number) => void;
  handlePreviousSong: () => void;
  handleNextSong: () => void;
  elapsed: string;
  duration: string;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
}
