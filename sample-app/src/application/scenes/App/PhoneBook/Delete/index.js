import { onSubmitActions } from "redux-form-submit-saga/immutable"
import { PHONEBOOK_DELETE_FORM } from "./actions"
import { Modal } from "react-bootstrap"
import { reduxForm } from "redux-form/immutable"
import React, { PureComponent } from "react"
import { push } from "react-router-redux"
import { connect } from "react-redux"

import PhoneBookDeleteForm from "./components/Form"

class PhoneBookDeleteComponent extends PureComponent {
  constructor(props) {
    super(props)

    this._handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.push("/")
  }

  render() {
    const { handleSubmit, initialValues } = this.props
    return (
      <Modal show onHide={this._handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Delete PhoneBook {initialValues.get("id")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PhoneBookDeleteForm
            handleSubmit={handleSubmit}
          />
        </Modal.Body>
      </Modal>
    )
  }
}

export default connect(
  (state, ownProps) => {
    return {
      initialValues: state
        .getIn(["app", "list", "phoneBooks"])
        .filter((v) => {
          if (v.get("id") === parseInt(ownProps.match.params.id))
            return v
        }).get(0)
    }
  },
  {
    push
  }
)(reduxForm({
  form: "delete",
  onSubmit: onSubmitActions(PHONEBOOK_DELETE_FORM)
})(PhoneBookDeleteComponent))
