import { configureStore } from '@reduxjs/toolkit';
import { fakeStoreApi } from '@/services/fakestoreApi';

export const fakeStoreStore = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});