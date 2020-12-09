import React, { Component } from 'react'
import Greeting from './components/header/greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Greeting isLoggedIn = {true} />

        
      </div>
    )
  }
}

export default App;