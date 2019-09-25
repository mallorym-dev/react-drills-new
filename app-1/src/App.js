import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.js";

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  changeText = (text) => {
    this.setState({
      input: text
    })
  }
  
  render() {
    return (
      <div className="App">
        <input onChange={e => this.changeText(e.target.value)} type='text' />
          <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
