# Debounce

## Idea

- Wait until the user stops triggering an action, then run it once.

## Why

- Prevents too many repeated actions.
- Reduces unnecessary work and requests.

## Key Points

- Uses a timer
- New actions reset the timer
- Only the final action runs

## Confusing

- Why clearing the timer (cleanup) matters

## Explanation

- You’re searching on Google
- You type: “p”, “ph”, “pho”, “phone”
- The app waits instead of searching every time
- When you stop typing, it finally searches “phone”
- Only one request is sent

## Takeaway

- Run code only after activity stops, not during it
