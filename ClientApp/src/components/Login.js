import React, { Component } from 'react'
import Footer from './Footer'
import auth from '../Auth'

class Login extends Component {
  login = () => {
    auth.login()
  }

  render() {
    return (
      <div>
        <h1 className="LoginTitle">Court Docket Database</h1>
        <section className="LoginWindow">
          {/* I would like to use OAuth to prevent the need to store or authorize users locally */}
          <button onClick={this.login}>Log in</button>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Login
