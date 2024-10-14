import type { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutoQuery } from '../serices/api'
import { useGetFavoritosQuery } from '../serices/api2'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutoQuery()
  const { data: favoritos } = useGetFavoritosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  // Função que verifica se o produto está nos favoritos
  const verificarProdutoFavorito = (produto: ProdutoType) => {
    return favoritos?.some(
      (favorito: ProdutoType) => favorito.id === produto.id
    )
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          estaNosFavoritos={verificarProdutoFavorito(produto) ?? false}
          key={produto.id}
          produto={produto}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
