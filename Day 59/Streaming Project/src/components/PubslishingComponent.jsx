import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WebRTCAdaptor } from '@antmedia/webrtc_adaptor';

const PublishingComponent = () => {
  const [publishing, setPublishing] = useState(false);
  const [websocketConnected, setWebsocketConnected] = useState(false);
  const [streamId, setStreamId] = useState('stream123');
  const webRTCAdaptor = useRef(null);
  var publishedStreamId = useRef(null);

  const handlePublish = () => {
    setPublishing(true);
    webRTCAdaptor.current.publish(streamId);
    publishedStreamId.current=streamId

  };

  const handleStopPublishing = () => {
    setPublishing(false);
    webRTCAdaptor.current.stop(publishedStreamId.current);
  };

  const handleStreamIdChange = (event) => {
    setStreamId(event.target.value);
  };

  useEffect(() => {
if(webRTCAdaptor.current === undefined || webRTCAdaptor.current === null){
    webRTCAdaptor.current = new WebRTCAdaptor({
      websocket_url: 'wss://test.antmedia.io:/WebRTCAppEE/websocket',
      mediaConstraints: {
        video: true,
        audio: true,
      },
      peerconnection_config: {
        iceServers: [{ urls: 'stun:stun1.l.google.com:19302' }],
      },
      sdp_constraints: {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: false,
      },
      localVideoId: 'localVideo',
      dataChannelEnabled: true,
      callback: (info, obj) => {
        if (info === 'initialized') {
          setWebsocketConnected(true);
        }
        console.log(info, obj);
      },
      callbackError: function (error, message) {
        console.log(error, message);
      },
    });
  }
  }, []);

  return (
    <Container className="text-center">
      <h1>Publish Page</h1>

      <Row className="mb-4">
        <Col>
          <video
            id="localVideo"
            controls
            autoPlay
            muted
            style={{
              width: '40vw',
              height: '60vh',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          ></video>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Row>
          <div className="mb-3">
            <input
              className="form-control form-control-lg"
              type="text"
              defaultValue={streamId}
              onChange={handleStreamIdChange}
            />
            <label className="form-label" htmlFor="streamId">
              Enter Stream Id
            </label>
          </div>
        </Row>
        <Col>
          {!publishing ? (
            <Button variant="primary" disabled={!websocketConnected} onClick={handlePublish}>
              Start Publishing
            </Button>
          ) : (
            <Button variant="danger" onClick={handleStopPublishing}>
              Stop Publishing
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PublishingComponent;