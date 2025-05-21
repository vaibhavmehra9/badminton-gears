import { Country } from "@/constants/country";
import {
  PlayerCategory,
  RacquetBrand,
  RacquetModel,
} from "@/constants/racquet";

export type Player = {
  name: string;
  country: Country;
  brand: RacquetBrand;
  model: RacquetModel;
  category: PlayerCategory;
};
