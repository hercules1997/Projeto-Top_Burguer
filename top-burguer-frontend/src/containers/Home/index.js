import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
// import App from '../../components/App'
// import { Isloading } from '../../components/ff'
import IsloadingSpinner from '../../components/IsloadingSpinner'
import { Container, ContainerItens } from './style'

export function Home () {
  return (
    <>
      <IsloadingSpinner />
      {/* {Isloading()} */}
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
