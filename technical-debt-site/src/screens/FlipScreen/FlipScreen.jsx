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
              <Col sm={12}>
                  <p className="title">Technical Debt</p>
              </Col>
            </Row>
            <Row>
              <Col sm={3} className="mesh-bar-container">
                  <MeshBar/>
              </Col>
              <Col sm={6} className="mesh-bar-container">
                <Col sm={12} className="flip-col">
                    <a href="gallery"><p className="link-white">Gallery</p></a>
                </Col>
                <Col sm={12} className="flip-col">
                    <img src="/flip-soundcloud-1000px.png" width="100%"></img>
                </Col>
              </Col>
              <Col sm={3} className="mesh-bar-container">
                  <MeshBar/>
              </Col>
            </Row>


          </Container>
        )
    }
}
