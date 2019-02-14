import React, { Component } from 'react'
import './App.scss'
import ComicListContainer from './containers/ComicListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComicListContainer />
      </div>
    )
  }
}

export default App
