import { Col, ControlLabel, FormControl, FormGroup } from "react-bootstrap"
import PropTypes from "prop-types"
import Moment from "react-moment"
import React from "react"

const mdL = 3
const mdR = 9

const Static = ({ input, label, children, staticComponent = "p", ...rest }) => (
  <FormGroup>
    <Col md={mdL} componentClass={ControlLabel}>
      {label}
    </Col>
    <Col md={mdR}>
      <FormControl.Static componentClass={staticComponent}>
        { children || (rest && rest.inputProps && rest.inputProps.type && rest.inputProps.type === "date" && input.value && (
          <Moment format={rest.dateFormat ? rest.dateFormat:"DD/MM/YYYY HH:mm:ss"} date={input.value}/>
        )) || input.value }
      </FormControl.Static>
    </Col>
  </FormGroup>
)

Static.propTypes = {
  input: PropTypes.object,
  children: PropTypes.element,
  label: PropTypes.string.isRequired
}

export default Static
