import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import Login from './components/Login'
import mainList from './components/MainList'
import Doc from './components/Document'

import './CSS/index.css'
import SignUp from './components/SignUp'
import SavedDocket from './components/SavedDocket'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Login} />
        <Route path="/mainList" component={mainList} />
        <Route path="/docket" component={Doc} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SavedDocket" component={SavedDocket} />
      </Layout>
    )
  }
}
