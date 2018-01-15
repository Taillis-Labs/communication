import { action, createRequestType } from "application/utils/actions"

export const PHONEBOOK_ADD_FORM = "data/phoneBook/add"
export const PHONEBOOK_ADD = createRequestType(PHONEBOOK_ADD_FORM)
PHONEBOOK_ADD.SUBMIT = PHONEBOOK_ADD_FORM + "_SUBMIT"
export const phoneBookAdd = {
  submit: (...infos) => action(PHONEBOOK_ADD.SUBMIT, { ...infos }),
  request: (...infos) => action(PHONEBOOK_ADD.REQUEST, { ...infos }),
  success: phoneBook => action(PHONEBOOK_ADD.SUCCESS, { phoneBook }),
  failure: errors => action(PHONEBOOK_ADD.FAILURE, { payload: errors })
}