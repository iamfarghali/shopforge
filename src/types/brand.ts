export type Brand<T extends string> = string & {
  readonly __brand: T;
};

export type ProductId = Brand<'ProductId'>;
export type CustomerId = Brand<'CustomerId'>;
export type CartId = Brand<'CartId'>;
export type CartItemId = Brand<'CartItemId'>;
export type OrderId = Brand<'OrderId'>;
export type OrderItemId = Brand<'OrderItemId'>;
export type PaymentId = Brand<'PaymentId'>;
export type AddressId = Brand<'AddressId'>;
