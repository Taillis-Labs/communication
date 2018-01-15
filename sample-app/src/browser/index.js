import createHistory from "history/createBrowserHistory"
import { ConnectedRouter } from "react-router-redux"
import { AppContainer } from "react-hot-loader"
import { render as renderDOM } from "react-dom"
import { Provider } from "react-redux"
import { fromJS } from "immutable"
import React from "react"
import "moment/locale/fr"

import App from "application/scenes/App"

import configureStore from "application/store"
// import SagaManager from "utils/sagas/manager"

import "./scss/styles.scss"

const app = document.getElementById("app")
const history = createHistory()

const store = configureStore(fromJS(window.__data), history)
// SagaManager.startSagas(store.sagaMiddleware)

const render = Container =>
  renderDOM(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Container />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    app
  )

render(App)

if (module.hot) {
  module.hot.accept("application/scenes/App", () => {
    const NextApp = require("application/scenes/App").default
    setTimeout(function () {
      render(NextApp)
    })
  })
}
