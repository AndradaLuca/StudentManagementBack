import React, { Component } from 'react';

import Login from '../login/Login'

export default class HelloWorld extends Component {
  render() {
    const { onClick, color } = this.props;
    return (
      // <div className="hello-world" onClick={onClick} style={{color: color}}>Hello</div>
      
      <Login/>
    );
  }
}
