import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const ReactPlayerDemo = () => {
  const playerRef = useRef(null);

  const handleSeek = () => {
    if (playerRef.current) {
      // Seek to the 10th second
      playerRef.current.seekTo(10);
    }
  };

  const handleGetCurrentTime = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      console.log('Current Time:', currentTime);
    }
  };

  // ...Other methods can be similarly called using the 'playerRef' reference
  const getPlayer =()=>{
    if(playerRef.current)
    {
        const play = playerRef.current.getInternalPlayer();
        console.log(play);
    }
  }
  const ready =()=>{
    console.log("ready to play");
  }
  const seeking=()=>{
    console.log("Seeking to ",playerRef.current.getCurrentTime());
  }

  const play =()=>{
    console.log("Seeking to ",playerRef.current.getCurrentTime());
    console.log('playing Video!!');
  }

  const pause=()=>{
    console.log("Video is Paused!!");
  }
  const buffer =()=>{
    console.log("buffering!! Calling Pause");
    pause();

  }

  return (
    <div>
      <ReactPlayer
      controls
        
        ref={playerRef}
        url="https://www.youtube.com/watch?v=Qhaz36TZG5Y"
        onSeek={seeking}
        onReady={ready}
        onPause={pause}
        onPlay={play}
        onBuffer={buffer}
      />
      <button onClick={handleSeek}>Seek to 10 seconds</button>
      <button onClick={handleGetCurrentTime}>Get Current Time</button>
      <button onClick={getPlayer}>Get internal Player </button>
      {/* Add other buttons and logic for calling different methods */}
    </div>
  );
};

export default ReactPlayerDemo;
