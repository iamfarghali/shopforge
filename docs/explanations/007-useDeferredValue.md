# useDeferredValue

## Idea

- Create a delayed version of a rapidly changing value.

## Why

- Sometimes rendering based on a fast-changing value is expensive.
- You want the UI input to stay instant while expensive parts lag slightly behind.

## Key Points

- Defers values, not updates
- No split state required
- Useful when consuming expensive props or derived data

## Confusing

- It does NOT debounce
- The deferred value still eventually updates
- There’s no isPending

## Explanation

- The original value updates immediately.
- React keeps using the old deferred value briefly.
- Heavy components render using the deferred version instead of the live one.

```js
const deferredQuery = useDeferredValue(query);

<SearchResults query={deferredQuery} />;
```

## Takeaway

- This value can lag behind a little to keep rendering smooth
