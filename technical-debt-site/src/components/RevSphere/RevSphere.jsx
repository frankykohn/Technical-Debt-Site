import React, { Component } from 'react';

import p5 from 'p5';

import "./RevSphere.scss"
import Garamond from './Adobe Garamond Small Caps & Old Regular.otf';;

export default class RevSphere extends Component {

    constructor(props){
        super(props);
        this.sphereRef = React.createRef();
    }

    sketch = p => {

        const numPoints = 15;
        const wiggle = 8;
        let r, size;
        let sphere = [];
        let sphereColors = [];
        let scrollRotation = 0;
        const rotationScale = 0.005;
        let isSphereSelected = false;
        let isGallerySelected = false;
        let isFlipSelected = false;
        let strokeV, fillV, galleryFill, flipFill;
        let font;

        function calculateDimensions()
        {
            size = Math.min(p.windowWidth, p.windowHeight);
            r = (size/2) * 0.6;
        }

        function initSphere()
        {
            sphere = [];
            sphereColors = [];
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
        
        function resizeSphere()
        {
            sphere = [];
            for(let i=0; i < numPoints +1; i++){
                let lat = p.map(i, 0, numPoints, 0, p.PI);
                sphere.push([]);
                for(let j=0; j < numPoints+1; j++){
                    let lon = p.map(j, 0, numPoints, 0, p.TWO_PI);
                    const x = r * p.sin(lat) * p.cos(lon) + p.random(-wiggle, wiggle);
                    const y = r * p.sin(lat) * p.sin(lon) + p.random(-wiggle, wiggle);
                    const z = r * p.cos(lat) + p.random(-wiggle, wiggle);
                    sphere[i][j] = p.createVector(x, y, z);
                }
  
            }
        }
        
        p.preload = () => {
            font = p.loadFont(Garamond);
        }

        p.setup = () => {
            calculateDimensions();
            p.createCanvas(size, size, p.WEBGL);
            p.colorMode(p.HSB);
            initSphere();
            strokeV = 255;
            fillV = 60;
            flipFill = 50;
            galleryFill = 50;

            // init font
            p.textFont(font);
            p.textAlign(p.CENTER, p.CENTER);
            p.textSize(35);
        }

        p.windowResized = () => {
            calculateDimensions();
            p.resizeCanvas(size, size);
            resizeSphere();
        }

        p.mouseWheel = (e) => {
            scrollRotation += e.delta * rotationScale;
        }

        function dist(x1, x2, y1, y2)
        {
            return Math.sqrt( ((x1 - x2) ** 2) + ((y1 - y2) ** 2));
        }

        p.mouseMoved = () => {
            isSphereSelected = false;
            isGallerySelected = false;
            isFlipSelected = false;
            
            // is mouse on sphere
            const center = size/2;
            let d = dist(center, p.mouseX, center, p.mouseY);
            if(d < r)
            {
                isSphereSelected = true;
            }

            // is mouse on gallery or flip
            if(Math.abs(size - p.mouseX - p.mouseY) < size/4)
            {
                if(p.mouseX > center*1.5)
                {
                    isGallerySelected = true;
                }
                else if(p.mouseX < center*0.5)
                {
                    isFlipSelected = true;
                }
            }

        }

        p.draw = () => {
            p.background("#050003");
            
            rampValues();

            p.rotateZ(-p.PI/2);
            p.rotateY(-p.PI/2);
            p.rotateX(p.PI/4);
            p.rotateZ(scrollRotation);
            p.strokeWeight(0.5);

            for(let i=0; i < numPoints; i++){
                p.stroke(sphereColors[i], 200, strokeV);
                p.fill(sphereColors[i], 255, fillV);
                p.beginShape(p.TRIANGLE_STRIP);
                for(let j=0; j < numPoints; j++){

                    const v1 = sphere[i][j];
                    const v2 = sphere[i+1][j];
                    const v3 = sphere[i][j+1];
                    const v4 = sphere[i+1][j+1];

                    
                    p.vertex(v1.x, v1.y, v1.z);
                    p.vertex(v2.x, v2.y, v2.z);
                    p.vertex(v3.x, v3.y, v3.z);
                    p.vertex(v4.x, v4.y, v4.z);   
                }
                p.endShape();
            }
            p.fill(255);
            p.stroke(255);
            p.strokeWeight(1);

            p.line(0, 0, -r*2, 0, 0, r);
            p.line(0, 0, r, 0, 0, r*2);

            p.rotateY(p.PI/2);

            p.fill(galleryFill);
            p.text("GALLERY", r*1.6, 50);
            
            p.fill(flipFill);
            p.text("FLIP", -r*1.6, -50);
            

        }

        function rampValues()
        {
            // V value ramping
            if(isSphereSelected)
            {
                strokeV = 20;
                    
                if(fillV < 255)
                    fillV += 5;
            }
            else 
            {
                strokeV = 255;
                fillV = 60;
            }

            if(isGallerySelected)
            {
                if(galleryFill < 255)
                    galleryFill += 5;
            }
            else 
            {
                galleryFill = 50;
            }

            if(isFlipSelected)
            {
                if(flipFill < 255)
                    flipFill += 10;
            }
            else 
            {
                flipFill = 50;
            }

            console.log(flipFill);
        }

    }

    componentDidMount() {
        this.sphereSketch = new p5(this.sketch, this.sphereRef.current);
    }

    render(){
        return <div className="sphere" ref={this.sphereRef}></div>;
    }
}
