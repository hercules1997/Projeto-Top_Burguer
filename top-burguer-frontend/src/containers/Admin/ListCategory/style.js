import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  text-align: center;
  .checkYes {
    color: green;
    border-radius: 28px;
  }
  .checkNo {
    color: red;
    border-radius: 28px;
  }
`
export const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`
export const DeleteForeverIconStyle = styled(DeleteForeverIcon)`
  width: 80px;
  color: red;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: rosybrown;
  }
`
export const ModeEditIconStyle = styled(ModeEditIcon)`
  width: 80px;
  color: gray;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: yellow;
  }
`
export const TableRowStyle = styled(TableRow)`
  font-weight: bold;
  height: 50px;
  background: #292929 !important;
`
export const TableCellStyle = styled(TableCell)`
  width: 20px;
  color: whitesmoke !important;
  font-size: 1.2rem !important;
`

//* TAGS PARA ESTYLIZAÇÃO DA TAEBELA SIMPLES
export const TableHeadStyle = styled(TableHead)``
export const TableContainerStyle = styled(TableContainer)`
  border: none !important;
  border-radius: 12px !important;
`
export const TableBodyStyle = styled(TableBody)``
export const TableStyle = styled(Table)``
