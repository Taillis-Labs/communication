import { all, fork } from "redux-saga/effects"

import watchPhoneBookList from "./PhoneBook/List/saga"
import watchPhoneBookAdd from "./PhoneBook/Add/saga"
import watchPhoneBookEdit from "./PhoneBook/Edit/saga"
import watchPhoneBookDelete from "./PhoneBook/Delete/saga"

export default function* root() {
  yield all([
    fork(watchPhoneBookList),
    fork(watchPhoneBookAdd),
    fork(watchPhoneBookEdit),
    fork(watchPhoneBookDelete),
  ])
}
