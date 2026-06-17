"use client";

import { ColumnDef, type Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/fakestoreTypes";

function sortableHeader(label: string) {
  return ({ column }: { column: Column<Product, unknown> }) => (
    <Button
      variant="ghost"
      className="-ml-3"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      {column.getIsSorted() === "asc" ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : column.getIsSorted() === "desc" ? (
        <ArrowDown className="ml-2 h-4 w-4" />
      ) : (
        <ArrowUpDown className="ml-2 h-4 w-4" />
      )}
    </Button>
  );
}

export function getColumns(onView: (product: Product) => void): ColumnDef<Product>[] {
  return [
    { accessorKey: "id", header: sortableHeader("ID") },
    {
      accessorKey: "image",
      header: "Image",
      enableSorting: false,
      enableGlobalFilter: false,
      cell: ({ row }) => (
        <img
          src={row.getValue("image") as string}
          alt={row.original.title}
          className="h-12 w-12 object-contain"
        />
      ),
    },
    { accessorKey: "title", header: sortableHeader("Name") },
    {
      accessorKey: "category",
      header: sortableHeader("Category"),
      cell: ({ row }) => (
        <span className="capitalize">{row.getValue("category") as string}</span>
      ),
    },
    {
      accessorKey: "price",
      header: sortableHeader("Price"),
      cell: ({ row }) => {
        const price = row.getValue("price") as number;
        return <span className="font-medium">${price.toFixed(2)}</span>;
      },
    },
    {
      id: "actions",
      header: "",
      enableSorting: false,
      enableGlobalFilter: false,
      cell: ({ row }) => (
        <Button variant="outline" size="sm" onClick={() => onView(row.original)}>
          View
        </Button>
      ),
    },
  ];
}