import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../constants/paths'
import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import apiTopBurger from '../../services/api'
import {
  Container,
  ContainerLeft,
  PageLink,
  PageLinkExit,
  ContainerRight,
  ContainerText,
  PageLinkAdmin,
  MenuHeader,
  Icons,
  FastfoodRoundedIconStyle,
  HomeSharpIconStyle,
  ContainerMenu,
  Bag,
  AccountCircleSharpIconStyle,
  ReceiptLongTwoToneIconStyle
} from './style'

export function Header () {
  const { logout, userData } = useUser()
  const { cartProducts } = useCart()
  const [finalItems, setAllItems] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.quantity + acc
    }, 0)

    setAllItems(sumAllItems)
  }, [cartProducts])

  useEffect(() => {
    async function loadOrders () {
      const { data } = await apiTopBurger.get('orders')

      setOrders(data)
    }

    loadOrders()
  }, [])

  const {
    push,
    location: { pathname }
  } = useHistory()

  return (
    <>
      <Container>
        <ContainerLeft>
          <PageLinkAdmin
            onClick={() => push(paths.ListProducts)}
            isAdmin={userData.admin}
          >
            Administrador
          </PageLinkAdmin>
          <PageLink
            onClick={() => push(paths.HomeInit)}
            isActive={pathname === paths.HomeInit}
          >
            Home
          </PageLink>
          <PageLink
            onClick={() => push(paths.Products)}
            isActive={pathname.includes(paths.Products)}
          >
            Ver Produtos
          </PageLink>
        </ContainerLeft>
        <ContainerRight>
          <PageLink
            style={{ marginRight: '25px' }}
            onClick={() => push(paths.StatusOrders)}
            isActive={pathname.includes(paths.StatusOrders)}
          >
            <ReceiptLongTwoToneIconStyle
              isActive={pathname.includes(paths.StatusOrders)}
            />
            {orders &&
              orders.map((row) => <div key={row.orderId}>{row.orderId}</div>)}

            {orders.length > 0
              ? (
              <span className="notficationCart">{orders.length}</span>
                )
              : (
              <></>
                )}
          </PageLink>
          <PageLink onClick={() => push(paths.Cart)}>
            <Bag isActive={pathname.includes(paths.Cart)} />
            {finalItems > 0
              ? (
              <span className="notficationCart">{finalItems}</span>
                )
              : (
              <></>
                )}
          </PageLink>
          <div className="barra"></div>
          <PageLink>
            <AccountCircleSharpIconStyle
              onClick={() => push(paths.User)}
              isActive={pathname === paths.User}
            />
          </PageLink>
          <ContainerText>
            <p>Olá, {userData.name}</p>
            <PageLinkExit
              onClick={() => {
                logout()
                push(paths.Public)
              }}
            >
              Sair
            </PageLinkExit>
          </ContainerText>
        </ContainerRight>
      </Container>

      <ContainerMenu>
        <MenuHeader>
          <Icons>
            <PageLink>
              <AccountCircleSharpIconStyle
                onClick={() => push(paths.User)}
                isActive={pathname === paths.User}
              />
            </PageLink>
          </Icons>
          <Icons
            onClick={() => push(paths.HomeInit)}
            isActive={pathname === paths.HomeInit}
          >
            <PageLink>
              <HomeSharpIconStyle isActive={pathname === paths.HomeInit} />
            </PageLink>
          </Icons>
          <Icons>
            <PageLink
              onClick={() => push(paths.Products)}
              isActive={pathname.includes(paths.Products)}
            >
              <FastfoodRoundedIconStyle
                isActive={pathname.includes(paths.Products)}
              />
            </PageLink>
          </Icons>
          <Icons>
            <PageLink
              onClick={() => push(paths.StatusOrders)}
              isActive={pathname.includes(paths.StatusOrders)}
            >
              <ReceiptLongTwoToneIconStyle
                isActive={pathname.includes(paths.StatusOrders)}
              />
              {orders &&
                orders.map((row) => <div key={row.orderId}>{row.orderId}</div>)}

              {orders.length > 0
                ? (
                <span className="notficationCart">{orders.length}</span>
                  )
                : (
                <></>
                  )}
            </PageLink>
          </Icons>
          <Icons>
            <PageLink onClick={() => push(paths.Cart)}>
              <Bag isActive={pathname.includes(paths.Cart)} />
              {finalItems > 0
                ? (
                <span className="notficationCart">{finalItems}</span>
                  )
                : (
                <></>
                  )}
            </PageLink>
          </Icons>
        </MenuHeader>
      </ContainerMenu>
    </>
  )
}
