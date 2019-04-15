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
              {this.state.docketResp.map((c, i) => {
                return (
                  <div>
                    <li key={i}>
                      {this.state.docketResp[i].caseName}
                      <ul>
                        <li>
                          Docket Number: {this.state.docketResp[i].docketNumber}
                        </li>
                        <li>
                          Current Status:{' '}
                          {this.state.docketResp[i].currentStatus}
                        </li>
                        <li>
                          Hearing Date:{' '}
                          {this.state.docketResp[i].hearingDate &&
                            moment(this.state.docketResp[i].hearingDate).format(
                              'MMMM Do YY, h:mm:ss a'
                            )}
                        </li>
                        <li>
                          Date Created:{' '}
                          {this.state.docketResp[i].dateCreated &&
                            moment(this.state.docketResp[i].dateCreated).format(
                              'MMMM Do YY, h:mm:ss a'
                            )}
                        </li>
                      </ul>
                    </li>
                  </div>
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
