import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import p5 from 'p5';

import './MeshBar.scss';


class MeshGrid {
    constructor(width, height, size)
    {
        this.width = width;
        this.size = size;
        this.height = height;
        this.rectangles = [];
        let cols = width/size;
        let rows = height/size;

        for(let i=1; i < cols-2; i++)
        {
          for(let j=1; j < rows-2; j++)
          {
              console.log(this.rectangles);
              this.rectangles.push(new RotationVector(i*this.size, j*this.size, 0));
          }
        }
    }

    updateAndDraw(p)
    {
        p.translate(-this.width/2, -this.height/2);
        for(let i=0; i < this.rectangles.length; i++)
        {
            if(Math.abs(p.mouseX - this.rectangles[i].x) < 20 && Math.abs(p.mouseY - this.rectangles[i].y) < 20){
                this.rectangles[i].r += 0.2;
            }
            p.push();
            p.translate(this.rectangles[i].x+(this.size/2), this.rectangles[i].y+(this.size/2))
            p.rotateY(this.rectangles[i].r);
            p.translate(-this.rectangles[i].x-(this.size/2), -this.rectangles[i].y-(this.size/2));
            p.rect(this.rectangles[i].x, this.rectangles[i].y, this.size, this.size);
            p.pop();
        }
    }
}

class RotationVector {
    constructor(x, y, rotation)
    {
        this.x = x;
        this.y = y;
        this.r = rotation;
    }
}

export default class MeshBar extends Component {

    constructor(props){
        super(props);
        this.meshRef = React.createRef();
    }

    sketch = p => {

        let vertices = [];
        let width, height, size;
        const speed = 0.0005;
        let meshGrid;

        p.preload = () => {

        }

        function calculateDimensions() {
            width = window.innerWidth/5.5;
            height = Math.min(p.windowHeight*0.85);
            size = width/15;
            meshGrid = new MeshGrid(width, height, size)
        }

        p.setup = () => {
            calculateDimensions();
            p.createCanvas(width, height, p.WEBGL);
        }


        p.draw = () => {
            p.background(0);
            p.stroke(255);
            p.fill(0);
            meshGrid.updateAndDraw(p);
        }

        p.windowResized = () => {
            calculateDimensions();
            p.resizeCanvas(width, height);
        }

        p.mousePressed = () => {
            calculateDimensions();
        }

    }

    componentDidMount() {
        this.meshSketch = new p5(this.sketch, this.meshRef.current);
    }

    render(){
        return <div ref={this.meshRef}></div>;
    }
}
