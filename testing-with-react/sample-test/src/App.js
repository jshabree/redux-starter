import React, { Component } from 'react'
import ToDo from './components/header/todo'
import Clock from './components/header/clock'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <ToDo />
        
      </div>
    )
  }
}

export default App;