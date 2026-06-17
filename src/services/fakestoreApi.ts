import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '@/lib/fakestoreTypes';

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
      transformResponse: (response: any[]) =>
        response.map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          category: p.category,
          image: p.image,
        })),
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
      transformResponse: (p: any) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        category: p.category,
        image: p.image,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = fakeStoreApi;