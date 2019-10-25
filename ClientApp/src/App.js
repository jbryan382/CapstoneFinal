import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import Login from './components/Login'
import mainList from './components/MainList'
import Doc from './components/Document'
import axios from 'axios'

import './CSS/index.css'
import SavedDocket from './components/SavedDocket'
import auth from './Auth'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Login} />
        <Route path="/mainList" component={mainList} />
        <Route path="/Dockets/:docketId" component={Doc} />
        <Route path="/SavedDocket" component={SavedDocket} />
        <Route exact path="/login" render={() => auth.login()} />
        <Route
          path="/logout"
          render={props => {
            auth.logout()
            props.history.push('/')
            return <p />
          }}
        />
        <Route
          path="/callback"
          render={props => {
            auth.handleAuthentication(() => {
              // // NOTE: Uncomment the following lines if you are using axios
              // //
              // // Set the axios authentication headers
              axios.defaults.headers.common = {
                Authorization: auth.authorizationHeader()
              }
              console.log({ props })
              props.history.push('/mainList')
            })
            return <p />
          }}
        />
      </Layout>
    )
  }
}
