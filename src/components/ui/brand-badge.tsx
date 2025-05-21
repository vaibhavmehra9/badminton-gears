import { RacquetBrand } from "@/constants/racquet";
import React from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

type BrandBadgeProps = {
  brand: RacquetBrand;
};

export const BrandBadge: React.FC<BrandBadgeProps> = ({ brand }) => {
  return (
    <Badge
      className={cn(
        brand === RacquetBrand.YONEX && "yonex-badge",
        brand === RacquetBrand.VICTOR && "victor-badge",
        brand === RacquetBrand.LINING && "lining-badge",
        "text-md border-0"
      )}
    >
      {brand}
    </Badge>
  );
};
