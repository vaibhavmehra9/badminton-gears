import { FilterInput } from "@/components/ui/filter-input";
import { Player } from "@/types/player";
import { Table } from "@tanstack/react-table";
import React from "react";

interface FiltersProps<TData> {
  table: Table<TData>;
}

export const Filters: React.FC<FiltersProps<Player>> = ({ table }) => {
  return (
    <div
      className="grid md:auto-cols-[300px]
  md:grid-flow-col items-center p-4  gap-4"
    >
      <FilterInput
        placeholder="Search by Name"
        table={table}
        filterKey="name"
      />

      <FilterInput
        placeholder="Search by Country"
        table={table}
        filterKey="country"
      />
    </div>
  );
};
