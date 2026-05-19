export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | {
      status: 'error';
      error: {
        message: string;
        code: string;
      };
    };
