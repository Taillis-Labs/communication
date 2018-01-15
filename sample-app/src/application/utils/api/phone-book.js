import { isEmpty, sortBy, camelCase } from "lodash"

// eslint-disable-next-line
const fetchAll = async (sort, search) => {
  let phoneBooks = await localStorage.getItem("phoneBooks")

  if (phoneBooks)
    phoneBooks = JSON.parse(phoneBooks)
  else
    phoneBooks = []


  if (!isEmpty(sort)) {
    phoneBooks = sortBy(phoneBooks, camelCase(sort.replace(/\s/g, "")))
  }

  if (!isEmpty(search)) {
    phoneBooks = phoneBooks.filter(phoneBooks => 
      phoneBooks.firstName === search ||
      phoneBooks.lastName === search ||
      phoneBooks.dateOfBirth === search ||
      phoneBooks.phoneNumber === search
    )
  }

  return phoneBooks
}

const create = async (firstName, lastName, dateOfBirth, phoneNumber) => {
  const id = parseInt(Math.random() * 100000)
  const phoneBook = {
    id, firstName, lastName, dateOfBirth, phoneNumber
  }
  let phoneBooks = await localStorage.getItem("phoneBooks")
  if (phoneBooks)
    phoneBooks = JSON.parse(phoneBooks)
  else
    phoneBooks = []
  phoneBooks.push(phoneBook)
  phoneBooks = await localStorage.setItem("phoneBooks", JSON.stringify(phoneBooks))
  return phoneBook
}

const edit = async (id, firstName, lastName, dateOfBirth, phoneNumber) => {
  const phoneBook = {
    id, firstName, lastName, dateOfBirth, phoneNumber
  }
  let phoneBooks = await localStorage.getItem("phoneBooks")

  if (phoneBooks)
    phoneBooks = JSON.parse(phoneBooks)
  else
    phoneBooks = []

  phoneBooks = phoneBooks.map(p => {
    if (p.id === id)
      return phoneBook
    else
      return p
  })

  phoneBooks = await localStorage.setItem("phoneBooks", JSON.stringify(phoneBooks))
  return phoneBook
}

const deletePhoneBookNew = async (id) => {
  let phoneBooks = await localStorage.getItem("phoneBooks")

  if (phoneBooks)
    phoneBooks = JSON.parse(phoneBooks)
  else
    phoneBooks = []

  phoneBooks = phoneBooks.filter(p => p.id !== id)
  phoneBooks = await localStorage.setItem("phoneBooks", JSON.stringify(phoneBooks))
  return phoneBooks
}

export default {
  fetchAll,
  create,
  edit,
  deletePhoneBookNew
}
