import { renderRoutes } from "react-router-config"
import { Grid, Row, Col } from "react-bootstrap"
import { Route, Switch } from "react-router-dom"
import NoMatch from "application/components/NoMatch"
import React, { Component } from "react"

import routes from "./routes"

export default class App extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Switch>
                {renderRoutes(routes)}
                <Route component={NoMatch} />
              </Switch>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
