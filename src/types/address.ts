import type { AddressId, CustomerId } from './brand';

export type Address = {
  id: AddressId;
  customerId: CustomerId;
  city: string;
  mainStreet: string;
  locationDescription: string;
  contactPhone: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
};
