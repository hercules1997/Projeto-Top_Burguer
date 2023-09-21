import React, { useEffect, useState } from 'react'

import status from '../../assets/ImgProductsBurguer.png'
// import { CartItens, CartResume } from '../../components'
import IsloadingSpinner from '../../components/IsloadingSpinner'
// import { useCart } from '../../hooks/CartContext'
import apiTopBurger from '../../services/api'
import {
  CancelOrder,
  Container,
  ContainerItems,
  HomeImage,
  MessageStatus,
  NotificationStatus,
  ResumeOrders

  // Wrapper,
  // WrapperItens,
  // WrapperResume
} from './style'

export function StatusOrders () {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function loadOrders () {
      const { data } = await apiTopBurger.get('orders')

      setOrders(data)
    }

    loadOrders()
  }, [])

  return (
    <Container>
      <IsloadingSpinner />

      <HomeImage style={{ height: '100px' }} src={status} />

      <ContainerItems>
        <NotificationStatus>
          <MessageStatus>
            <img />
            <span>
              {orders &&
                orders.map((row) => (
                  <div key={row.orderId}>
                    <p>
                      {row._id}
                      {' - '}
                      {row.status}
                    </p>
                  </div>
                ))}
            </span>
          </MessageStatus>
          <CancelOrder>
            <button>Cancelar pedido</button>
          </CancelOrder>
        </NotificationStatus>
        <ResumeOrders>
          <h2>Resumo do pedido</h2>
          {/**   //TODO REALIZAR A BUSCA DO NOME DOS PEDIDOS */}
          {orders &&
            orders.map((row) => (
              <ul key={row.orderId}>
                <li>{row.name}</li>
              </ul>
            ))}
        </ResumeOrders>
      </ContainerItems>

      <div></div>
    </Container>
  )
}
