import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Streams extends Component {
  render() {
    return (
      <div>
        <h1>Court Docket List:</h1>
        <Link to="/">Log Out</Link>
        <section className="SearchBar">
          <input placeholder="Search" />
          <div>🔍</div>
        </section>
        <section>
          {/* This Section will be dynamically updated for each stream */}
          <section className="ListSection">
            {/* The Images will be the links to the designated streamers */}
            <h3>Docket/Case Title</h3>
            <Link to="/Doc">Case Number</Link>
            <h5>Date and Time of the Hearing</h5>
            <h5>Time Until Court Hearing</h5>
            <p>Description of Docket</p>
          </section>
        </section>
        <footer>
          <h4>Copyright Information and Stuff.</h4>
          <h5>Made with 💚 at SDG</h5>
        </footer>
      </div>
    )
  }
}

export default Streams
