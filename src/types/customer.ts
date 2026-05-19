import type { CustomerId, AddressId } from './brand';

export type Customer = {
  id: CustomerId;
  name: string;
  email: string;
  phone?: string;
  defaultAddressId: AddressId | null;
  preferredPaymentType: 'cod' | 'card' | 'wallet';
};
