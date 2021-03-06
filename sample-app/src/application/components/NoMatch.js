import PropTypes from "prop-types"
import React from "react"

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default NoMatch
