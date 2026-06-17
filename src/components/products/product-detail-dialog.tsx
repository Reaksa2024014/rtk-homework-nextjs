"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Product } from "@/lib/fakestoreTypes";

interface ProductDetailDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailDialog({ product, open, onOpenChange }: ProductDetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {product && (
          <>
            <DialogHeader>
              <DialogTitle>{product.title}</DialogTitle>
              <DialogDescription className="capitalize">{product.category}</DialogDescription>
            </DialogHeader>
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-40 w-40 object-contain"
            />
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <dt className="text-muted-foreground">ID</dt>
              <dd>{product.id}</dd>
              <dt className="text-muted-foreground">Price</dt>
              <dd className="font-medium">${product.price.toFixed(2)}</dd>
            </dl>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}