import { take, fork, put, call, all } from "redux-saga/effects"
import { push } from "react-router-redux"

import api from "application/utils/api/phone-book"
import { PHONEBOOK_DELETE, phoneBookDelete as phoneBookDeleteActions } from "./actions"


export function* deletePhoneBook(id) {
  yield put(phoneBookDeleteActions.request(id))

  try {
    const phoneBook = yield call(api.deletePhoneBookNew, id)
    console.log("deletePhoneBook", phoneBook)
    yield put(phoneBookDeleteActions.success(phoneBook))
    yield put(push("/"))
    return phoneBook
  } catch (err) {
    yield put(phoneBookDeleteActions.failure(err))
  }
}

function* watchDeletePhoneBook() {
  while (true) {
    const { payload } = yield take(PHONEBOOK_DELETE.SUBMIT)
    yield fork(deletePhoneBook,
      payload.get("id"),
    )
  }
}

export default function* watch() {
  yield all([
    fork(watchDeletePhoneBook)
  ])
}