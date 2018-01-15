import { take, fork, put, call, race, all } from "redux-saga/effects"
import api from "application/utils/api/phone-book"
import { delay } from "redux-saga"
import { FETCH_PHONEBOOK, phoneBook as phoneBookActions } from "./actions"

function* fetchPhoneBook(sort, search) {
  try {
    const phoneBooks = yield race({
      phoneBooks: call(api.fetchAll, sort, search),
      timeout: call(delay, 2000)
    })

    yield put(phoneBookActions.success(phoneBooks))
  } catch (e) {
    yield put(phoneBookActions.failure(e))
  }
} 

function* watchFetchPhoneBook() {
  while (true) {
    const { sort, search } = yield take(FETCH_PHONEBOOK)
    yield fork(fetchPhoneBook, sort, search)
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchPhoneBook),
  ])
}