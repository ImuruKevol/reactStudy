import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hell World!</h1>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

App.defaultProps = {
  title: 'Hell Man'
}

export default App;
