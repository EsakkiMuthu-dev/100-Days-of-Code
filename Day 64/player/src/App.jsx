import React, { useEffect, useState ,useRef} from 'react';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';import PlyrPlayer from './PlyrPlayer';
import ReactPlayerDEmo from './ReactPlayerDEmo';
function App() {
  const [player, setPlayer] = useState(null);
  const playerRef = useRef(null);
  if(player)console.log(player);
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && player) {
        player.getInternalPlayer().requestPictureInPicture();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [player]);

  const opts = {
    playerVars: {
      // other player options
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };


  function getYouTubeID(url) {
    let videoId = "";
    const pattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(pattern);

    if (match && match[1]) {
        videoId = match[1];
    }

    return videoId;
  }

  const videoRef = useRef(null);
  const [pipMode, setPipMode] = useState(false);

  const handleTogglePip = () => {
    if (!document.pictureInPictureElement) {
      if (videoRef.current !== null) {
        videoRef.current.requestPictureInPicture()
          .then(() => setPipMode(true))
          .catch(error => console.error('Failed to enable Picture-in-Picture mode', error));
      }
    } else {
      document.exitPictureInPicture()
        .then(() => setPipMode(false))
        .catch(error => console.error('Failed to disable Picture-in-Picture mode', error));
    }
  };
  const handleChange = (event) => {
    console.log(event.data)
    if (event.data === 1) {
      console.log('Playing');
      console.log(playerRef.current.getCurrentTime());
    } else if (event.data === 2) {
      console.log('Paused');
    } else if (event.data === 3) {
      console.log('Buffering');
      console.log(playerRef.current.getCurrentTime())
    } else if (event.data === 4) {
      console.log('Video cued');
    } else if (event.data === 5) {
      console.log('Video ended');
    } else if (event.data === 6) {
      console.log('Video forwarded');
    }
  };
 
  return (
    <>
      <h1>Video Player</h1>
      
      {/* <video
        ref={videoRef}
        src="https://www.youtube.com/watch?v=VChwoluq5-s"
        controls
        autoPlay
        playsInline
      ></video>
      <button onClick={handleTogglePip}>
        {pipMode ? 'Disable PiP' : 'Enable PiP'}
      </button> */}
{/* 
      <YouTube 
      ref={playerRef}
      videoId={getYouTubeID("https://youtu.be/FSs_JYwnAdI?si=YiStBPAH9NcWAU26")}
      controls
      onReady={onReady}
      onStateChange={handleChange}
      /> */}
      {/* <PlyrPlayer /> */}
      <ReactPlayerDEmo />
    </>
  );
}

export default App;
