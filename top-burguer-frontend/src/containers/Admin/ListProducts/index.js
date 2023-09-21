import CheckBoxIcon from '@mui/icons-material/CheckBox'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'
import Paper from '@mui/material/Paper'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import paths from '../../../constants/paths'
import apiTopBurguer from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import {
  Container,
  Img,
  ModeEditIconStyle,
  TableBodyStyle,
  TableCellStyle,
  TableContainerStyle,
  TableHeadStyle,
  TableRowStyle,
  TableStyle,
  DeleteForeverIconStyle
} from './style'

export function ListProducts () {
  const [products, setProducts] = useState()
  const { push } = useHistory()

  useEffect(() => {
    async function loadOrders () {
      const { data } = await apiTopBurguer.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [products])

  function isOffer (offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon className="checkYes" />
    }
    return <DisabledByDefaultIcon className="checkNo" />
  }

  function editProduct (product) {
    push(paths.EditProducts, { product })
  }

  const deleteProduct = async (product) => {
    console.log(product)
    await toast.promise(apiTopBurguer.delete(`products/${product.id}`), {
      pending: 'Deletando produto...',
      success: 'Produto deletado com sucesso!',
      error: 'Falha ao deletar produto, por favor tente novamente'
    })
  }

  return (
    <Container>
      <TableContainerStyle component={Paper} className="table-container">
        <TableStyle
          sx={{ minWidth: 600 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHeadStyle className="table-head">
            <TableRowStyle>
              <TableCellStyle className="table-row" align="center">
                Produto
              </TableCellStyle>
              <TableCellStyle style={{ width: '120px' }} className="table-row">
                Preço
              </TableCellStyle>
              <TableCellStyle className="table-row" align="center">
                Produtos em oferta
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Imagem do produto
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Editar
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Deletar
              </TableCellStyle>
            </TableRowStyle>
          </TableHeadStyle>
          <TableBodyStyle>
            {products &&
              products.map((prod) => (
                <TableRowStyle
                  key={prod.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCellStyle component="th" scope="prod">
                    {prod.name}
                  </TableCellStyle>
                  <TableCellStyle>{formatCurrency(prod.price)}</TableCellStyle>
                  <TableCellStyle align="center">
                    {isOffer(prod.offer)}
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <Img src={prod.url} alt="Imagem produto" />
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <ModeEditIconStyle onClick={() => editProduct(prod)} />
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <DeleteForeverIconStyle
                      onClick={() => deleteProduct(prod)}
                    />
                  </TableCellStyle>
                </TableRowStyle>
              ))}
          </TableBodyStyle>
        </TableStyle>
      </TableContainerStyle>
    </Container>
  )
}
