import React, { Component } from 'react';
import style from './Background.scss';

export default class Background extends Component {

    constructor(props)
    {
        super(props);

        this.maxBoxes = 30;
        this.numBoxesChanged = 10;

        this.colorSet = [
          '#f9c8ce',
          "#e0c8f9",
          "#cfc8f9",
          "#c8d3f9",
          "#c8f9f9",
          "#c8f9e1",
          "#f9f7c8",
          "#f9d1c8",
          "#f9c8ce",
          'white'
        ];

        this.state = {
            currentBox: 1,
            oldBox: 0,
            boxes: []
        }

        for(let i=0; i < this.maxBoxes; i++){
          const sizeNum = Math.random() * 100 + 300;
          const size = sizeNum + 'px';
          this.state.boxes.push(
            <div
              key={i}
              style={{
                  backgroundColor: this.randomColor(),
                  width: size,
                  height: size,
                  top: Math.random() * 80 + "vw",
                  left: Math.random() * 80 + "vw"
              }}
              className="box"
              id={i}
              ></div>
          )
        }
    }

    randomColor = () => {
      return this.colorSet[Math.floor(Math.random() * this.colorSet.length)];
    }

    updateBoxes = () => {
        for(let i=0; i < this.numBoxesChanged; i++){
          const newBox = Math.floor(Math.random() * (this.maxBoxes - 1));
          const newDiv = document.getElementById(newBox);
          if(newDiv.style)
              newDiv.style.backgroundColor = this.randomColor();
        }
    }

    render()
    {
      return (
        <div onClick={this.updateBoxes}>
          <div className="background">
            {this.state.boxes}
          </div>
          <div className="news-feed-container-left">
              <img alt="" src="/banner-optimized.gif" width="100%" height="100%"></img>
          </div>
          <div className="news-feed-container-right">
              <img alt="" src="/banner-optimized.gif" width="100%" height="100%"></img>
          </div>
        </div>

      )
    }
}
