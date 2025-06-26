export const BRANDS = [
  "ariston",
  "artel",
  "biryusa",
  "edison",
  "flama",
  "indesit",
  "orion",
  "redmond",
  "shivaki",
  "thermex",
] as const;

export type BrandId = (typeof BRANDS)[number];

export interface Brand {
  id: BrandId;
  name: string;
  imagePath: string;
}
