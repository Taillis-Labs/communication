import { onSubmitActions } from "redux-form-submit-saga/immutable"
import { PHONEBOOK_EDIT_FORM } from "./actions"
import { Modal } from "react-bootstrap"
import { reduxForm } from "redux-form/immutable"
import React, { PureComponent } from "react"
import { push } from "react-router-redux"
import { connect } from "react-redux"

import PhoneBookEditForm from "./components/Form"

class PhoneBookEditComponent extends PureComponent {
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
            Modifier PhoneBook {initialValues.get("id")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PhoneBookEditForm
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
  form: "edit",
  onSubmit: onSubmitActions(PHONEBOOK_EDIT_FORM)
})(PhoneBookEditComponent))
