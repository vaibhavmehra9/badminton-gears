import { Country } from "@/constants/country";
import {
  PlayerCategory,
  RacquetBrand,
  RacquetModel,
} from "@/constants/racquet";
import { Player } from "@/types/player";

export const Players: Player[] = [
  {
    name: "Viktor Axelsen",
    country: Country.DENMARK,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["100zz"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: "Anders Antonsen",
    country: Country.DENMARK,
    brand: RacquetBrand.VICTOR,
    model: RacquetModel["90kMetallic"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: "Lakshya Sen",
    country: Country.INDIA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["1000z"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: `SHI Yu Qi`,
    country: Country.CHINA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["100zz"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: `Li Shi Feng`,
    country: Country.CHINA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["100zz"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: `Kunlavut VITIDSARN`,
    country: Country.THAILAND,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["88dpro"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: `CHOU Tien Chen`,
    country: Country.CHINESE_TAIPEI,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["88dpro"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: `Alex Lanier`,
    country: Country.FRANCE,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["991stgen"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: `Jonatan CHRISTIE`,
    country: Country.INDONESIA,
    brand: RacquetBrand.VICTOR,
    model: RacquetModel["Ryuga2Pro"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: `LOH Kean Yew`,
    country: Country.SINGAPORE,
    brand: RacquetBrand.LINING,
    model: RacquetModel["Axforce90"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: `LEE Zii Jia`,
    country: Country.MALAYSIA,
    brand: RacquetBrand.VICTOR,
    model: RacquetModel["RyugaMettalic"],
    category: PlayerCategory.MEN_SINGLES,
  },

  {
    name: `WENG Hong Yang`,
    country: Country.CHINA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["1000z"],
    category: PlayerCategory.MEN_SINGLES,
  },

  // MENDoubles

  {
    name: `Aaron Chia Teng Fong`,
    country: Country.MALAYSIA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["11pro"],
    category: PlayerCategory.MEN_DOUBLES,
  },

  {
    name: `Soh Wooi Yik`,
    country: Country.MALAYSIA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["88dpro"],
    category: PlayerCategory.MEN_DOUBLES,
  },

  {
    name: `Satwiksai Raj Rankireddy`,
    country: Country.INDIA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["Z-Strike"],
    category: PlayerCategory.MEN_DOUBLES,
  },

  // women singles

  {
    name: `AN Se Young`,
    country: Country.SOUTH_KOREA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["77pro"],
    category: PlayerCategory.WOMEN_SINGLES,
  },

  {
    name: `CHEN Yu Fei`,
    country: Country.CHINA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["77pro"],
    category: PlayerCategory.WOMEN_SINGLES,
  },

  {
    name: `Carolina MARIN`,
    country: Country.SPAIN,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["1000z"],
    category: PlayerCategory.WOMEN_SINGLES,
  },

  {
    name: `Akane Yamaguchi`,
    country: Country.JAPAN,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["100zz"],
    category: PlayerCategory.WOMEN_SINGLES,
  },

  {
    name: `HAN Yue`,
    country: Country.CHINA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["771stgen"],
    category: PlayerCategory.WOMEN_SINGLES,
  },

  {
    name: `Tomoka MIYAZAKI`,
    country: Country.JAPAN,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["800pro"],
    category: PlayerCategory.WOMEN_SINGLES,
  },

  {
    name: `PV Sindhu`,
    country: Country.INDIA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["100zz"],
    category: PlayerCategory.WOMEN_SINGLES,
  },

  {
    name: `Ratchanok INTANON`,
    country: Country.THAILAND,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["800pro"],
    category: PlayerCategory.WOMEN_SINGLES,
  },

  {
    name: `GAO Fang Jie`,
    country: Country.CHINA,
    brand: RacquetBrand.YONEX,
    model: RacquetModel["100zz"],
    category: PlayerCategory.WOMEN_SINGLES,
  },
];
