import type {
  AddressId,
  CustomerId,
  OrderId,
  OrderItemId,
  PaymentId,
  ProductId,
} from './brand';

import type { Money } from './product';

export type Order = {
  id: OrderId;
  customerId: CustomerId;
  paymentId: PaymentId | null;
  shippingAddressId: AddressId;

  items: OrderItem[];
  status: OrderStatus;

  subtotal: Money;
  shippingFee: Money;
  total: Money;

  createdAt: Date;
};

export type OrderItem = {
  id: OrderItemId;
  productId: ProductId;
  quantity: number;
  unitPrice: Money;
};

export type OrderStatus =
  | 'pending'
  | 'accepted'
  | 'preparing'
  | 'shipping'
  | 'delivered'
  | 'returned'
  | 'lost'
  | 'canceled';
