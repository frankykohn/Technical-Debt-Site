import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import p5 from 'p5';

import './MeshBar.scss';

class CustomVector {
    constructor(x, y, z, c)
    {
        this.x = x;
        this.y = y;
        this.z = z;
        this.c = c;
    }
}

export default class MeshBar extends Component {

    constructor(props){
        super(props);
        this.meshRef = React.createRef();
    }

    sketch = p => {

        let vertices = [];

        let cols, rows, count;
        let width, height, size;
        const speed = 0.0005;

        p.preload = () => {

        }

        function calculateDimensions() {
            width = window.innerWidth/5;
            height = Math.min(p.windowHeight*0.85);
            size = width/15;
            cols = width/size;
            rows = height/size;
        }

        p.setup = () => {
            calculateDimensions();
            p.createCanvas(width, height, p.WEBGL);
            count = 0;
        }


        p.draw = () => {
            p.background(0);
            p.stroke(255);

            p.translate(-width/2, -height/2)
            for(let i=1; i < cols-2; i++)
            {
              for(let j=1; j < rows-2; j++)
              {
                  let fill = p.map(Math.sin(count), -1, 1, 0, 255)
                  p.fill(0);
                  p.rect(i*size, j*size, size, size);

              }

            }

        }

        p.windowResized = () => {
            calculateDimensions();
            p.resizeCanvas(width, height);
        }

    }

    componentDidMount() {
        this.meshSketch = new p5(this.sketch, this.meshRef.current);
    }

    render(){
        return <div ref={this.meshRef}></div>;
    }
}
