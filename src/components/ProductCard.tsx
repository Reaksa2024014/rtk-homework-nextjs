'use client'

import { useAppDispatch, useAppSelector } from "@/store/hooks"; 
import { addToCart, removeFromCart } from "@/features/cart/cartSlice"; 
import { Button } from "@/components/ui/button";

interface ProductProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  }
}

export default function ProductCard({ product }: ProductProps) {
  const dispatch = useAppDispatch(); 

  // 1. Look into the Redux store to see if this product is already in the cart
  const cartItem = useAppSelector((state) => 
    state.cart.items.find((item) => item.id === product.id)
  );

  // 2. Extract the current quantity (default to 0 if it's not in the cart yet)
  const currentQuantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="relative border p-4 rounded-lg shadow-sm bg-white flex flex-col justify-between gap-4">
      
      {/* Visual Badge showing current quantity if it's greater than 0 */}
      {currentQuantity > 0 && (
        <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full shadow-sm">
          {currentQuantity} in Cart
        </span>
      )}

      <div>
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded bg-zinc-100" />
        <h2 className="font-semibold text-lg mt-2">{product.name}</h2>
        <p className="text-emerald-600 font-bold">${product.price}</p>
      </div>
      
      <div className="flex flex-col gap-2">
        {/* If the item is in the cart, show a nicely structured quantity controls layout */}
        <div className="flex gap-2">
          <Button 
            className="flex-1" 
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </Button>

          {currentQuantity > 0 && (
            <Button 
              variant="outline" 
              className="border-destructive text-destructive hover:bg-destructive/10"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remove 1
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}