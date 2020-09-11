import React, { Component } from 'react';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import MeshBar from '../../components/MeshBar/MeshBar';

import {
  RiSoundcloudLine,
  RiSpotifyLine,
  RiMailLine,
  RiInstagramLine
} from "react-icons/ri";

import './FlipScreen.scss';


export default class FlipScreen extends Component {

    componentWillMount()
    {
        // override overflow to make only this page not scrollable
        document.body.style.overflowY = "hidden";
    }

    render(){
        const imgPad = 20;
        return (
          <Container fluid style={{backgroundColor: 'black'}}>
              <Row>
                  <Col xs={12} md={9}>
                      <Row>
                          <Col xs={9}>
                              <p className="title">Technical Debt</p>
                          </Col>
                          <Col xs={3}>
                              <img src="/t-d.png" className="t-d"></img>
                          </Col>
                      </Row>
                      <Row>
                          <Col xs={3}>
                              <MeshBar className="mesh-bar"/>
                          </Col>
                          <Col xs={9}>
                              <Row>
                                  <Col>
                                      <p className="link-white"><a className="link-animation" href="gallery">Gallery</a></p>
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
                      <Col>
                          <img src="/20200731_technicaldebt_logo_v2_bryson.png" width="100px"></img>
                      </Col>
                    </Row>
                    <Row>
                    </Row>
                  </Col>
              </Row>
          </Container>
        )
    }
}
