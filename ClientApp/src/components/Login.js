import React, { Component } from 'react'
import Footer from './Footer'
import auth from '../Auth'

class Login extends Component {
  login = () => {
    auth.login()
  }

  componentDidMount() {
    document.title = 'Amicus Curiae'
  }

  render() {
    return (
      <div>
        <h1 className="LoginTitle">Amicus Curiae</h1>
        <section className="LoginWindow">
          <button onClick={this.login} className="btn btn-primary">
            Log in
          </button>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Login
