import { RacquetBrand } from "@/constants/racquet";
import React from "react";
import { Badge } from "./badge";

type BrandBadgeProps = {
  brand: RacquetBrand;
};

export const BrandBadge: React.FC<BrandBadgeProps> = ({ brand }) => {
  return <Badge>{brand}</Badge>;
};
