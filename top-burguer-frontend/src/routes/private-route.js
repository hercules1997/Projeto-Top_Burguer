import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Header } from '../components'
import paths from '../constants/paths'

export function PrivateRoute ({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem('topBurguer:userData')

  if (!user) {
    return <Redirect to={paths.Login} />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to={paths.HomeInit} />
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Route {...rest} component={component} />
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}
