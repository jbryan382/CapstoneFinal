import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import moment from 'moment'
import auth from '../Auth'
// import PageCount from './PageCount'
import Pagination from 'react-js-pagination'

class DocketList extends Component {
  state = {
    docketResp: [],
    pagedDockets: [],
    activePage: 1,
    itemsCountPerPage: 10,
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

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`)

    this.setState({ activePage: pageNumber }, () => {
      this.setState({
        pagedDockets: this.state.docketResp.filter((_, index) => {
          return (
            index < this.state.activePage * this.state.itemsCountPerPage &&
            index > (this.state.activePage - 1) * this.state.itemsCountPerPage
          )
        })
      })
    })
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
        docketResp: resp.data,
        pagedDockets: resp.data.filter((_, index) => {
          return index < this.state.activePage * this.state.itemsCountPerPage
        })
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
              {this.state.pagedDockets.map((docket, i) => {
                return (
                  <dl key={i} className="case_name">
                    <Link to={`/Dockets/${docket.id}`}>
                      <span className="description_tag">Case Name:</span>
                      {docket.case_name}
                      <section className="case_details">
                        <span className="case_details1">
                          <section>
                            <dt className="description_tag">Date Created:</dt>
                            {docket.date_created &&
                              moment(docket.date_created).format(
                                'MMMM Do YYYY, h:mm:ss a'
                              )}
                          </section>
                          <section>
                            <dt className="description_tag">Last Modified:</dt>
                            {docket.dateTerminated &&
                              moment(docket.dateTerminated).format(
                                'MMMM Do YY, h:mm:ss a'
                              )}
                          </section>
                        </span>
                        <span className="case_details2">
                          <section>
                            <dt className="description_tag">Docket Number:</dt>
                            {docket.docketNumber}
                          </section>
                          <section>
                            <dt className="description_tag">Courthouse:</dt>
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
                    </Link>
                  </dl>
                )
              })}
            </ul>
          </section>
        )}
        {this.state.docketResp.length === 0 && <h5>No Dockets Found</h5>}
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.docketResp.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        {/* <PageCount numDockets={this.state.docketResp.length} /> */}
        <Footer />
      </div>
    )
  }
}

export default DocketList
