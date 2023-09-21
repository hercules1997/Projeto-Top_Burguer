import React from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../constants/paths'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Img,
  Content,
  ProductDecription,
  Trash,
  EmpyCart,
  ContainerButtom,
  TrashAt,
  ButtonStyleThree,
  ContainerContent,
  Remove,
  Add,
  Bag,
  ContainerMaster,
  ContainerEmpyCart,
  Decription
} from './style'
export function CartItens () {
  const { push } = useHistory()
  const { cartProducts, increseProducts, decreseProducts, deleteProducts } =
    useCart()

  return (
    <ContainerMaster>
      <Container>
        {cartProducts && cartProducts.length > 0
          ? (
              cartProducts.map((product) => (
            <>
              <ContainerContent>
                <Trash onClick={() => deleteProducts(product.id)}>
                  <TrashAt />
                </Trash>
                <Content key={product.id}>
                  <Img src={product.url} />
                  <Decription>
                    <div className="decriptAling">
                      <ProductDecription> {product.name} </ProductDecription>
                      <ProductDecription>
                        {formatCurrency(product.quantity * product.price)}
                      </ProductDecription>
                    </div>
                    <div className="quanty">
                      <ProductDecription>
                        <div className="quantity-container">
                          <Remove
                            onClick={() => decreseProducts(product.id)}
                          ></Remove>
                          <p> {product.quantity} </p>
                          <Add
                            onClick={() => increseProducts(product.id)}
                          ></Add>
                        </div>
                      </ProductDecription>
                    </div>
                  </Decription>
                </Content>
              </ContainerContent>
            </>
              ))
            )
          : (
          <ContainerEmpyCart>
            <EmpyCart>
              <Bag />
              Sacola vazia
            </EmpyCart>
          </ContainerEmpyCart>
            )}
      </Container>
      <ContainerButtom>
        <ButtonStyleThree onClick={() => push(paths.Products)}>
          Adicionar itens
        </ButtonStyleThree>
      </ContainerButtom>
    </ContainerMaster>
  )
}
