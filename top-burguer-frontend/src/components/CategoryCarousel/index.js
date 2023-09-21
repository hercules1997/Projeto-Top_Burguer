import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import apiTopBurger from '../../services/api'
import { Container, ContainerItens, ImgCategory, Button } from './style'

export function CategoryCarousel () {
  const [categories, setCategories] = useState([])
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await apiTopBurger.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  const brackPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 }
  ]
  const carouselRef = useRef(null)
  const items = categories.length
  const totalPages = Math.ceil(categories.length - 1)
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
    autoPlaySpeed: 3500,
    transitionMs: 1600,
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
      <h1>CATEGORIAS</h1>

      <Carousel ref={carouselRef} {...settings}>
        {categories &&
          categories.map((category) => (
            <ContainerItens
              key={category.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ImgCategory src={category.url} alt="Fotos da categorias" />
              <Button
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }}
              >
                {category.name}
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
