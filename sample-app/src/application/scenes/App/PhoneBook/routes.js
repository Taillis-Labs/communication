import PhoneBookList from "./List"
import PhoneBookAdd from "./Add"
import PhoneBookEdit from "./Edit"
import PhoneBookDelete from "./Delete"

export default [
  {
    component: PhoneBookList,
    path: "/",
    exact: true
  },
  {
    component: PhoneBookAdd,
    path: "/phone-books/add",
    exact: true
  },
  {
    component: PhoneBookEdit,
    path: "/phone-books/:id/edit",
    exact: true
  },
  {
    component: PhoneBookDelete,
    path: "/phone-books/:id/delete",
    exact: true
  }
]
