import React, { Component } from 'react';
import './Background.scss';

export default class Background extends Component {

    constructor(props)
    {
        super(props);
        let boxes = [];
        for(let i=0; i < 50; i++){
          boxes.push(
            <div key={i} className="box"></div>
          )
        }
        this.boxes = boxes;

    }

    render()
    {
      return (
        <div>
          <div className="background">
            {this.boxes}
          </div>
          <div className="news-feed-container-left">
              <img src="/banner-optimized.gif" width="100%" height="100%"></img>
          </div>
          <div className="news-feed-container-right">
              <img src="/banner-optimized.gif" width="100%" height="100%"></img>
          </div>
        </div>

      )
    }
}
