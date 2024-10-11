import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritos from './reducers/favoritos'

import api from '../serices/api'
import api2 from '../serices/api2'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritos,
    ...{
      [api.reducerPath]: api.reducer,
      [api2.reducerPath]: api2.reducer
    }
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, api2.middleware)
})
export type RootReducer = ReturnType<typeof store.getState>
