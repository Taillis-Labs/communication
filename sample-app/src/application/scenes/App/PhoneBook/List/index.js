import { Col, Button } from "react-bootstrap"
import { connect } from "react-redux"
import React, { Component } from "react"
import { LinkContainer } from "react-router-bootstrap"

import { refreshPhoneBook } from "./actions"

import TableComponent from "application/components/Table"
import ItemComponent from "./components/Item"

class PhoneBookList extends Component {
  constructor(props) {
    super(props)
    this.sort = this.sort.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.props.refreshPhoneBook()
  }

  getColumns() {
    const columns = [
      "ID",
      "First Name",
      "Last Name",
      "Date Of Birth",
      "Phone",
    ]
    return columns
  }

  sort(column) {
    console.log(column, this.props.phoneBookItems, this.state)
    this.props.refreshPhoneBook({ sort: column })
  }

  handleSearch(event) {
    this.props.refreshPhoneBook({ search: event.target.value })
  }

  render() {
    const { phoneBookItems } = this.props

    if (phoneBookItems) {
      return (
        <Col>
          <div>
            search:
            <input
              onChange={this.handleSearch}
              name="search"
              type="text"
            />
          </div>
          <TableComponent columns={this.getColumns()} sort={this.sort}>
            {phoneBookItems.map((PhoneBook, index) => (
              <ItemComponent key={index} phoneBook={PhoneBook} />
            ))}
          </TableComponent>
          <div className="text-right" style={{ "marginTop": "10px" }}>
            <LinkContainer to={"/phone-books/add"}>
              <Button bsStyle="success">New Phone Book</Button>
            </LinkContainer>
          </div>
        </Col>
      )
    }
    return (<div>Fetching</div>)
  }
}

export default connect(
  state => ({
    phoneBookItems: state.getIn(["app", "list", "phoneBooks"]),
    state
  }),
  {
    refreshPhoneBook,
  }
)(PhoneBookList)
