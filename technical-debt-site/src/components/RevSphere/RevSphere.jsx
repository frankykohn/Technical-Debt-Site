import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import p5 from 'p5';

class ScrollingText {

    constructor(x, y, b) {
        this.x = x;
        this.y = y;
        this.prominence = b;
    }

    draw(p) {
        p.textFont('Garamond');
        p.text('Technical Debt');
    }

    update() {

    }
}



export default class RevSphere extends Component {

    constructor(props){
        super(props);
        this.sphereRef = React.createRef();
    }

    sketch = p => {

        const numPoints = 40;
        const numText = 10;
        const wiggle = 8;
        let r = 200;


        let sphere = [];
        let text = [];
        let sphereColors = [];
        let scrollRotation = 0;
        const rotationScale = 0.005;

        p.preload = () => {

        }

        p.setup = () => {
            const size = Math.min(p.windowWidth, p.windowHeight)
            p.createCanvas(size, size, p.WEBGL);
            p.colorMode(p.HSB);

            text.push(new ScrollingText(p.random()))
            for(let i=0; i < numPoints +1; i++){
              let lat = p.map(i, 0, numPoints, 0, p.PI);
              sphere.push([]);
              sphereColors.push(p.map(i, 0, numPoints, 150, 320));
              for(let j=0; j < numPoints+1; j++){
                  let lon = p.map(j, 0, numPoints, 0, p.TWO_PI);
                  const x = r * p.sin(lat) * p.cos(lon) + p.random(-wiggle, wiggle);
                  const y = r * p.sin(lat) * p.sin(lon) + p.random(-wiggle, wiggle);
                  const z = r * p.cos(lat) + p.random(-wiggle, wiggle);
                  sphere[i][j] = p.createVector(x, y, z);
              }

            }

        }

        p.mouseWheel = (e) => {
            scrollRotation += e.delta * rotationScale;
        }

        p.draw = () => {
            p.background(0);

            // lighting
            // p.lights();
            p.ambientLight(255, 20, 255);

            // shape characteristics

            p.rotateZ(-p.PI/2);
            p.rotateY(-p.PI/2);
            p.rotateX(p.PI/4);
            p.rotateZ(scrollRotation);
            p.strokeWeight(0.5);

            for(let i=0; i < numPoints; i++){
              p.stroke(sphereColors[i], 200, 255);
              p.fill(sphereColors[i], 255, 50);
              for(let j=0; j < numPoints; j++){

                  const v1 = sphere[i][j];
                  const v2 = sphere[i+1][j];
                  const v3 = sphere[i][j+1];
                  const v4 = sphere[i+1][j+1];

                  p.beginShape(p.TRIANGLE_STRIP);
                    p.vertex(v1.x, v1.y, v1.z);
                    p.vertex(v2.x, v2.y, v2.z);
                    p.vertex(v3.x, v3.y, v3.z);
                    p.vertex(v4.x, v4.y, v4.z);
                  p.endShape();
              }
            }

            p.stroke(255);
            p.strokeWeight(1);
            p.line(0, 0, -r*2, 0, 0, 0);
            p.line(0, 0, 0, 0, 0, r*2);
            p.resetMatrix();
        }

    }

    componentDidMount() {
        this.sphereSketch = new p5(this.sketch, this.sphereRef.current);
    }

    render(){
        return <div ref={this.sphereRef}></div>;
    }
}
