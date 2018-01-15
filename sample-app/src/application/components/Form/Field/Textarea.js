import { Col, ControlLabel, FormControl, FormGroup, HelpBlock } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"

const mdL = 3
const mdR = 9

const Textarea = ({ input, name, label, meta: { touched, error, warning }, messages = {}, ...rest }) => {
  const validationState = touched && error ? "error" : touched && warning ? "warning" : touched ? "success" : null

  return (
    <FormGroup controlId={name} validationState={validationState}>
      <Col md={mdL} componentClass={ControlLabel}>
        {label}
      </Col>
      <Col md={mdR}>
        <FormControl componentClass="textarea" {...input} {...rest}/>
        <FormControl.Feedback/>
      </Col>
      <Col md={mdR} mdOffset={mdL}>
        {touched && (
          (error && <HelpBlock>{messages[error] || error}</HelpBlock>) ||
          (warning && <HelpBlock>{messages[error] || warning}</HelpBlock>)
        )}
      </Col>
    </FormGroup>
  )
}

Textarea.propTypes = {
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

export default Textarea
