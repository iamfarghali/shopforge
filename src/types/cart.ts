import type { CartId, CartItemId, CustomerId, ProductId } from './brand';
import type { Money } from './product';

export type Cart = {
  id: CartId;
  customerId: CustomerId;
  items: CartItem[];
};

export type CartItem = {
  id: CartItemId;
  productId: ProductId;
  quantity: number;
  unitPrice: Money;
};
