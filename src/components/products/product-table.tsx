"use client";

import * as React from "react";
import { Provider } from "react-redux";

import { fakeStoreStore } from "@/store/fakeStore";
import { useGetProductsQuery } from "@/services/fakestoreApi";
import type { Product } from "@/lib/fakestoreTypes";
import { getColumns } from "./columns";
import { DataTable } from "./data-table";
import { ProductDetailDialog } from "./product-detail-dialog";

function ProductTableInner() {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [selected, setSelected] = React.useState<Product | null>(null);
  const [open, setOpen] = React.useState(false);

  const columns = React.useMemo(
    () =>
      getColumns((product) => {
        setSelected(product);
        setOpen(true);
      }),
    []
  );

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <>
      <DataTable columns={columns} data={products ?? []} />
      <ProductDetailDialog product={selected} open={open} onOpenChange={setOpen} />
    </>
  );
}

export function ProductTable() {
  return (
    <Provider store={fakeStoreStore}>
      <ProductTableInner />
    </Provider>
  );
}