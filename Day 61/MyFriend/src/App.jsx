import React, { useState, useEffect, useRef } from 'react';
import Peer from 'peerjs';
import ReactPlayer from 'react-player';
import Button from '@mui/material/Button';
import Header from './UIComponents/Header';
import {Box, Typography,Stack,Container,TextField, Grid } from '@mui/material';
import MicOffIcon from '@mui/icons-material/MicOff';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import CallEndIcon from '@mui/icons-material/CallEnd';

import CopyToClipboardButton from './UIComponents/CopyToClipboardButton';
function App() {
  const [peerId, setPeerID] = useState('');
  const [remotePeerId, setRemotePeerId] = useState('');
  const [message, setMessage] = useState('');
  const [isVideoOn, setVideoOn] = useState(true);
  const [isAudioOn, setAudioOn] = useState(true);
  const[isOnCall,setIsOnCall] = useState(false);
  const[youtubeLink,setYoutubeLink]=useState('');
  const[recievedMessages,setReceievedMessages]=useState(["hi","hello"]);
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
    setIsOnCall(false);
  };

  // Function to handle the YouTube video link
  const handleYoutubeLink = () => {
    // Use the YouTube video link to render the video
    ourConnection.current.send(`Youtube-link ${youtubeLink}`);
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
          if(data.startsWith('Youtube-link'))
          {
            setYoutubeLink(data.split(' ')[1]);
          }
          
          console.log('Received', data);
          setReceievedMessages([...recievedMessages,data]);
        });
      
          // Send messages
          conn.send('Hello from reciever !!');
        });
    });

    // Set the current peer instance
    peerInstance.current = peer;

    // Handle incoming calls
    peerInstance.current?.on('call', (call) => {
      setIsOnCall(true);
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
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
    setIsOnCall(true);
    console.log('Trying to connect.....');
    ourConnection.current = peerInstance.current.connect(remotePeerId);
    if (ourConnection.current) console.log('Connection Established!!');
    console.log(ourConnection.current);
    ourConnection.current.on('open', function() {
      // Receive messages
      ourConnection.current.on('data', function(data) {
        if(data.startsWith('Youtube-link'))
          {
            setYoutubeLink(data.split(' ')[1]);
           
          }
    
        console.log('Received', data);

        setReceievedMessages([...recievedMessages,data]);
      });
    
      // Send messages
      ourConnection.current.send('Hello From Caller  !');
    });
    
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (ourStream) => {
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
    setMessage("");
  };



 
  return (
    <>
    <Header />
    <main>

    <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Connect 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Your Id is {peerId} <CopyToClipboardButton id={peerId} />
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
               <TextField
               size='small'
                id="outlined-password-input"
                label="Reciever ID"
                value={remotePeerId}
                onChange={(e) => setRemotePeerId(e.target.value)}
              />
              <Button size='medium' variant="contained" onClick={() => callPeer(remotePeerId)}> Make Call
              </Button>

             
              
            </Stack>
            <Stack
              sx={{ pt: 6 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
               <TextField
                size='small'
                label="URL"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
              />
              <Button size='small' variant="contained" onClick={() => handleYoutubeLink()}> Play Youtube Video
              </Button>
              
            </Stack>
            <Stack mt={2}>
            {youtubeLink && <ReactPlayer url={youtubeLink}/> }
            </Stack>
          </Container>
          
        </Box>
        {/* add video elements to grid */}
      
   

     {isOnCall &&<>
      <Stack 
      justifyContent="center"
      alignItems="center"
        spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        <video ref={ourVideoRef} width="300" height="170"  autoPlay playsInline muted />
        <video ref={remoteVideoRef} width="300" height="170"  autoPlay playsInline muted />
      </Stack>
      <Stack   justifyContent="center"
        alignItems="center"
      spacing={{ xs: 1, sm: 2 }}
      direction="row" useFlexGap flexWrap="wrap">
        <Button variant="contained" onClick={toggleVideo}>
          {isVideoOn ? <VideocamIcon /> : <VideocamOffIcon />}
        </Button>
        <Button variant="contained" onClick={toggleAudio}>
          {isAudioOn ? <MicIcon /> : <MicOffIcon />}    
        </Button>

        <Button variant="contained" onClick={endCall}>
          <CallEndIcon />
        </Button>
      </Stack>
      </>}
    
      {/* <div>
        <video ref={ourVideoRef} autoPlay playsInline muted />
      </div>
      <div>
        <video ref={remoteVideoRef} autoPlay playsInline />
      </div> */}

    
      </main>
    </>
  );
}

export default App;
