import React, { Component } from 'react'
import styles from './App.module.scss'
import { ComicListContainer, SideBarContainer } from './containers'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <aside>
          <SideBarContainer />
        </aside>
        <main>
          <ComicListContainer />
        </main>
      </div>
    )
  }
}

export default App
