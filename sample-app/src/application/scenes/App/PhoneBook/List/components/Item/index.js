import PropTypes from "prop-types"
import React from "react"

import DeleteButton from "./components/Buttons/delete"
import EditButton from "./components/Buttons/edit"

const ItemComponent = ({ phoneBook }) => (
  <tr>
    <td>{phoneBook.get("id")}</td>
    <td>{phoneBook.get("firstName")}</td>
    <td>{phoneBook.get("lastName")}</td>
    <td>{phoneBook.get("dateOfBirth")}</td>
    <td>{phoneBook.get("phoneNumber")}</td>
    <EditButton phoneBook={phoneBook} />
    <DeleteButton phoneBook={phoneBook} />
  </tr>
)

ItemComponent.propTypes = {
  phoneBook: PropTypes.object.isRequired,
}

export default ItemComponent
