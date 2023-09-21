import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  /*
   FUNÇÃO DE ATUALIZAÇÃO NO LOCALSTORANGE
  */
  const updateLocalStorange = async (products) => {
    await localStorage.setItem('topBurguer:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prod) => prod.id === product.id)
    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = cartProducts
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    await updateLocalStorange(newCartProducts)
  }

  const deleteProducts = async (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId)
    setCartProducts(newCart)
    await updateLocalStorange(newCart)
  }

  const increseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)
    await updateLocalStorange(newCart)
  }

  const decreseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex(
      (prodCart) => prodCart.id === productId
    )

    if (cartProducts[cartIndex].quantity > 1) {
      const newCartDecrese = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCartDecrese)
      await updateLocalStorange(newCartDecrese)
    } else {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('topBurguer:cartInfo')
      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increseProducts,
        decreseProducts,
        deleteProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used with Usercontext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
