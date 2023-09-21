import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import apiTopBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ContainerItens,
  ImgCategory,
  OfferName,
  OfferPrice,
  Button
} from './style'

export function OffersCarousel () {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    async function loadOffers () {
      const { data } = await apiTopBurger.get('products')

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const brackPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 }
  ]

  // MOVIMENTAÇÃO DO CARROUSEL
  const carouselRef = useRef(null)
  const items = offers.length

  const totalPages = Math.ceil(items - 1)
  let resetTimeout

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const settings = {
    itemsToShow: items,
    enableAutoPlay: !isPaused,
    autoPlaySpeed: 5000,
    transitionMs: 400,
    breakPoints: brackPoints,
    easing: 'cubic-bezier(1,.15,.55,1.54)',
    tiltEasing: 'cubic-bezier(0.110, 1, 1.000, 0.210)',
    onNextEnd: ({ index }) => {
      clearTimeout(resetTimeout)
      if (index === totalPages) {
        resetTimeout = setTimeout(() => {
          carouselRef.current.goTo(0)
        }, 2000)
      }
    }
  }

  return (
    <Container>
      <h1>OFERTAS</h1>

      <Carousel ref={carouselRef} {...settings}>
        {offers &&
          offers.map((product) => (
            <ContainerItens
              key={product.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ImgCategory src={product.url} alt="Fotos da categorias" />
              <OfferName>{product.name}</OfferName>
              <OfferPrice>{product.formatedPrice}</OfferPrice>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça Agora!
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
