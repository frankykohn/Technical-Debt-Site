import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import SocialMediaLink from '../../components/SocialMediaLink/SocialMediaLink';
import IFrameWrapper from '../../components/IFrameWrapper/IFrameWrapper';

import {
  RiSoundcloudLine,
  RiSpotifyLine,
  RiMailLine,
  RiInstagramLine
} from "react-icons/ri";

import './MainPage.scss';


export default class MainPage extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
          <Container fluid style={{textAlign: 'center'}}>
              <Row>
                <Col sm={2}/>
                <Col sm={8} className="content-container-header">
                  <Row>
                    <Col sm={12} >
                      <h1 className="header-container">Technical Debt</h1>
                    </Col>
                    <Col sm={12}>
                        <SocialMediaLink name="Soundcloud" link="https://soundcloud.com/technicaldebt" icon={<RiSoundcloudLine size='2em'/>}/>
                        <SocialMediaLink name="Spotify" link="https://open.spotify.com/artist/0o7Y6yat1EfVMtYZQ5BcGv?si=1fdPNBB-Se-MuxwUqP04lQ" icon={<RiSpotifyLine size='2em'/>}/>
                        <SocialMediaLink name="Instgram" link="https://www.instagram.com/technical_debt/" icon={<RiInstagramLine size='2em'/>}/>
                        <SocialMediaLink name="E-mail" link="mailto:all.technical.debt@gmail.com" icon={<RiMailLine size='2em'/>}/>
                    </Col>
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
                      <IFrameWrapper width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/832022116&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    </Col>
                    <Col sm={1}></Col>
                  </Row>
                  <Row>
                    <Col sm={1}></Col>
                    <Col sm={10} className="content-container">
                      <IFrameWrapper src="https://clips.twitch.tv/embed?clip=MoralNiceCodDerp&parent=technicaldebt.page" frameborder="0" scrolling="no" allowFullScreen="true"height="100%" width="100%"/>
                    </Col>
                    <Col sm={1}></Col>
                  </Row>
                  <Row>
                      <Col sm={1}/>
                      <Col sm={10} className="content-container">
                        <IFrameWrapper width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/654622166&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                      </Col>
                      <Col sm={1}/>
                  </Row>
                </Col>
                {/* RIGHT COLUMN */}
                <Col sm={5}>
                  <Row>
                    <Col sm={1}></Col>
                    <Col sm={11} className="content-container">
                      <IFrameWrapper src="https://open.spotify.com/embed/track/6rJr3fjvb5C6lcUG3WoWKs" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={1}></Col>
                    <Col sm={11} className="content-container">
                        <IFrameWrapper width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/682524341&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    </Col>
                  </Row>
                </Col>
                {/* RIGHT BORDER */}
                <Col sm={1}></Col>
              </Row>
          </Container>
        )
    }
}
