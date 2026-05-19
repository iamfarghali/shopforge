import type { AsyncState } from './async';
import type { ProductId } from './brand';

export type ProductCategory = 'phone' | 'clothing' | 'book';
export type Money = {
  amount: number;
  currency: 'EGP' | 'USD';
};

export interface BaseProduct {
  id: ProductId;
  title: string;
  description: string;
  price: Money;
  category: ProductCategory;
  image: string;
}
export interface PhoneProduct extends BaseProduct {
  category: 'phone';
  brand: string;
  storage: number;
  ram: number;
}

export interface ClothingProduct extends BaseProduct {
  category: 'clothing';
  size: 'S' | 'M' | 'L' | 'XL';
  material: string;
}

export interface BookProduct extends BaseProduct {
  category: 'book';
  author: string;
  pages: number;
}

export type Product = PhoneProduct | ClothingProduct | BookProduct;

export type AsyncProducts = AsyncState<Product[]>;
