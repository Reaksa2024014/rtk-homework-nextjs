import { CreateProductTypes, ProductTypes } from "@/lib/products";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ecommerceApi= createApi({
  reducerPath : 'ecommerceApi',
  baseQuery: fetchBaseQuery({baseUrl: "https://ishop.cheat.casa/api/v1"}),
  endpoints: (builder) =>({
    //getAllProducts
    getAllProduct: builder.query<ProductTypes, unknown>({
        query: () => `/products`
    }),
    //getProductByUUid
    getProductByUUid: builder.query<ProductTypes, string>({
        query: (uuid: string) => ({
            url: `/products/${uuid}`
        })
    }),
    //createProduct
    createProduct : builder.mutation<CreateProductTypes, unknown>({
        query: (newProduct:CreateProductTypes) => ({
            url: `/products`,
            method: 'POST',
            headers: {
                'content-type':'application/json',
                'authentication': `bearer ${process.env.ACCESS_TOKEN}`
            },
            body: newProduct

        })
    })
  })
})

export const {
    useGetAllProductQuery,
    useGetProductByUUidQuery,
    useCreateProductMutation
    
} = ecommerceApi;






