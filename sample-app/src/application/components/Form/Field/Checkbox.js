import { Col, ControlLabel, Checkbox, FormGroup, HelpBlock } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"

const mdL = 3
const mdR = 9

const CheckboxComponent = ({ input, name, label, meta: { touched, error, warning }, messages = {} }) => {
  const validationState = touched && error ? "error" : touched && warning ? "warning" : touched ? "success" : null

  return (
    <FormGroup controlId={name} validationState={validationState}>
      <Col md={mdL} componentClass={ControlLabel}>
        {label}
      </Col>
      <Col md={mdR}>
        <Checkbox {...input} checked={input.value}>
          {label}
        </Checkbox>
      </Col>
      <Col md={mdR} mdOffset={mdL}>
        {touched && (
          (error && <HelpBlock>{messages[error] || error}</HelpBlock>) ||
          (warning && <HelpBlock>{messages[warning] || warning}</HelpBlock>)
        )}
      </Col>
    </FormGroup>
  )
}

CheckboxComponent.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string
  }),
  messages: PropTypes.object
}

export default CheckboxComponent
