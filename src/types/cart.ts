import type { CartId, CartItemId, ProductId } from './brand';
import type { Money } from './product';

export type Cart = {
  id: CartId;
  items: CartItem[];
};

export type CartItem = {
  id: CartItemId;
  productId: ProductId;
  quantity: number;
  unitPrice: Money;
};
