import { onSubmitActions } from "redux-form-submit-saga/immutable"
import { Modal } from "react-bootstrap"
import { reduxForm } from "redux-form/immutable"
import React, { PureComponent } from "react"
import { push } from "react-router-redux"
import { connect } from "react-redux"

import { PHONEBOOK_ADD_FORM } from "./actions"
import PhoneBookAdd from "./components/Form"

class AddComponent extends PureComponent {
  constructor(props) {
    super(props)

    this._handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.push("/")
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Modal show onHide={this._handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add Phone Book Entry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PhoneBookAdd
            handleSubmit={handleSubmit}
          />
        </Modal.Body>
      </Modal>
    )
  }
}

export default reduxForm({
  form: "phoneBookAdd",
  onSubmit: onSubmitActions(PHONEBOOK_ADD_FORM)
})(connect(null, {
  push
})(AddComponent))
