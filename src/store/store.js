import { configureStore } from '@reduxjs/toolkit'
import  wishlistReducer  from './features/productsSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
})