import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import Footer from './Footer'
import moment from 'moment'

class DocketList extends Component {
  state = {
    docketResp: [],
    formSchema: {
      type: 'object',
      properties: {
        search: {
          type: 'string',
          title: 'Search Dockets:',
          default: ''
        }
      }
    }
  }

  componentDidMount() {
    axios.get('/api/Dockets').then(resp => {
      console.log({ resp })

      this.setState({
        docketResp: resp.data
      })
    })
  }

  searchForDocs = event => {
    axios
      .get(`/api/search/dockets?query=${event.formData.search}`)
      .then(resp => {
        console.log(resp)
        this.setState({
          docketResp: resp.data.results
        })
      })
  }

  saveDocket = docket => {
    const data = { docketId: docket.id }
    axios.post('/api/SavedDocket', data).then(resp => {
      console.log(resp)
    })
  }

  render() {
    return (
      <div>
        <h1>Court Docket List:</h1>
        {/* <Link to="/">Log Out</Link> */}
        <Form
          schema={this.state.formSchema}
          onSubmit={this.searchForDocs}
          className="form"
        />
        {this.state.docketResp.length > 0 && (
          <section className="ListSection">
            <ul>
              {this.state.docketResp.map((docket, i) => {
                return (
                  <li key={i}>
                    {docket.case_name}{' '}
                    <button onClick={() => this.saveDocket(docket)}>+</button>
                    <ul>
                      <li>Docket Number: {docket.docketNumber}</li>
                      <li>Current Status: {docket.currentStatus}</li>
                      <li>
                        Hearing Date:{' '}
                        {docket.hearingDate &&
                          moment(docket.hearingDate).format(
                            'MMMM Do YY, h:mm:ss a'
                          )}
                      </li>
                      <li>
                        Date Created:{' '}
                        {docket.date_created &&
                          moment(docket.date_created).format(
                            'MMMM Do YY, h:mm:ss a'
                          )}
                      </li>
                    </ul>
                  </li>
                )
              })}
            </ul>
          </section>
        )}
        {this.state.docketResp.length === 0 && <h5>No Dockets Found</h5>}
        <Footer />
      </div>
    )
  }
}

export default DocketList
