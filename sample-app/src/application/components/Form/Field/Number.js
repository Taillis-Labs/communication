import { Col, ControlLabel, FormGroup, HelpBlock } from "react-bootstrap"
import NumberComponent from "application/components/Form/Type/Number"
import PropTypes from "prop-types"
import React from "react"

const mdL = 3
const mdR = 9

const FieldNumber = ({ input, type, label, onChange, meta: { touched, error, warning }, messages = {}, ...rest }) => {
  const validationState = touched && error ? "error" : touched && warning ? "warning" : touched ? "success" : null
  const feedback = ["text", "number", "email", "date", "password"].indexOf(type) > -1

  return (
    <FormGroup controlId={input.name} validationState={validationState}>
      <Col md={mdL} componentClass={ControlLabel}>
        {label}
      </Col>
      <Col md={mdR}>
        <NumberComponent input={input} touched={touched} feedback={feedback} {...rest}/>
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

FieldNumber.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string
  }),
  messages: PropTypes.object
}

export default FieldNumber
