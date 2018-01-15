import { combineReducers } from "redux-immutablejs"

import { default as list } from "./PhoneBook/List/reducer"
/* import { default as add } from "./PhoneBook/Add/reducer"
import { default as edit } from "./PhoneBook/Edit/reducer"
import { default as deletePhoneBook } from "./PhoneBook/Delete/reducer" */

export default combineReducers({
  list
})
