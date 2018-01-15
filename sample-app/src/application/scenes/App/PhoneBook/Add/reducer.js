import { PHONEBOOK_ADD } from "./actions"
import { fromJS } from "immutable"

const initialState = {
  phoneBooks: []
}

export default (state = initialState, action) => {
  const { type, ...payload } = action

  switch (type) {
    case PHONEBOOK_ADD.SUCCESS: {
      const { phoneBook } = payload
      return state.set("phoneBooks", [...state.phoneBooks, fromJS(phoneBook)])
    }
    case PHONEBOOK_ADD.FAIL: {
      return state
    }
    default:
      return state
  }
}
