import { LinkContainer } from "react-router-bootstrap"
import { ButtonGroup, Button } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"


const ButtonsComponent = ({ phoneBook }) => (
  <ButtonGroup bsSize="xsmall">
    <LinkContainer to={`/phone-books/${phoneBook.get("id")}/edit`}>
      <Button bsStyle="info">Edit</Button>
    </LinkContainer>
  </ButtonGroup>
)

ButtonsComponent.propTypes = {
  phoneBook: PropTypes.object.isRequired
}

export default ButtonsComponent
