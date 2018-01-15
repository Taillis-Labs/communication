import { action, createRequestType } from "application/utils/actions"

export const PHONEBOOK_DELETE_FORM = "data/phoneBook/delete"
export const PHONEBOOK_DELETE = createRequestType(PHONEBOOK_DELETE_FORM)
PHONEBOOK_DELETE.SUBMIT = PHONEBOOK_DELETE_FORM + "_SUBMIT"
export const phoneBookDelete = {
  submit: (...infos) => action(PHONEBOOK_DELETE.SUBMIT, { ...infos }),
  request: (...infos) => action(PHONEBOOK_DELETE.REQUEST, { ...infos }),
  success: phoneBook => action(PHONEBOOK_DELETE.SUCCESS, { phoneBook }),
  failure: errors => action(PHONEBOOK_DELETE.FAILURE, { payload: errors })
}