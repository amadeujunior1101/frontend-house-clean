import React, { useRef, useState } from 'react';
import { IconPause } from './IconPause';
import { IconPlay } from './IconPlay';

interface AudioPlayerProps {
  audioUrl: string;
  songName: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, songName }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handlePlayPause}
        className="text-2xl text-black rounded-full p-1 focus:outline-none focus:ring focus:border-blue-300"
      >
        {isPlaying ? <IconPause /> : <IconPlay />}
      </button>
      <div className="text-black pl-2">{songName}</div>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
};

export { AudioPlayer };
