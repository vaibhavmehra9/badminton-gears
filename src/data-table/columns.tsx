"use client";

import { BrandBadge } from "@/components/ui/brand-badge";
import { DataTableColumnHeader } from "@/components/ui/column-header";
import { Player } from "@/types/player";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export const Columns: ColumnDef<Player>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    accessorKey: "brand",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Racquet Brand" />
    ),
    cell: ({
      row: {
        original: { brand },
      },
    }) => {
      return <BrandBadge brand={brand} />;
    },
  },
  {
    accessorKey: "model",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Racquet Model" />
    ),
  },
];
