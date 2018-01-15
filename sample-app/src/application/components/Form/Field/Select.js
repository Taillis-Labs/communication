import { Col, ControlLabel, FormControl, FormGroup, HelpBlock } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"

const mdL = 3
const mdR = 9

const Select = ({ input, name, label, children, meta: { touched, error, warning }, messages = {}, ...rest }) => {
  const validationState = touched && error ? "error" : touched && warning ? "warning" : touched ? "success" : null

  return (
    <FormGroup controlId={name} validationState={validationState}>
      <Col md={mdL} componentClass={ControlLabel}>
        {label}
      </Col>
      <Col md={mdR}>
        <FormControl componentClass="select" {...input} {...rest}>
          {children}
        </FormControl>
        <FormControl.Feedback/>
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

Select.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string
  }),
  messages: PropTypes.object
}

export default Select
