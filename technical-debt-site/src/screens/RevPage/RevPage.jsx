import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import p5 from 'p5';

import RevSphere from '../../components/RevSphere/RevSphere';


export default class RevPage extends Component {
    constructor(props){
        super(props);

    }

    componentWillMount()
    {
        // override overflow to make only this page not scrollable
        document.body.style.overflowY = "hidden";
    }

    render(){
        return (
          <Container fluid className="rev-page-container">
              <RevSphere/>
          </Container>
        )
    }
}
