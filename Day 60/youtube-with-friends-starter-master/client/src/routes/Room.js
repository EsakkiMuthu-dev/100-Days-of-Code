import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row;
`;

const LeftRow = styled.div`
    width: 40%;
    height: 100%;
`;

const RightRow = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Video = styled.video`
    height: 50%;
    width: 100%;
    border: 1px solid black;
`;

const Room = (props) => {
    const socketRef = useRef();
    const userVideoRef = useRef();
    const partnerVideo = useRef();
    const peerRef = useRef();
    const youtubePlayer = useRef();
    const [videoID, setVideoID] = useState("");

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            userVideoRef.current.srcObject = stream;
            socketRef.current = io.connect("/");
            socketRef.current.emit("join room", props.match.params.roomID);

            socketRef.current.on("other user", partnerID => {
                if (partnerID) {
                    peerRef.current = createPeer(partnerID, socketRef.current.id, stream);
                }
            });

            socketRef.current.on("caller signal", incoming => {
                peerRef.current = addPeer(incoming.signal, incoming.callerID, stream);
            });

            socketRef.current.on("callee signal", signal => {
                peerRef.current.signal(signal);
            });

            socketRef.current.on("room full", () => {
                alert("room is full");
            })
        })
    }, []);

    function createPeer(partnerID, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            const payload = {
                partnerID,
                callerID,
                signal
            }
            socketRef.current.emit("call partner", payload);
        });

        peer.on("stream", handleStream);

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            const payload = {
                callerID,
                signal
            }
            socketRef.current.emit("accept call", payload);
        });

        peer.on("stream", handleStream);

        peer.signal(incomingSignal);
        return peer;
    }


    function handleStream(stream) {
        partnerVideo.current.srcObject = stream;
    }


    return (
        <Container>
            <LeftRow>
                <Video muted autoPlay ref={userVideoRef} />
                <Video muted autoPlay ref={partnerVideo} />
            </LeftRow>
            <RightRow />
        </Container>
    );
};

export default Room;