import { Col, ControlLabel, FormControl, FormGroup, InputGroup, Button, HelpBlock } from "react-bootstrap"
import ResultsScreen from "./components/Results"
import React, { PureComponent } from "react"
import request from "utils/request"
import PropTypes from "prop-types"
import axios from "axios"

const CancelToken = axios.CancelToken

const mdL = 3
const mdR = 9

class Input extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      results: [],
      search: "",
      openSearch: false,
    }

    this.keepOpenSearch = false

    this._handleSearch = this.handleSearch.bind(this)
    this._displayResults = this.displayResults.bind(this)
    this._enterResults = this.enterResults.bind(this)
    this._leaveResults = this.leaveResults.bind(this)
    this._onSelect = this.onSelect.bind(this)
    this._onFocus = this.onFocus.bind(this)
    this._onBlur = this.onBlur.bind(this)
  }

  resetSelected() {
    this.setState(() => ({
      results: [],
      search: ""
    }))

    if (this.props.onSelect) {
      this.props.onSelect(null)
    }
    this.props.input.onChange(null)
  }

  handleSearch(e) {
    const value = e.target.value

    this.resetSelected()

    if (value.length >= 3) {
      if (this.currentRequest) {
        this.currentRequest.cancel()
      }

      this.currentRequest = CancelToken.source()
      const { uri, getParams = {} } = this.props
      request.get(uri, {
        ...getParams,
        search: value
      }, {
        cancelToken: this.currentRequest.token
      }).then(this._displayResults).catch(() => {})
    } else {
      this.setState(() => ({
        openSearch: false,
        results: []
      }))
    }

    this.setState(() => ({
      search: value
    }))
  }

  displayResults(results) {
    this.setState(() => ({
      results: (results.entities || results),
      openSearch: true
    }))
  }

  onSelect(item) {
    this.keepOpenSearch = false
    this.setState(() => ({
      results: [],
      search: item[this.props.labelKey]
    }))

    if (this.props.onSelect) {
      this.props.onSelect(item)
    }

    this.props.input.onChange(item.id)
  }

  componentWillMount() {
    if (this.props.defaultValue) {
      this.onSelect(this.props.defaultValue)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue && (!this.props.defaultValue || (this.props.defaultValue.id !== nextProps.defaultValue.id))) {
      this.onSelect(nextProps.defaultValue)
    }
  }

  onFocus() {
    if (this.state.results.length > 0) {
      this.setState(() => ({
        openSearch: true
      }))
    }
  }

  onBlur() {
    if (!this.keepOpenSearch) {
      this.setState(() => ({
        openSearch: false
      }))
    }
  }

  enterResults() {
    this.keepOpenSearch = true
  }
  
  leaveResults() {
    this.keepOpenSearch = false
  }

  render() {
    const { input, type, addButton, onAdd, label, labelKey = "label", required, meta: { touched, error, warning }, messages = {} } = this.props
    const { search, openSearch, results } = this.state
    const validationState = touched && error ? "error" : touched && warning ? "warning" : touched ? "success" : null
    const feedback = ["text", "email", "date", "password"].indexOf(type) > -1

    return (
      <FormGroup controlId={input.name} validationState={validationState} className={required ? "required":""}>
        <Col md={mdL} componentClass={ControlLabel}>
          {label}
        </Col>
        <Col md={mdR}>
          <input type="hidden" {...input}/>

          <InputGroup>
            <FormControl
              type="text"
              onChange={this._handleSearch}
              value={search}
              autoComplete="off"
              onFocus={this._onFocus}
              onBlur={this._onBlur}
            />
            {(addButton && onAdd && (
              <InputGroup.Button>
                <Button bsStyle="success" onClick={() => { this.resetSelected(); onAdd(search) }}>
                  {addButton}
                </Button>
              </InputGroup.Button>
            )) || (
                <InputGroup.Addon/>
              )}
          </InputGroup>

          {touched && feedback && <FormControl.Feedback/>}
          {openSearch && results.length > 0 &&
            <ResultsScreen
              results={results}
              labelKey={labelKey}
              onSelect={this._onSelect}
              onMouseEnter={this._enterResults}
              onMouseLeave={this._leaveResults}
            />
          }
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
}

Input.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string
  }),
  onSelect: PropTypes.func,
  messages: PropTypes.object,
  uri: PropTypes.string.isRequired,
  getParams: PropTypes.object,
  labelKey: PropTypes.string,
  defaultValue: PropTypes.object,
  addButton: PropTypes.string,
  onAdd: PropTypes.func,
  required: PropTypes.bool,
}

export default Input
