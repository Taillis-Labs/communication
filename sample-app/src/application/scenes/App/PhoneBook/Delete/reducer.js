import { PHONEBOOK_DELETE } from "./actions"

const initialState = {
  phoneBooks: []
}

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case PHONEBOOK_DELETE.SUCCESS: {
      console.log("action", action)
      return state
    }
    case PHONEBOOK_DELETE.FAIL: {
      return state
    }
    default:
      return state
  }
}
