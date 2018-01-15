import queryString from "query-string"
import app from "server/config/express"
import mongoose from "server/config/mongoose"
import config from "config/server.json"

import { renderToString } from "react-dom/server"
import configureStore from "application/store"
import { Provider } from "react-redux"
import { fromJS } from "immutable"
import { StaticRouter } from "react-router"
import Html from "server/html"
import React from "react"

const httpServer = app.listen(config.port, () => console.info(`server started on port ${config.port} (${config.env})`))

// open mongoose connection
mongoose.connect()

export {
  httpServer,
}

app.use("/favicon.ico", (req, res) => {
  res.sendStatus(404)
})

//send the SPA on /
app.use("*", function (req, res) {
  const location = req.baseUrl
  const query = req.query
  const context = {}

  const defaultData = {}

  const store = configureStore(fromJS(defaultData))

  const App = require("application/scenes/App").default

  const component = (
    <Provider store={store}>
      <StaticRouter location={{
        pathname: location,
        search: queryString.stringify(query)
      }} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )

  const content = renderToString(
    <Html component={component} store={store} />
  )
  res.send(`<!DOCTYPE html>\n${content}`)

  store.close()
})

app.use((err, req, res) => {
  res.sendStatus(400)
})
