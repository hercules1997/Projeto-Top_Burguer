import PropTypes from 'prop-types'
import React, { useEffect, useState, useRef } from 'react'

import ImgProductsBurguer from '../../assets/ImgProductsBurguer.png'
import { CardProduct } from '../../components'
import IsloadingSpinner from '../../components/IsloadingSpinner'
import apiTopBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  HomeImage,
  ContainerMenu,
  Menu,
  ContainerProducts,
  CarouselStyle
} from './style'

export function Products ({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await apiTopBurger.get('categories')
      const newCategory = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategory)
    }
    async function loadProducts () {
      const { data: allProducts } = await apiTopBurger.get('products')

      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products)
    } else {
      const newFilterProductCategory = products.filter(
        (product) => product.category_id === activeCategory
      )
      setFilterProducts(newFilterProductCategory)
    }
  }, [activeCategory, products])

  const brackPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 900, itemsToShow: 8 },
    { width: 1300, itemsToShow: 10 }
  ]

  // MOVIMENTAÇÃO DO CARROUSEL
  const carouselRef = useRef(null)

  return (
    <>
      <IsloadingSpinner />

      <Container>
        <HomeImage src={ImgProductsBurguer} />

        <ContainerMenu>
          <CarouselStyle
            ref={carouselRef}
            breakPoints={brackPoints}
            easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          >
            {categories &&
              categories.map((category) => (
                <Menu
                  type="button"
                  key={category.id}
                  isActiveCategory={activeCategory === category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                  }}
                >
                  {category.name}
                </Menu>
              ))}
          </CarouselStyle>
        </ContainerMenu>
        <ContainerProducts>
          {filterProducts &&
            filterProducts.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </ContainerProducts>
      </Container>
    </>
  )
}
Products.propTypes = {
  location: PropTypes.object
}
