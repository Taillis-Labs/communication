import { take, fork, put, call, all } from "redux-saga/effects"
import { push } from "react-router-redux"

import api from "application/utils/api/phone-book"
import { PHONEBOOK_EDIT, phoneBookEdit as phoneBookEditActions } from "./actions"


export function* edit(id, firstName, lastName, dateOfBirth, phoneNumber) {
  console.log(firstName, lastName, dateOfBirth, phoneNumber)
  yield put(phoneBookEditActions.request(id, firstName, lastName, dateOfBirth, phoneNumber))

  try {
    const phoneBook = yield call(api.edit, id, firstName, lastName, dateOfBirth, phoneNumber)
    yield put(phoneBookEditActions.success(phoneBook))
    yield put(push("/"))
    return phoneBook
  } catch (err) {
    yield put(phoneBookEditActions.failure(err))
  }
}

function* watchEditPhoneBook() {
  while (true) {
    const { payload } = yield take(PHONEBOOK_EDIT.SUBMIT)
    yield fork(edit,
      payload.get("id"),
      payload.get("firstName"),
      payload.get("lastName"),
      payload.get("dateOfBirth"),
      payload.get("phoneNumbber")
    )
  }
}

export default function* watch() {
  yield all([
    fork(watchEditPhoneBook)
  ])
}