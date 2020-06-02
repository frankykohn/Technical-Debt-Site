import React, { Component } from 'react';
import './Background.scss';

export default class Background extends Component {


    render()
    {
      let boxes = [];
      for(let i=0; i<100; i++){
        boxes.push(<div key={i} className="box"></div>)
      }
      return (
        <div className="background">
          {boxes}
        </div>
      )
    }
}
