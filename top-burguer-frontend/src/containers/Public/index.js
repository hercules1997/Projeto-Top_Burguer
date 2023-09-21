import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png'
import {
  CategoryCarousel,
  HeaderPublic,
  OffersCarousel
} from '../../components'
import IsloadingSpinner from '../../components/IsloadingSpinner'
import { Container, ContainerItens } from './style'

export function Public () {
  return (
    <>
      <IsloadingSpinner />
      <HeaderPublic />
      <Container>
        <img src={ImgHomeBurguer} />

        <ContainerItens>
          <OffersCarousel />
          <CategoryCarousel />
        </ContainerItens>
      </Container>
    </>
  )
}
