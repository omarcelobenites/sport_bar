import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Produto } from '../App'

const api2 = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getFavoritos: builder.query<[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetFavoritosQuery } = api2
export default api2
