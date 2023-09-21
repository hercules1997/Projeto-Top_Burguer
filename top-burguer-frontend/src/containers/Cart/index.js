import React from 'react'

import ImgLogoCart from '../../assets/imgLogoCart.png'
import { CartItens, CartResume } from '../../components'
import IsloadingSpinner from '../../components/IsloadingSpinner'
import { useCart } from '../../hooks/CartContext'
import {
  Container,
  HomeImage,
  Wrapper,
  WrapperItens,
  WrapperResume
} from './style'

export function Cart () {
  const { cartProducts } = useCart()

  return (
    <Container>
      <IsloadingSpinner />

      <HomeImage src={ImgLogoCart} alt="Logo do carrinho" />

      <Wrapper>
        <WrapperItens>
          <CartItens />
        </WrapperItens>
        {cartProducts.length > 0
          ? (
          <WrapperResume>
            <CartResume />
          </WrapperResume>
            )
          : (
          <></>
            )}
      </Wrapper>
    </Container>
  )
}
