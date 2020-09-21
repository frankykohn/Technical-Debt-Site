import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import {
  Link
} from "react-router-dom";

import SocialMediaLink from '../../components/SocialMediaLink/SocialMediaLink';
import IFrameWrapper from '../../components/IFrameWrapper/IFrameWrapper';

import {
  RiSoundcloudLine,
  RiSpotifyLine,
  RiMailLine,
  RiInstagramLine
} from "react-icons/ri";

import './MainPage.scss';

import * as SOCIAL_LINK from '../../constants/social-links';


export default class MainPage extends Component {

    render(){
        return (
          <Container fluid style={{textAlign: 'center'}}>
              <Row>
                <Col xs={{span: 8, offset: 3}} md={{span: 8, offset: 2}} className="content-container-header">
                  <Row>
                    <Col xs={12}>
                      <h1 className="header"><Link to="/">Technical Debt</Link></h1>
                    </Col>
                    <Col xs={12}>
                        <SocialMediaLink name="Soundcloud" link={SOCIAL_LINK.SOUNDCLOUD} icon={<RiSoundcloudLine size='2em'/>}/>
                        <SocialMediaLink name="Spotify" link={SOCIAL_LINK.SPOTIFY} icon={<RiSpotifyLine size='2em'/>}/>
                        <SocialMediaLink name="Instagram" link={SOCIAL_LINK.INSTAGRAM} icon={<RiInstagramLine size='2em'/>}/>
                        <SocialMediaLink name="E-mail" link="mailto:all.technical.debt@gmail.com" icon={<RiMailLine size='2em'/>}/>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                {/* LEFT COLUMN */}
                <Col xs={{span: 10, offset: 2}} md={{span: 5, offset: 1}}>
                  <Row>
                    <Col sm={1}></Col>
                    <Col sm={10} className="content-container">
                      <IFrameWrapper width="100%" height="300" title="HARD" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/832022116&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    </Col>
                    <Col sm={1}></Col>
                  </Row>
                  <Row>
                      <Col sm={1}/>
                      <Col sm={10} className="content-container">
                        <IFrameWrapper width="100%" height="300" title="FUTURE TRAP MIX" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/654622166&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                      </Col>
                      <Col sm={1}/>
                  </Row>
                  <Row>
                      <Col sm={1}/>
                      <Col sm={10} className="content-container">
                        <IFrameWrapper src="https://open.spotify.com/embed/track/6rJr3fjvb5C6lcUG3WoWKs" title="LVL" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"/>
                      </Col>
                      <Col sm={1}/>
                  </Row>
                </Col>
                {/* RIGHT COLUMN */}
                <Col xs={{span: 10, offset: 2}} md={{span: 5, offset: 0}}>
                  <Row>
                    <Col sm={1}></Col>
                    <Col sm={10} className="content-container">
                      <IFrameWrapper src="https://open.spotify.com/embed/track/6mrtFY5Etu5KnhdEQP25NS" width="100%" height="380" title="WHRVR" frameBorder="0" allowtransparency="true" allow="encrypted-media"/>
                    </Col>
                    <Col sm={1}></Col>

                  </Row>
                  <Row>
                    <Col sm={1}></Col>
                    <Col sm={10} className="content-container">
                        <IFrameWrapper width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" title="JENNY FROM THE BLOCK" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/682524341&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    </Col>
                    <Col sm={1}></Col>
                  </Row>
                </Col>
                <Col xs={1}></Col>
              </Row>
          </Container>
        )
    }
}
