# Stale Closure

## Idea

- Async code can use old values from a previous render.

## Why

- Closures keep the values they had when they were created.

## Key Points

- Each render creates new closures
- Old async functions keep old values
- Old callbacks can still update current UI

## Confusing

- How closures store values
- Why old values still exist after re-render

## Explanation

- You create a counter with a button
- Inside it, you use setTimeout to delay the update
- The timeout remembers count = 0
- You click multiple times quickly
- After delay, all callbacks run with 0 + 1
- Final result becomes 1 instead of 3
- You expected: 1 → 2 → 3
- But all updates used the same old value
- So they overwrite each other

```js
// Bug
export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1); // ❌ uses stale value
    }, 1000);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Add +1 (delayed)</button>
    </div>
  );
}

// Fix
export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount(prev => prev + 1); // ✅ always latest value
    }, 1000);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Add +1 (delayed)</button>
    </div>
  );
}
```

## Takeaway

- A stale closure = using stored old data
- The fix = always read the latest value at the time of use
