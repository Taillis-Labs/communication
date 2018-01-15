import { formSubmitSaga } from "redux-form-submit-saga/immutable"
import watchScenes from "./scenes/App/saga"

export default [
  watchScenes,
  formSubmitSaga
]
