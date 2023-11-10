import React, { useState, useRef, useEffect } from 'react';
import Plyr from 'plyr';

const PlyrPlayer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const playerRef = useRef(null);

  const getVideoId = (url) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const videoId = getVideoId(videoUrl);
    console.log(videoId)
    if (playerRef.current) {
      playerRef.current.source = {
        type: 'video',
        sources: [
          {
            src: `https://www.youtube.com/watch?v=${videoId}`,
            provider: 'youtube',
          },
        ],
      };
    }
  };

  useEffect(() => {
    playerRef.current = new Plyr('#player', {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={videoUrl}
          onChange={(event) => setVideoUrl(event.target.value)}
          placeholder="Enter YouTube Video URL"
        />
        <button type="submit">Play Video</button>
      </form>
      <div id="player"></div>
    </div>
  );
};

export default PlyrPlayer;
