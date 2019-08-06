import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import moment from 'moment'
import auth from '../Auth'
import PageCount from './PageCount'

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
    document.title = 'Main Docket List'
    this.loadAllDockets()
  }

  searchForDocs = event => {
    event.preventDefault()
    if (this.state.searchTerm) {
      axios
        .get(`/api/search/dockets?query=${this.state.searchTerm}`, {
          headers: { Authorization: auth.authorizationHeader() }
        })
        .then(resp => {
          console.log(resp)
          this.setState({
            docketResp: resp.data.results
          })
        })
    } else {
      this.loadAllDockets()
    }
  }

  loadAllDockets = () => {
    axios.get('/api/Dockets').then(resp => {
      console.log({ resp })

      this.setState({
        docketResp: resp.data
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
        <form onSubmit={this.searchForDocs}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {this.state.docketResp.length > 0 && (
          <section className="ListSection">
            <ul>
              {this.state.docketResp.map((docket, i) => {
                return (
                  <li key={i} className="case_name">
                    <span className="description_tag">Case Name:</span>
                    {docket.case_name}
                    <section className="case_details">
                      <span className="case_details1">
                        <section>
                          <span className="description_tag">Date Created:</span>
                          {docket.date_created &&
                            moment(docket.date_created).format(
                              'MMMM Do YYYY, h:mm:ss a'
                            )}
                        </section>
                        <section>
                          <span className="description_tag">
                            Last Modified:
                          </span>
                          {docket.dateTerminated &&
                            moment(docket.dateTerminated).format(
                              'MMMM Do YY, h:mm:ss a'
                            )}
                        </section>
                      </span>
                      <span className="case_details2">
                        <section>
                          <span className="description_tag">
                            Docket Number:
                          </span>
                          {docket.docketNumber}
                        </section>
                        <section>
                          <span className="description_tag">Courthouse:</span>
                          {docket.courtHouse.full_name}
                        </section>
                      </span>
                      <button
                        onClick={() => this.saveDocket(docket)}
                        className="btn btn-primary"
                      >
                        Save
                      </button>
                    </section>
                  </li>
                )
              })}
            </ul>
          </section>
        )}
        {this.state.docketResp.length === 0 && <h5>No Dockets Found</h5>}
        <PageCount />
        <Footer />
      </div>
    )
  }
}

export default DocketList
