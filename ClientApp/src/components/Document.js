import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Document extends Component {
  render() {
    return (
      <div>
        <h1>Individual Docket Title</h1>
        <Link to="/">Log Out</Link>
        <section className="ListSection">
          <h3>Docket/Case Title</h3>
          <h4>Case Number</h4>
          <h5>Date and Time of the Hearing</h5>
          <h5>Time Until Court Hearing</h5>
          <p>In-Depth Description of Docket (If available to the public)</p>
        </section>
        <footer>
          <h4>Copyright Information and Stuff.</h4>
          <h5>Made with 💚 at SDG</h5>
        </footer>
      </div>
    )
  }
}

export default Document
