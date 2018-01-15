import { action, createRequestType } from "application/utils/actions"

export const PHONEBOOK_EDIT_FORM = "data/phoneBook/edit"
export const PHONEBOOK_EDIT = createRequestType(PHONEBOOK_EDIT_FORM)
PHONEBOOK_EDIT.SUBMIT = PHONEBOOK_EDIT_FORM + "_SUBMIT"
export const phoneBookEdit = {
  submit: (...infos) => action(PHONEBOOK_EDIT.SUBMIT, { ...infos }),
  request: (...infos) => action(PHONEBOOK_EDIT.REQUEST, { ...infos }),
  success: phoneBook => action(PHONEBOOK_EDIT.SUCCESS, { phoneBook }),
  failure: errors => action(PHONEBOOK_EDIT.FAILURE, { payload: errors })
}