import { Image } from "sanity";

export interface SanityProducts {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  productcare: Array<string>;
  slug: {
    current: string;
  };
  image: Array<Image>;
  subcat: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  totalPrice: number;
  subcat: string;
  image: Array<Image>;
  userId: string;
  quantity: number;
}