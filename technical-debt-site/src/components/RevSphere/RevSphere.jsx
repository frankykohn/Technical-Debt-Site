import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import p5 from 'p5';


export default class RevSphere extends Component {

    constructor(props){
        super(props);
        this.sphereRef = React.createRef();
    }

    sketch = p => {

        let wiggle = 10;
        let r = 200;
        let numPoints = 60;
        let sphere = [];

        p.setup = () => {
            p.createCanvas(800, 800, p.WEBGL);
            p.colorMode(p.HSB);

            for(let i=0; i < numPoints +1; i++){
              let lat = p.map(i, 0, numPoints, -p.HALF_PI, p.HALF_PI);
              sphere.push([]);
              for(let j=0; j < numPoints+1; j++){
                  let lon = p.map(j, 0, numPoints, -p.PI, p.PI);
                  const x = r * p.sin(lon) * p.cos(lat) + p.random(-wiggle, wiggle);
                  const y = r * p.sin(lon) * p.sin(lat) + p.random(-wiggle, wiggle);
                  const z = r * p.cos(lon) + p.random(-wiggle, wiggle);
                  sphere[i][j] = p.createVector(x, y, z);
              }
            }
        }

        p.draw = () => {
            p.background(0);

            // lighting
            p.lights();
            p.ambientLight(255, 20, 255);

            // shape characteristics
            p.rotateZ(-p.PI/2);
            p.rotateY(-p.PI/2);
            p.rotateX(p.PI/4);
            p.strokeWeight(0.5);

            for(let i=0; i < numPoints; i++){
              p.beginShape(p.TRIANGLE_STRIP);
              for(let j=0; j < numPoints+1; j++){
                  const hu = p.map(j, 0, numPoints, 0, 255);
                  p.stroke(hu, 200, 255);
                  p.fill(hu, 255, 20);
                  const v1 = sphere[i][j];
                  p.vertex(v1.x, v1.y, v1.z);
                  const v2 = sphere[i+1][j];
                  p.vertex(v2.x, v2.y, v2.z);
              }
              p.endShape();
            }

            p.fill(255, 0, 0);
            p.noStroke();
            p.sphere(r*0.95);
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


/*

PVector[][] globe;
int total = 60;
float r;
float wiggle = 40;

void setup()
{
    size(800, 800, P3D);
    r = width/4;

    colorMode(HSB);
    globe = new PVector [total+1][total+1];

    for(int i=0; i < total+1; i++){
      float lat = map(i, 0, total, -HALF_PI, HALF_PI);
      for(int j=0; j < total+1; j++){
          float lon = map(j, 0, total, -PI, PI);
          float x = r * sin(lon) * cos(lat) + random(-wiggle, wiggle);
          float y = r * sin(lon) * sin(lat) + random(-wiggle, wiggle);
          float z = r * cos(lon) + random(-wiggle, wiggle);
          globe[i][j] = new PVector(x, y, z);
      }
    }
}
*//*
void draw()
{
    background(0);
    lights();
    ambientLight(255, 20, 255);
    pushMatrix();
    translate(width/2, height/2);
    rotateZ(-PI/2);
    rotateY(-PI/2);
    rotateX(PI/4);
    strokeWeight(0.5);
    for(int i=0; i < total; i++){
      beginShape(TRIANGLE_STRIP);
      for(int j=0; j < total+1; j++){
          float hu = map(j, 0, total, 0, 255);
          stroke(hu, 200, 255);
          fill(hu, 255, 20);
          PVector v1 = globe[i][j];
          vertex(v1.x, v1.y, v1.z);
          PVector v2 = globe[i+1][j];
          vertex(v2.x, v2.y, v2.z);
      }
      endShape();
    }
    fill(255, 0, 0);
    noStroke();
    sphere(r*0.95);
    stroke(255);
    strokeWeight(1);
    line(0, 0, -r*2, 0, 0, 0);
    line(0, 0, 0, 0, 0, r*2);
    popMatrix();

}
*/
