import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import {
    Link
} from "react-router-dom";

import RevSphere from '../../components/RevSphere/RevSphere';

import './RevPage.scss';

import * as SOCIAL_LINK from '../../constants/social-links';

export default class RevPage extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount()
    {
        // override overflow to make only this page not scrollable
        document.body.style.overflowY = "hidden";
        document.body.style.backgroundColor = "#050003";
    }

    render(){
        return (
          <Container fluid className="rev-page-container">
              <RevSphere/>
              <div className="song-text-container">
                    <p className="song-text">Rev</p>
                    <p className="song-text">Technical Debt | Vooo</p>
              </div>
              <div className="social-media-links-container">
                    <a id="spotify" href={SOCIAL_LINK.SPOTIFY}>❇︎</a>
                    <a id="matter" href={SOCIAL_LINK.MATTER}>❖</a>
                    <a id="audius" href={SOCIAL_LINK.AUDIUS}>✥</a>
                    <a id="instagram" href={SOCIAL_LINK.INSTAGRAM}>✾</a>
              </div>
              <div className="mobile-links">
                    <Link className="mobile-link-purple" to="/gallery">Gallery</Link>
                    <Link className="mobile-link-blue" to="/flip">Flip</Link>
              </div>
          </Container>
        )
    }
}
