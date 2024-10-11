import { useSelector } from 'react-redux'

import * as S from './styles'

import type { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import type { RootReducer } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const items = useSelector((state: RootReducer) => state.favoritos.items)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{items.length} favoritos </span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
