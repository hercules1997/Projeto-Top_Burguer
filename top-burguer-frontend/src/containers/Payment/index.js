// import { initMercadoPago } from '@mercadopago/sdk-react'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'

import ImgLogoCart from '../../assets/imgLogoCart.png'
// import { CartItens, CartResume } from '../../components'
import IsloadingSpinner from '../../components/IsloadingSpinner'
// import { useCart } from '../../hooks/CartContext'
import paths from '../../constants/paths'
import { useCart } from '../../hooks/CartContext'
import apiTopBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  ButtonStyle,
  Container,
  ContainerFormData,
  ContainerItems,
  ContainerResume,
  FormPayment,
  HomeImage,
  Input,
  Label,
  Wampper
  // Wrapper,
  // WrapperItens,
  // WrapperResume
} from './style'

// initMercadoPago('TEST-899f32d7-c053-4a89-80f3-af87b130b25e')

export function Payment () {
  // const { cartProducts } = useCart()
  const history = useHistory()
  const [finalItems, setAllItems] = useState([])

  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(10)

  const { cartProducts } = useCart()
  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    const AllItems = cartProducts.reduce((acc, current) => {
      return current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
    setAllItems(AllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    if (cartProducts.length > 0) {
      const order = cartProducts.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity
        }
      })

      await toast.promise(
        apiTopBurger.post('orders', {
          products: order
        }),
        {
          pending: 'realizando seu pedido ...',
          success: 'Pedido realizado!',
          error: 'Falha ao realizar o pedido, tente novamente!'
        }
      )
      history.push(paths.StatusOrders)
    } else {
      alert('Carrinho vazio')
    }
  }

  return (
    <Container>
      <IsloadingSpinner />
      <HomeImage src={ImgLogoCart} alt="Logo do carrinho" />
      <ContainerItems>
        <ContainerResume>
          <Wampper
            style={{
              color: 'white'
            }}
          >
            <p> Total de Itens adicionados </p>
            <p>
              {finalItems} un
            </p>
          </Wampper>
          <Wampper
            style={{
              color: 'white'
            }}
          >
            <p> Valor total a pagar </p>{' '}
            <p> {formatCurrency(finalPrice + deliveryTax)} </p>{' '}
          </Wampper>
          <ButtonStyle
            style={{
              background: 'rgb(250, 150, 0)',
              color: 'white'
            }}
            onClick={() => history.push(paths.Cart)}
          >
            Voltar para sacola{' '}
          </ButtonStyle>{' '}
        </ContainerResume>
        <ContainerFormData>
          <FormPayment>
            <Label> Número do cartão </Label>{' '}
            <Input type="number" placeholder="6542 1548 4778 5471" />
            <Label> Nome impresso no cartão </Label>{' '}
            <Input type="name" placeholder="Ex: Carlos A Souza" />
            <Label> Vencimento </Label>{' '}
            <Input type="number" placeholder="08/22" />
            <Label> CVV </Label> <Input type="number" placeholder="255" />
            <ButtonStyle onClick={submitOrder}> Pagar </ButtonStyle>{' '}
          </FormPayment>{' '}
        </ContainerFormData>{' '}
      </ContainerItems>{' '}
    </Container>
  )
}
