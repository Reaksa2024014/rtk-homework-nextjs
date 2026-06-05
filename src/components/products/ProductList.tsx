'use client'

import { useGetAllProductQuery } from '@/services/ecommerce'


export default function ProductList() {
    const {data, error, isLoading} = useGetAllProductQuery([]);
    console.log(`All Productss: ${data}`);
    console.log(`Error: ${error}`)
    console.log(`Loadding: ${isLoading}`)
  return (
    <div>
      
    </div>
  )
}
