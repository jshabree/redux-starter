import React, { Component } from 'react'
import Header from './components/header/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
      </div>
    )
  }
}

export default App;