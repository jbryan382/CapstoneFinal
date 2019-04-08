import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

class SavedDocket extends Component {
  render() {
    return (
      <div>
        Use local storage for user saved dockets.
        <Link to="mainList">Back to the Other dockets</Link>
        <Footer />
      </div>
    )
  }
}

export default SavedDocket
