import React, { Component } from 'react';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import {
  Link
} from "react-router-dom";

import MeshBar from '../../components/MeshBar/MeshBar';

import {
  TiSocialInstagram
} from "react-icons/ti";

import {
  GrSpotify
} from "react-icons/gr";

import {
  ImSoundcloud
} from 'react-icons/im';

import './FlipScreen.scss';

import * as SOCIAL_LINK from '../../constants/social-links'


export default class FlipScreen extends Component {

    componentWillMount()
    {
        // override overflow to make only this page not scrollable
        document.body.style.backgroundColor = "black";
    }

    render(){
        const socialSize="10vh";
        return (
          <Container fluid className="flip-container">
              <span className="flip-img-overlay link">
                <br/>
                Flip out now
                <br/>
                Artwork by Fran Tongson
              </span>
              <Row>
                  <Col sm={12} md={9}>
                      <Row className="title-container">
                          <Col xs={10}>
                              <p className="title">Technical Debt</p>
                          </Col>
                          <Col xs={2}>
                              <img src="/t-d.png" className="t-d"></img>
                          </Col>
                      </Row>
                      <Row className="body-container">
                          <Col sm={12} md={3} className="mesh-bar-container">
                              <MeshBar/>
                          </Col>
                          <Col sm={12} md={9}>
                              <Row>
                                  <Col>
                                      <p className="link-white"><Link className="link-animation" to="/gallery">Gallery</Link></p>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col>
                                      <img className="flip-img" src="/flip-soundcloud-1000px.png"></img>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col sm={6} md={12}>
                          <img className="bryson-graphic" src="/20200731_technicaldebt_logo_v2_bryson.png"></img>
                      </Col>
                      <Col sm={12} md={12}>
                        <Row className="social-link-container">
                            <Col xs={3} md={6}>
                                <a href={SOCIAL_LINK.INSTAGRAM}><TiSocialInstagram className="social-link-left" size={socialSize}/></a>
                            </Col>
                            <Col xs={3} md={6}>
                                <a href={SOCIAL_LINK.SPOTIFY}><GrSpotify className="social-link-right" size={socialSize}/></a>
                            </Col>
                            <Col xs={3} md={6}>
                                <a href={SOCIAL_LINK.SOUNDCLOUD}><ImSoundcloud className="social-link-left" size={socialSize}/></a>
                            </Col>
                            <Col xs={3} md={6}>
                                <a href={SOCIAL_LINK.MIXCLOUD}><ImSoundcloud className="social-link-right" size={socialSize}/></a>
                            </Col>
                        </Row>
                      </Col>
                    </Row>


                  </Col>
              </Row>
          </Container>
        )
    }
}
