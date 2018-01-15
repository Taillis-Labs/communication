import { Col, ControlLabel, Radio, FormGroup, HelpBlock } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"

const mdL = 3
const mdR = 9

const RadioComponent = ({ input, name, label, options, inline, meta: { touched, error, warning }, messages = {}, ...rest }) => {
  const validationState = touched && error ? "error" : touched && warning ? "warning" : touched ? "success" : null

  return (
    <FormGroup controlId={name} validationState={validationState}>
      <Col md={mdL} componentClass={ControlLabel}>
        {label}
      </Col>
      <Col md={mdR}>
        {options.map((o, index) => (
          <Radio inline={inline} key={index} {...input} {...rest} value={o.value} checked={input.value === o.value}>
            {o.label}
          </Radio>
        ))}
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

RadioComponent.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  inline: PropTypes.bool.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string
  }),
  messages: PropTypes.object
}

export default RadioComponent
