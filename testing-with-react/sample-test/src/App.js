import React, { Component } from 'react'
import Clock from './components/header/clock'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Clock />
        <Clock />

        
      </div>
    )
  }
}

export default App;