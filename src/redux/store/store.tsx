import { configureStore } from '@reduxjs/toolkit'
import productsReducers from '../slicer/slice'

export const store = configureStore({
  reducer: {
    products: productsReducers,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch