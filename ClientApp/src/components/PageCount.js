import React, { Component } from 'react'
import Pagination from 'react-js-pagination'

class PageCount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 1
    }
  }

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`)
    this.setState({ activePage: pageNumber })
  }

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.props.numDockets}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    )
  }
}

export default PageCount
