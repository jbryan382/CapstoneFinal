import React, { Component } from 'react'
import Footer from './Footer'
import Axios from 'axios'
import moment from 'moment'

class Document extends Component {
  state = {
    docketResp: []
  }
  componentDidMount() {
    console.log(`/api/Dockets/${this.props.match.params.docketId}`)
    Axios.get(`/api/Dockets/${this.props.match.params.docketId}`).then(resp => {
      console.log(resp)
      this.setState({ docketResp: resp.data })
    })
  }
  render() {
    return (
      <div>
        <h1>Docket #{this.state.docketResp.docketNumber}</h1>
        <section className="ListSection">
          <h3>{this.state.docketResp.case_name}</h3>
          {/* <h4>{this.state.docketResp.courtHouse.full_name}</h4> */}
          <h5>
            {this.state.docketResp.date_created &&
              moment(this.state.docketResp.date_created).format(
                'MMMM Do YY, h:mm:ss a'
              )}
          </h5>
          <h5>
            {this.state.docketResp.dateTerminated &&
              moment(this.state.docketResp.dateTerminated).format(
                'MMMM Do YY, h:mm:ss a'
              )}
          </h5>
          <p>In-Depth Description of Docket: (If available to the public)</p>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Document
