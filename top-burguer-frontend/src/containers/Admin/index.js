import PropTypes from 'prop-types'
import React from 'react'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import {
  EditProducts,
  HomeInit,
  ListProducts,
  ListCategory,
  EditCategory,
  NewProducts,
  Orders,
  NewCategory
} from '../../containers'
import { Container, ContainerItems } from './style'

export function Admin ({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />

      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.ListProducts && <ListProducts />}
        {path === paths.NewProducts && <NewProducts />}
        {path === paths.EditProducts && <EditProducts />}
        {path === paths.ListCategory && <ListCategory />}
        {path === paths.EditCategory && <EditCategory />}
        {path === paths.NewCategory && <NewCategory />}
        {path === paths.Home && <HomeInit />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
