import { take, fork, put, call, all } from "redux-saga/effects"
import { push } from "react-router-redux"

import api from "application/utils/api/phone-book"
import { PHONEBOOK_ADD, phoneBookAdd as phoneBookAddActions } from "./actions"


export function* create(firstName, lastName, dateOfBirth, phoneNumber) {
  yield put(phoneBookAddActions.request(firstName, lastName, dateOfBirth, phoneNumber))

  try {
    const phoneBook = yield call(api.create, firstName, lastName, dateOfBirth, phoneNumber)
    yield put(phoneBookAddActions.success(phoneBook))
    yield put(push("/"))
    return phoneBook
  } catch (err) {
    yield put(phoneBookAddActions.failure(err))
  }
}

function* watchAddPhoneBook() {
  while (true) {
    const { payload } = yield take(PHONEBOOK_ADD.SUBMIT)
    yield fork(create,
      payload.get("firstName"),
      payload.get("lastName"),
      payload.get("dateOfBirth"),
      payload.get("phoneNumbber")
    )
  }
}

export default function* watch() {
  yield all([
    fork(watchAddPhoneBook)
  ])
}