import { Field } from "redux-form/immutable"
import React from "react"

/* import AutoComplete from "./AutoComplete"
import NumberComponent from "./Number"
import Textarea from "./Textarea"
import Checkbox from "./Checkbox"
import Static from "./Static"
import Select from "./Select"
import Radio from "./Radio" */
import DateTime from "./Date"
import Input from "./Input"

const mapType = {
  "text": Input,
  "date": DateTime
}

export default ({ type, ...props }) => {
  const component = mapType[type]
  if (!component) {
    throw `Unknown field type of ${type}`
  }

  return <Field component={component} type={type} {...props} />
}
