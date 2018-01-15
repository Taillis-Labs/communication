import PrivateRoute from "./PhoneBook"
import React from "react"

import PrivateRoutes from "./PhoneBook/routes"

const parsePrivateRoute = route => {
  const { component, routes, ...props } = route
  const newRoute = {
    ...props,
    component: () => <PrivateRoute Component={component} route={route} />
  }

  if (routes) {
    newRoute.routes = routes.map(parsePrivateRoute)
  }

  return newRoute
}

const protectedRoutes = PrivateRoutes.map(parsePrivateRoute)

export default [
  ...protectedRoutes
]
