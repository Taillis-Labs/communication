import { Col, ControlLabel, FormControl, FormGroup, HelpBlock } from "react-bootstrap"
import DateTime from "react-datetime"
import PropTypes from "prop-types"
import React from "react"

const mdL = 3
const mdR = 9

const DateComponent = ({ input, type, label, date = true, time = true, meta: { touched, error, warning }, messages = {}, ...rest }) => {
  const validationState = touched && error ? "error" : touched && warning ? "warning" : touched ? "success" : null
  const feedback = ["text", "email", "date", "password"].indexOf(type) > -1

  return (
    <FormGroup controlId={input.name} validationState={validationState}>
      <Col md={mdL} componentClass={ControlLabel}>
        {label}
      </Col>
      <Col md={mdR}>
        <FormControl
          componentClass={DateTime}
          bsClass=""
          {...input}
          {...rest}
          dateFormat={date}
          timeFormat={time}
          utc={time === false}
        />
        {touched && feedback && <FormControl.Feedback/>}
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

DateComponent.propTypes = {
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

export default DateComponent
