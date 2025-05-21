import React from "react";
import { Input } from "./input";
import { Table } from "@tanstack/react-table";
import { Player } from "@/types/player";

interface FilterInputProps<TData> {
  table: Table<TData>;
  placeholder?: string;
  filterKey: string;
}

export const FilterInput: React.FC<FilterInputProps<Player>> = ({
  placeholder,
  table,
  filterKey,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={(table.getColumn(filterKey)?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn(filterKey)?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
};
