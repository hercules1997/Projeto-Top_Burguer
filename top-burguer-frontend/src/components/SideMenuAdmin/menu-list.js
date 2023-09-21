import { ShoppingBag } from '@mui/icons-material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CategoryIcon from '@mui/icons-material/Category'
import HomeIcon from '@mui/icons-material/Home'
import ListAltIcon from '@mui/icons-material/ListAlt'

import paths from '../../constants/paths'
const listLinks = [
  {
    id: 1,
    label: 'Página Inicial',
    link: paths.HomeInit,
    icon: HomeIcon
  },
  {
    id: 2,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBag
  },
  {
    id: 3,
    label: 'Listar Produtos',
    link: paths.ListProducts,
    icon: ListAltIcon
  },
  {
    id: 4,
    label: 'Novo Produto',
    link: paths.NewProducts,
    icon: AddCircleIcon
  },
  {
    id: 5,
    label: 'Listar Categorias',
    link: paths.ListCategory,
    icon: CategoryIcon
  },
  {
    id: 6,
    label: 'Nova categoria',
    link: paths.NewCategory,
    icon: AddCircleIcon
  }
]

export default listLinks
