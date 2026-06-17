import type { Product } from '../lib/fakestoreTypes';

interface Props {
  product: Product;
}

export function FakeStoreProductCard({ product }: Props) {
  return (
    <div className="flex flex-col rounded-lg border p-4">
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
      <span className="text-xs uppercase text-neutral-500">{product.category}</span>
      <h2 className="text-sm font-medium">{product.title}</h2>
      <p className="mt-1 font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
}