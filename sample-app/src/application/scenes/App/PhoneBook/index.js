import { withRouter } from "react-router"
import React from "react"
import { connect } from "react-redux"

export default withRouter(connect(
  () => ({})
)(({
  Component,
  ...props
}) => {
  return (
    <Component {...props} />
  )
}))
