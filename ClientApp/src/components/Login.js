import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div>
        <h1 className="LoginTitle">Title/Logo Here</h1>
        <section className="LoginWindow">
          <h3>Login:</h3>
          {/* I would like to use OAuth to prevent the need to store or authorize users locally */}
          <input placeholder="Username" />
          <input placeholder="Password" />
          <Link to="mainList">Login</Link>
        </section>
        <footer>
          <h4>Copyright Information and Stuff.</h4>
          <h5>Made with 💚 at SDG</h5>
        </footer>
      </div>
    )
  }
}

export default Login
