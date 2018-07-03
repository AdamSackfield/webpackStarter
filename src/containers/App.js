import React, { Component } from 'react'

import classes from './App.scss'
import Navigation from '../components/Navigation/Navgation';

  class App extends Component {
    render() {
      return (
        <div className={classes.Main}>
          <Navigation />
        </div>
      )
    }
  }

export default App