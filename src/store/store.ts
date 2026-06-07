import { countSlice } from '@/features/countSlice/countSlice';
import { cartSlice } from '@/features/cart/cartSlice'; // <-- 1. Import your new cartSlice
import { ecommerceApi } from '@/services/ecommerce';
import { configureStore } from '@reduxjs/toolkit'

// set up the store
export const makeStore = () => {
   return configureStore({
      reducer: {
         count: countSlice.reducer,
         cart: cartSlice.reducer, // <-- 2. Add your cart reducer here
         [ecommerceApi.reducerPath]: ecommerceApi.reducer
      },
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(ecommerceApi.middleware)
   })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']