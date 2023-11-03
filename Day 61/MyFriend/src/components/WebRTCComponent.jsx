import React, { useState, useEffect } from "react";
import SimplePeer from "simple-peer";

const WebRTCComponent = () => {
  const [signalData, setSignalData] = useState(null);
  const [peer, setPeer] = useState(null);

  useEffect(() => {
    const initializePeer = () => {
      const newPeer = new SimplePeer({ initiator: true });

      newPeer.on("signal", (data) => {
        console.log("Signal data:", data);
        setSignalData(data);
        // Send this signal data to the other peer
      });

      newPeer.on("connect", () => {
        console.log("Peer connected");
        // Handle connection establishment
      });

      newPeer.on("data", (data) => {
        console.log("Received data:", data);
        // Handle the received data
      });

      setPeer(newPeer);
    };

    initializePeer();

    // Cleanup function
    return () => {
      if (peer) {
        peer.destroy();
      }
    };
  }, []);

  return <div>WebRTC Component</div>;
};

export default WebRTCComponent;
