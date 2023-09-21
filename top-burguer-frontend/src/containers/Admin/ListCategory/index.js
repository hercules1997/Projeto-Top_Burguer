import Paper from '@mui/material/Paper'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import paths from '../../../constants/paths'
import apiTopBurguer from '../../../services/api'
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

export function ListCategory (props) {
  const [categories, setCategories] = useState()
  const { push } = useHistory()

  useEffect(() => {
    async function loadOrders () {
      const { data } = await apiTopBurguer.get('categories')

      setCategories(data)
    }

    loadOrders()
  }, [categories])

  function editProduct (category) {
    push(paths.EditCategory, { category })
  }

  const deleteProduct = async (category) => {
    console.log(category)
    await toast.promise(apiTopBurguer.delete(`categories/${category.id}`), {
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
                Nome
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Imagem da categoria
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
            {categories &&
              categories.map((category) => (
                <TableRowStyle
                  key={category.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCellStyle component="th" scope="prod">
                    {category.name}
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <Img src={category.url} alt="Imagem produto" />
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <ModeEditIconStyle onClick={() => editProduct(category)} />
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <DeleteForeverIconStyle
                      onClick={() => deleteProduct(category)}
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
