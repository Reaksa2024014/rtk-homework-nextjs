// 'use client'

// import ProductCard from "@/components/ProductCard";

// // Mock list of items matching the exact structure your ProductCard expects
// const DUMMY_PRODUCTS = [
//   { id: 1, name: "Wireless Headphones", price: 99, image: "https://placehold.co/300x200" },
//   { id: 2, name: "Mechanical Keyboard", price: 149, image: "https://placehold.co/300x200" },
//   { id: 3, name: "Gaming Mouse", price: 59, image: "https://placehold.co/300x200" },
// ];

// export default function ProductsPage() {
//   return (
//     <div className="p-8 max-w-6xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      
//       {/* Responsive Grid layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {DUMMY_PRODUCTS.map((item) => (
//           <ProductCard key={item.id} product={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

'use client'

import ProductCard from "@/components/ProductCard";
import Link from "next/link"; // <-- 1. Import Link
import { useAppSelector } from "@/store/hooks";

const DUMMY_PRODUCTS = [
  { id: 1, name: "Wireless Headphones", price: 99, image: "https://placehold.co/300x200" },
  { id: 2, name: "Mechanical Keyboard", price: 149, image: "https://placehold.co/300x200" },
  { id: 3, name: "Gaming Mouse", price: 59, image: "https://placehold.co/300x200" },
];

export default function ProductsPage() {
  // Grab total quantity to show a live badge on the link button
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Our Products</h1>
        
        {/* 2. Use Link instead of standard anchor tags */}
        <Link 
          href="/cart" 
          className="bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition text-sm font-medium"
        >
          Go to Cart ({totalQuantity})
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {DUMMY_PRODUCTS.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}


