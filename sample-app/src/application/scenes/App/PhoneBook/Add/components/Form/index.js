import { Col, Form, FormGroup, Button } from "react-bootstrap"

import Field from "application/components/Form/Field"
import PropTypes from "prop-types"
import { css } from "glamor"
import React from "react"

const styleAction = css({
  marginRight: "15px",
  marginTop: "5px"
})


const PhoneBookAddForm = ({ handleSubmit, }) => (
  <Form horizontal onSubmit={handleSubmit}>
    <Field
      name="firstName"
      type="text"
      label="First Name"
    />

    <Field
      name="lastName"
      type="text"
      label="LastName"
    />

    <Field
      name="dateOfBirth"
      type="date"
      label="Date Of Birth"
    />

    <Field
      name="phoneNumbber"
      type="text"
      label="Phone Number"
    />

    <FormGroup className="text-right">
      <Col>
        <Button type="submit" bsStyle="primary" className={`${styleAction}`}>
          Save
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

PhoneBookAddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default PhoneBookAddForm
