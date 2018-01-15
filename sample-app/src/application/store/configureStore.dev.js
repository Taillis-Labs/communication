import { applyMiddleware, createStore, compose } from "redux"
import createSagaMiddleware, { END } from "redux-saga"
import { routerMiddleware } from "react-router-redux"
import { createLogger } from "redux-logger"

import reducers from "application/reducers"
import sagas from "application/sagas"

const sagaMiddleware = createSagaMiddleware()
const middlewaresList = [sagaMiddleware]
const middlewares = []

if (process.env.BROWSER) {
  middlewaresList.push(createLogger({ collapsed: true }))
}

export default function configureStore(initialState, history) {
  if (history) {
    middlewaresList.push(routerMiddleware(history))
  }

  middlewares.push(
    applyMiddleware(...middlewaresList),
  )

  if (typeof window !== "undefined" && window.devToolsExtension) {
    middlewares.push(window.devToolsExtension())
  }

  const store = createStore(reducers, initialState, compose(...middlewares))
  sagas.forEach(saga => sagaMiddleware.run(saga))

  if (module.hot) {
    module.hot.accept("application/reducers", () => {
      const nextRootReducer = require("application/reducers").default
      store.replaceReducer(nextRootReducer)
    })
  }

  store.sagaMiddleware = sagaMiddleware
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}
