import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import moment from 'moment'

class SavedDocket extends Component {
  state = {
    savedResp: []
  }
  componentDidMount() {
    document.title = 'Saved Dockets'
    this.getAllDockets()
  }

  getAllDockets = () => {
    axios.get('/api/SavedDocket').then(resp => {
      console.log({ resp })

      this.setState({
        savedResp: resp.data
      })
    })
  }

  deleteDocket = userDocket => {
    axios.delete(`/api/SavedDocket/${userDocket.id}`).then(resp => {
      this.getAllDockets()
    })
  }

  render() {
    return (
      <div>
        <h1>Saved Court Docket List:</h1>
        {this.state.savedResp.length > 0 && (
          <section className="ListSection">
            <ul>
              {this.state.savedResp.map((d, i) => {
                return (
                  <li key={i} className="case_name">
                    <span className="description_tag">Case Name:</span>
                    {d.docket.case_name}
                    <section className="case_details">
                      <span className="case_details1">
                        <section>
                          <span className="description_tag">Date Created:</span>
                          {d.docket.date_created &&
                            moment(d.docket.date_created).format(
                              'MMMM Do YYYY, h:mm:ss a'
                            )}
                        </section>
                        <section>
                          <span className="description_tag">
                            Last Modified:
                          </span>
                          {d.docket.dateTerminated &&
                            moment(d.docket.dateTerminated).format(
                              'MMMM Do YY, h:mm:ss a'
                            )}
                        </section>
                      </span>
                      <span className="case_details2">
                        <section>
                          <span className="description_tag">
                            Docket Number:
                          </span>
                          {d.docket.docketNumber}
                        </section>
                        <section>
                          <span className="description_tag">Courthouse:</span>
                          {d.docket.courtHouse.full_name}
                        </section>
                      </span>
                      <button
                        onClick={() => this.deleteDocket(d)}
                        className="btn btn-primary"
                      >
                        Delete
                      </button>
                    </section>
                  </li>
                )
              })}
            </ul>
          </section>
        )}
        {this.state.savedResp.length === 0 && <h5>No Saved Dockets Found</h5>}
        <Link to="mainList">Back to the Other dockets</Link>
        <Footer />
      </div>
    )
  }
}

export default SavedDocket
