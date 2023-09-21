import { LogoutOutlined } from '@mui/icons-material'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import {
  ContainerItems,
  ContainerMenu,
  ListLink,
  ContainerLogout
} from './style'

export function SideMenuAdmin ({ path }) {
  const { logout } = useUser()
  const { push } = useHistory()

  return (
    <ContainerMenu>
      <hr className="hr"></hr>
      {listLinks.map((item) => (
        <ContainerItems key={item.id}>
          <ListLink to={item.link} isActive={path === item.link}>
            <item.icon className="icon" to={item.link} />
            {item.label}
          </ListLink>
        </ContainerItems>
      ))}
      <hr></hr>
      <ContainerLogout
        onClick={() => {
          logout()
          push(paths.Login)
        }}
      >
        <ListLink style={{ color: '#fa9600' }}>
          <LogoutOutlined className="iconLogout" />
          Sair
        </ListLink>
      </ContainerLogout>
    </ContainerMenu>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
