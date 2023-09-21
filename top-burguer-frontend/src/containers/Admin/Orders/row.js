import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import IconButton from '@mui/material/IconButton'
import PropTypes from 'prop-types'
import React from 'react'

import apiTopBurger from '../../../services/api'
import status from './order-startus'
import {
  BoxStyle,
  CollapseStyle,
  ProductsImg,
  ReactSelectStyle,
  TableBodyStyle,
  TableCellStyle,
  TableHeadStyle,
  TableRowStyle,
  TableStyle,
  TypographyStyle
} from './style'

function Row ({ row, setOrders, orders }) {
  const [open, setOpen] = React.useState(false)
  const [lisLoading, setLisLoading] = React.useState(false)

  async function setNewStatus (id, status) {
    setLisLoading(true)

    try {
      await apiTopBurger.put(`orders/${id}`, { status })

      const newOrders = orders.map((ord) => {
        return ord._id === id ? { ...ord, status } : ord
      })
      setOrders(newOrders)
    } catch (error) {
      console.error(error)
    } finally {
      setLisLoading(false)
    }
  }

  return (
    <React.Fragment>
      <TableRowStyle sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCellStyle>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCellStyle>
        <TableCellStyle component="th" scope="row">
          {row.orderId}
        </TableCellStyle>
        <TableCellStyle>{row.name}</TableCellStyle>
        <TableCellStyle>{row.date}</TableCellStyle>
        <TableCellStyle>
          <ReactSelectStyle
            className="react-select-container"
            classNamePrefix="react-select"
            options={status.filter((sts) => sts.value !== 'Todos')}
            menuPortalTarget={document.body}
            placeholder="Status"
            defaultValue={status.find(
              (option) => option.value === row.status || null
            )}
            onChange={(newStatus) => {
              setNewStatus(row.orderId, newStatus.value)
            }}
            isLoading={lisLoading}
          />
        </TableCellStyle>
        <TableCellStyle></TableCellStyle>
      </TableRowStyle>
      <TableRowStyle>
        <TableCellStyle style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <CollapseStyle in={open} timeout="auto" unmountOnExit>
            <BoxStyle sx={{ margin: 1 }}>
              <TypographyStyle variant="h6" gutterBottom component="div">
                Pedido
              </TypographyStyle>
              <TableStyle size="small" aria-label="purchases">
                <TableHeadStyle>
                  <TableRowStyle>
                    <TableCellStyle>Quantidade</TableCellStyle>
                    <TableCellStyle>Produto</TableCellStyle>
                    <TableCellStyle>Categoria</TableCellStyle>
                  </TableRowStyle>
                </TableHeadStyle>
                <TableBodyStyle className="table">
                  {row.products.map((productRow) => (
                    <TableRowStyle key={productRow.id}>
                      <TableCellStyle component="th" scope="row">
                        {productRow.quantity}
                      </TableCellStyle>
                      <TableCellStyle> {productRow.name}</TableCellStyle>
                      <TableCellStyle> {productRow.category}</TableCellStyle>
                      <TableCellStyle>
                        <ProductsImg
                          src={productRow.url}
                          alt="Imagem do produto"
                        />
                      </TableCellStyle>
                    </TableRowStyle>
                  ))}
                </TableBodyStyle>
              </TableStyle>
            </BoxStyle>
          </CollapseStyle>
        </TableCellStyle>
      </TableRowStyle>
    </React.Fragment>
  )
}

Row.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func,
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default Row
