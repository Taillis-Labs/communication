import { Col, Form, FormGroup, Button } from "react-bootstrap"

import PropTypes from "prop-types"
import { css } from "glamor"
import React from "react"

const styleAction = css({
  marginRight: "15px",
  marginTop: "5px"
})

const PhoneBookEditForm = ({ handleSubmit }) => (
  <Form horizontal onSubmit={handleSubmit}>
    <div>Sure</div>

    <FormGroup className="text-right">
      <Col>
        <Button type="submit" bsStyle="primary" className={`${styleAction}`}>
          Save
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

PhoneBookEditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default PhoneBookEditForm

