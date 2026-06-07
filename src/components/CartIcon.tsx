'use client'
import { useAppSelector } from "@/store/hooks";

export default function CartIcon() {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);

  return (
    <div className="flex gap-4 p-2 border rounded-md bg-white shadow-sm">
      <span className="font-medium">Items: {totalQuantity}</span>
      <span className="text-emerald-600 font-semibold">Total: ${totalAmount}</span>
    </div>
  );
}