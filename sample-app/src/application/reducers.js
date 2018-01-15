import { combineReducers } from "redux-immutablejs"

import app from "./scenes/App/reducer"
import { reducer as form } from "redux-form/immutable"

export default combineReducers({
  app,
  form
})
