import React, { Component } from 'react';

export default class ButtonCounter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: (this.state.count += 1) });
  }

  render() {
    return (
        <fancy-button 
            text={this.state.count} 
            onClick={this.increment.bind(this)}
        ></fancy-button>
    );
  }
}
