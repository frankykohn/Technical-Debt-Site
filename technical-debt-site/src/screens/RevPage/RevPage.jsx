import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import p5 from 'p5';

import RevSphere from '../../components/RevSphere/RevSphere';


export default class RevPage extends Component {

    render(){
        return (
          <Container fluid style={{textAlign: 'center'}}>
              <RevSphere/>
          </Container>
        )
    }
}
