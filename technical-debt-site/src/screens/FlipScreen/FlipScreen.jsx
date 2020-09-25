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
  FaMixcloud
} from "react-icons/fa";

import {
  GrSpotify
} from "react-icons/gr";

import {
  ImSoundcloud
} from 'react-icons/im';

import './FlipScreen.scss';

import * as SOCIAL_LINK from '../../constants/social-links'


export default class FlipScreen extends Component {


    componentDidMount()
    {
        // override overflow to make only this page not scrollable
        document.body.style.backgroundColor = "black";
    }

    render(){
        const socialSize="10vh";
        return (
          <Container fluid className="flip-container">
              <Row>
                  <Col sm={12} md={9}>
                      <Row className="title-container">
                          <Col xs={10}>
                              <p className="title">Technical Debt</p>
                          </Col>
                          <Col xs={2}>
                              <img src="/t-d.png" className="t-d" alt=""></img>
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
                                  <Col className="flip-card-hover">
                                    <div className="flip-card">
                                      <div className="flip-card-inner">
                                          <div className="flip-card-front">
                                              <a className="flip-link" href={SOCIAL_LINK.FLIP_PRESAVE}><img className="flip-img" alt="Flip Album Art" src="https://firebasestorage.googleapis.com/v0/b/technical-debt-site.appspot.com/o/flip-spotify-640px.jpg?alt=media&token=e35ef545-0848-4ed6-bd07-f65bc3ad139f"></img></a>
                                          </div>
                                          <div className="flip-card-back">
                                            <div className="card-text">
                                              <h2 className="card-title"><a href={SOCIAL_LINK.FLIP_PRESAVE}>Flip</a></h2>
                                              <h3 className="card-subtitle">10/16/2020</h3>
                                              <p className="card-footer">Artwork by <a className="link-animation-full" href={SOCIAL_LINK.EMILIA}>Emilia Tongson</a></p>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col sm={6} md={12}>
                          <a href={SOCIAL_LINK.BRYSON}><img alt="Logo by Bryson" className="bryson-graphic" src="/20200731_technicaldebt_logo_v2_bryson.png"></img></a>
                      </Col>
                      <Col sm={12} md={12}>
                        <Row className="social-link-container">
                            <Col xs={3} md={6}>
                                <a href={SOCIAL_LINK.INSTAGRAM}><TiSocialInstagram className="social-link-left" size={socialSize}/></a>
                            </Col>
                            <Col xs={3} md={6}>
                                <a href={SOCIAL_LINK.FLIP_PRESAVE}><GrSpotify className="social-link-right" size={socialSize}/></a>
                            </Col>
                            <Col xs={3} md={6}>
                                <a href={SOCIAL_LINK.SOUNDCLOUD}><ImSoundcloud className="social-link-left" size={socialSize}/></a>
                            </Col>
                            <Col xs={3} md={6}>
                                <a href={SOCIAL_LINK.MIXCLOUD}><FaMixcloud className="social-link-right" size={socialSize}/></a>
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
