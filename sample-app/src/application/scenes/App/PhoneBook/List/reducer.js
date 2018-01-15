import { PHONEBOOK } from "./actions"
import { fromJS } from "immutable"

const initialState = {
  phoneBooks: []
}

export default (state = initialState, action) => {
  const { type, ...payload } = action

  switch (type) {
    case PHONEBOOK.SUCCESS: {
      return state.set("phoneBooks", fromJS(payload.entities.phoneBooks))
    }
    default:
      return state
  }
}
