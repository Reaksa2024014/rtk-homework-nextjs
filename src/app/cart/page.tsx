'use client'

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addToCart, removeFromCart, clearCart } from "@/features/cart/cartSlice";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const dispatch = useAppDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
        <p className="text-zinc-500">Your cart is empty. Go add some products!</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-zinc-500">${item.price} x {item.quantity}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={() => dispatch(removeFromCart(item.id))}>
                -
              </Button>
              <span className="font-medium px-2">{item.quantity}</span>
              <Button size="sm" variant="outline" onClick={() => dispatch(addToCart(item))}>
                +
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">Total Amount: <span className="text-emerald-600">${totalAmount}</span></p>
        </div>
        <div className="flex gap-4">
          <Button variant="destructive" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}