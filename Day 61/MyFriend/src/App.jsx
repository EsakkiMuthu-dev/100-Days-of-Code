import React, { useState, useEffect, useRef } from 'react';
import Peer from 'peerjs';
import YouTube from 'react-youtube';

function App() {
  const [peerId, setPeerID] = useState('');
  const [remotePeerId, setRemotePeerId] = useState('');
  const [message, setMessage] = useState('');
  const [isVideoOn, setVideoOn] = useState(true);
  const [isAudioOn, setAudioOn] = useState(true);
  const[youtubeLink,setYoutubeLink]=useState('');
  const ourConnection = useRef(null);
  const ourVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerInstance = useRef(null);




  // Function to toggle video
  const toggleVideo = () => {
    if (ourVideoRef.current.srcObject) {
      const tracks = ourVideoRef.current.srcObject.getVideoTracks();
      tracks.forEach((track) => {
        track.enabled = !track.enabled;
        setVideoOn(track.enabled);
      });
    }
  };

  // Function to toggle audio
  const toggleAudio = () => {
    if (ourVideoRef.current.srcObject) {
      const tracks = ourVideoRef.current.srcObject.getAudioTracks();
      tracks.forEach((track) => {
        track.enabled = !track.enabled;
        setAudioOn(track.enabled);
      });
    }
  };

  // End Call
  const endCall = () => {
    if (ourVideoRef.current && ourVideoRef.current.srcObject) {
      const tracks = ourVideoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
    if (remoteVideoRef.current && remoteVideoRef.current.srcObject) {
      const tracks = remoteVideoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
    if (peerInstance.current) {
      peerInstance.current.destroy();
    }
  };

  // Function to handle the YouTube video link
  const handleYoutubeLink = () => {
    // Use the YouTube video link to render the video
    setYoutubeLink(youtubeLink); // Set the state to trigger a re-render
  };
  // Initialize the Peer connection
  useEffect(() => {
    const peer = new Peer();

    // Get local peer ID
    peer.on('open', (id) => {
      setPeerID(id);
    });

    // while connection
    peer.on('connection', (conn) => {
      console.log('Connected!!');
      console.log(conn);
      ourConnection.current = conn;
      conn.on('open', function() {
        // Receive messages
        conn.on('data', function(data) {
          console.log('Received', data);
        });
      
          // Send messages
          conn.send('Hello from reciever !!');
        });
    });

    // Set the current peer instance
    peerInstance.current = peer;

    // Handle incoming calls
    peerInstance.current?.on('call', (call) => {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia({ video: false, audio: true }, (mediaStream) => {
        ourVideoRef.current.srcObject = mediaStream;
        ourVideoRef.current.onloadedmetadata = () => {
          ourVideoRef.current.play().catch((error) => console.log(error));
        };

        call.answer(mediaStream);

        call.on('stream', (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.onloadedmetadata = () => {
            remoteVideoRef.current.play().catch((error) => console.log(error));
          };
        });
        
      });
    });
  }, []);

  // Initiate a call to the remote peer
  const callPeer = (remotePeerId) => {
    console.log('Trying to connect.....');
    ourConnection.current = peerInstance.current.connect(remotePeerId);
    if (ourConnection.current) console.log('Connection Established!!');
    console.log(ourConnection.current);
    ourConnection.current.on('open', function() {
      // Receive messages
      ourConnection.current.on('data', function(data) {
        console.log('Received', data);
      });
    
      // Send messages
      ourConnection.current.send('Hello From Caller  !');
    });
    
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ video: false, audio: true }, (ourStream) => {
      const call = peerInstance.current.call(remotePeerId, ourStream);

      ourVideoRef.current.srcObject = ourStream;
      ourVideoRef.current.onloadedmetadata = () => {
        ourVideoRef.current.play().catch((error) => console.log(error));
      };

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.onloadedmetadata = () => {
          remoteVideoRef.current.play().catch((error) => console.log(error));
        };
      });

    });
  };

  // Function to send messages between peers
  const sendMessage = () => {  
    ourConnection.current.send(message);
  };

  return (
    <>
      <h1>For You</h1>
      <h1> Your ID:- {peerId} </h1>
      <input
        type="text"
        value={remotePeerId}
        onChange={(e) => setRemotePeerId(e.target.value)}
      />

      <button onClick={() => callPeer(remotePeerId)}> Call </button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}> Send Message </button>
      <input
        type="text"
        value={youtubeLink}
        onChange={(e) => setYoutubeLink(e.target.value)}
      />
      <button onClick={() => handleYoutubeLink()}> Play YouTube Video </button>
      {youtubeLink && <YouTube videoId={youtubeLink.split('=')[1]} />}
      <div>
        <button onClick={toggleVideo}>
          {isVideoOn ? 'Turn Video Off' : 'Turn Video On'}
        </button>
        <button onClick={toggleAudio}>
          {isAudioOn ? 'Mute Audio' : 'Unmute Audio'}
        </button>
        <button onClick={endCall}>End Call</button>
      </div>
      <div>
        <video ref={ourVideoRef} autoPlay playsInline muted />
      </div>
      <div>
        <video ref={remoteVideoRef} autoPlay playsInline />
      </div>
    </>
  );
}

export default App;
