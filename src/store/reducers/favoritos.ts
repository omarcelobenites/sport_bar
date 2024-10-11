import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Definição do estado inicial
type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type FavoritosState = {
  items: Produto[]
}

const initialState: FavoritosState = {
  items: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExistente = state.items.find((p) => p.id === produto.id)

      if (produtoExistente) {
        // Remove o produto dos favoritos
        state.items = state.items.filter((p) => p.id !== produto.id)
      } else {
        // Adiciona o produto aos favoritos
        state.items.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
