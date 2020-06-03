import React from 'react';
import Background from './components/Background/Background';
import {
  Container,
  Row,
  Col,
  Card
} from 'react-bootstrap';

import SocialMediaLink from './components/SocialMediaLink/SocialMediaLink';

import {
  RiSoundcloudLine,
  RiSpotifyLine,
  RiMailLine,
  RiInstagramLine
} from "react-icons/ri";

import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Background/>
      <Container fluid style={{textAlign: 'center'}}>
          <Row>
            <Col sm={2}/>
            <Col sm={8} className="content-container">
              <Row>
                <Col sm={12}>
                  <h1>Technical Debt</h1>
                </Col>
                <Col sm={3}></Col>
                <Col sm={6}>
                    <SocialMediaLink link="#" icon={<RiSoundcloudLine size='2em'/>}/>
                    <SocialMediaLink link="#" icon={<RiSpotifyLine size='2em'/>}/>
                    <SocialMediaLink link="#" icon={<RiInstagramLine size='2em'/>}/>
                    <SocialMediaLink link="#" icon={<RiMailLine size='2em'/>}/>
                </Col>
                <Col sm={3}></Col>
              </Row>
            </Col>
            <Col sm={2}/>
          </Row>
          <Row>
            {/* LEFT BORDER */}
            <Col sm={1}>
            </Col>
            {/* LEFT COLUMN */}
            <Col sm={5}>
              <Row>
                <Col sm={1}></Col>
                <Col sm={10} className="content-container">
                  <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/832022116&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                  </iframe>
                </Col>
                <Col sm={1}></Col>
              </Row>
            </Col>
            {/* RIGHT COLUMN */}
            <Col sm={5}>
              <Row>
                <Col sm={1}></Col>
                <Col sm={11} className="content-container">
                  <iframe src="https://open.spotify.com/embed/track/6rJr3fjvb5C6lcUG3WoWKs" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </Col>
              </Row>
            </Col>
            {/* RIGHT BORDER */}
            <Col sm={1}></Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
