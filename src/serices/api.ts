import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProduto: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    }),
    getFavoritos: builder.query<[], void>({
      query: () => 'favoritos'
    })
  })
})

export const { useGetProdutoQuery, useGetFavoritosQuery } = api
export default api
