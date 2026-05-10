# useTransition

## Idea

- Mark state updates as “non-urgent” so React keeps urgent interactions responsive.

## Why

- Some updates are expensive and can make typing/clicking feel laggy.
- React needs a way to prioritize immediate UI interactions over heavy rendering work.

## Key Points

- You manually wrap low-priority updates with startTransition
- Urgent updates still happen immediately
- Gives you isPending to track transition status

## Confusing

- It’s not for delaying API calls
- It doesn’t make code faster — it changes scheduling priority
- Usually requires splitting urgent vs non-urgent state

## Explanation

- Think of React as handling a queue of tasks.
- Typing into an input is urgent.
- Rendering a huge filtered list is less urgent.
- useTransition tells React: "Handle the typing first, then do the heavy update when possible."

```js
setInput(value); // urgent

startTransition(() => {
  setSearchQuery(value); // non-urgent
});
```

## Takeaway

- This update can wait — keep the UI responsive first
