import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class DocketList extends Component {
  state = {
    docketResp: []
  }

  componentDidMount() {
    axios.get('/api/Dockets').then(resp => {
      console.log({ resp })

      this.setState({
        docketResp: resp.data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Court Docket List:</h1>
        <Link to="/">Log Out</Link>
        <section className="SearchBar">
          <input placeholder="Search" />
          <div>🔍</div>
        </section>
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
                        <li>
                          Current Status:{' '}
                          {this.state.docketResp[i].currentStatus}
                        </li>
                      </li>
                      <li>
                        Hearing Date: {this.state.docketResp[i].hearingDate}
                      </li>
                      <li>
                        Date Created: {this.state.docketResp[i].dateCreated}
                      </li>
                    </ul>
                  </li>
                </div>
              )
            })}
          </ul>
        </section>
        <footer>
          <h4>Copyright Information and Stuff.</h4>
          <h5>Made with 💚 at SDG</h5>
        </footer>
      </div>
    )
  }
}

export default DocketList
