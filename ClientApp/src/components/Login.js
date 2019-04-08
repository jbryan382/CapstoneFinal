import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import { Link } from 'react-router-dom'
import Footer from './Footer'

class Login extends Component {
  state = {
    formSchema: {
      title: 'Log In',
      type: 'object',
      properties: {
        username: {
          type: 'string',
          title: 'Username:',
          default: ''
        },
        password: {
          type: 'string',
          title: 'Password:',
          default: ''
        }
      }
    }
  }

  render() {
    return (
      <div>
        <h1 className="LoginTitle">Course Majeure</h1>
        <section className="LoginWindow">
          <h3>Login:</h3>
          {/* I would like to use OAuth to prevent the need to store or authorize users locally */}
          <Form schema={this.state.formSchema} className="form" />
          <Link to="mainList">Login</Link>
          <h4>or</h4>
          <Link to="SignUp">Sign Up</Link>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Login
