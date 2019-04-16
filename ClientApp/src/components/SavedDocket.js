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

  deleteDocket = docket => {
    axios.delete(`/api/SavedDocket/${docket.id}`).then(resp => {
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
                  <li key={i}>
                    {d.docket.case_name}{' '}
                    <button onClick={() => this.deleteDocket(d)}>-</button>
                    <ul>
                      <li>Docket Number: {d.docket.docketNumber}</li>
                      <li>Current Status: {d.docket.currentStatus}</li>
                      <li>
                        Hearing Date:{' '}
                        {d.docket.hearingDate &&
                          moment(d.docket.hearingDate).format(
                            'MMMM Do YY, h:mm:ss a'
                          )}
                      </li>
                      <li>
                        Date Created:{' '}
                        {d.docket.date_created &&
                          moment(d.docket.date_created).format(
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
        {this.state.savedResp.length === 0 && <h5>No Saved Dockets Found</h5>}
        <Link to="mainList">Back to the Other dockets</Link>
        <Footer />
      </div>
    )
  }
}

export default SavedDocket
