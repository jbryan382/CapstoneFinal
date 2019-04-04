import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {
  render() {
    return (
      <div>
        <section className="LoginWindow">
          <h3>Sign Up:</h3>
          {/* I would like to use OAuth to prevent the need to store or authorize users locally */}
          <input placeholder="Username" />
          <input placeholder="Password" />
          <input placeholder="E-Mail" />
          <input placeholder="D.O.B" />
          <input placeholder="Reason for Usage" />
          <Link to="mainList">Sign Up</Link>
        </section>
        <footer>
          <h4>Copyright Information and Stuff.</h4>
          <h5>Made with 💚 at SDG</h5>
        </footer>
      </div>
    )
  }
}

export default SignUp
