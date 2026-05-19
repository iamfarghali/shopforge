import type { CustomerId, OrderId, PaymentId } from './brand';
import type { Money } from './product';

export type Payment = {
  id: PaymentId;
  orderId: OrderId;
  customerId: CustomerId;
  method: PaymentMethod;
  status: PaymentStatus;
  amount: Money;
  paidAt: Date | null;
};

export type PaymentMethod =
  | { type: 'cod' }
  | { type: 'card'; last4: string; cardName: string; token: string }
  | { type: 'wallet'; walletName: string; token: string };

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
