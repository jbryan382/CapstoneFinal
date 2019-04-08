import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import { Link } from 'react-router-dom'
import Footer from './Footer'

class SignUp extends Component {
  state = {
    formSchema: {
      title: 'Sign Up',
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
        },
        email: {
          type: 'string',
          title: 'E-Mail:',
          default: ''
        },
        DoB: {
          type: 'string',
          title: 'Date of Birth:',
          default: ''
        },
        reason: {
          type: 'string',
          title: 'Reason for Usage:',
          default: ''
        }
      }
    }
  }

  render() {
    return (
      <div>
        <section className="LoginWindow">
          <h3>Sign Up:</h3>
          {/* I would like to use OAuth to prevent the need to store or authorize users locally */}
          <Form schema={this.state.formSchema} />
          <Link to="mainList">Sign Up</Link>
        </section>
        <Footer />
      </div>
    )
  }
}

export default SignUp
