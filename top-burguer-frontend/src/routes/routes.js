import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import paths from '../constants/paths'
import {
  Home,
  Login,
  Products,
  Register,
  Cart,
  Admin,
  User,
  Public,
  Payment
} from '../containers'
import { StatusOrders } from '../containers/StatusOrders'
import { PrivateRoute } from './private-route'

function AllRoutes () {
  return (
    <Router>
      <Switch>
        <Route component={Login} path={paths.Login} />
        <Route component={Register} path={paths.Register} />
        <Route exact component={Public} path={paths.Public} />
        <PrivateRoute component={Home} path={paths.HomeInit} />
        <PrivateRoute component={Products} path={paths.Products} />
        <PrivateRoute component={Cart} path={paths.Cart} />
        <PrivateRoute component={Payment} path={paths.Payment} />
        <PrivateRoute component={StatusOrders} path={paths.StatusOrders} />
        <PrivateRoute component={User} path={paths.User} />

        <PrivateRoute component={Admin} path={paths.ListProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.Order} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.EditProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.HomeInit} isAdmin />
        <PrivateRoute component={Admin} path={paths.ListCategory} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewCategory} isAdmin />
        <PrivateRoute component={Admin} path={paths.EditCategory} isAdmin />
      </Switch>
    </Router>
  )
}

export default AllRoutes
