import { action, createRequestType } from "application/utils/actions"

export const FETCH_PHONEBOOK = "scenes/app/phonebook/list"
export const PHONEBOOK = createRequestType(FETCH_PHONEBOOK)

export const refreshPhoneBook = (sortFilter = {}, searchFilter = {}) => action(FETCH_PHONEBOOK, sortFilter, searchFilter)
export const phoneBook = {
  request: () => action(PHONEBOOK.REQUEST),
  success: (entities) => action(PHONEBOOK.SUCCESS, { entities }),
  failure: () => action(PHONEBOOK.FAILURE)
}
