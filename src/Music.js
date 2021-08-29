import { useState } from "react";
import Sound from "react-sound";
import babyShark from "./baby-shark.mp3";

const Music = ({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div>
      <Sound
        url={babyShark}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300 /* in milliseconds */}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? (
          <img src="no-sound.png" height="30" width="30" alt="no-sound" />
        ) : (
          <img src="sound.png" height="30" width="30" alt="sound" />
        )}
      </button>
    </div>
  );
};

export default Music;
