import React, { Component } from 'react';
import Spinner from 'react-spinkit';

export default class IFrameWrapper extends Component {
  constructor(props){
      super(props)
      this.state = {
          isLoading: true
      }
  }
  doneLoading = () => {
    this.setState({
        isLoading: false
    })
  }
  render(props){
      return (
          <div>
            {this.state.isLoading && <Spinner name="cube-grid" style={{width: '100%'}}/>}
            <iframe ref="iframe" style={{ display: this.state.isLoading ? 'none' : ''}} onLoad={this.doneLoading} {...this.props}/>
          </div>
      )

  }
}
