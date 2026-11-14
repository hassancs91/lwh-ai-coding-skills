# Performance · concurrency

### Async I/O
- What: One worker, many waits at once.
- Applies when: one worker must handle many waits at once.
- Stage: at-scale
- Kind: checkable

### Bounded fan-out
- What: Run in parallel, but capped.
- Applies when: the app runs many outside calls in parallel.
- Stage: with-users
- Kind: checkable

### Debounce & throttle
- What: Turn a burst into one call.
- Applies when: the screen fires rapid triggers, such as search while typing.
- Stage: day-one-if
- Kind: checkable
- Done when: Typing quickly in a live search sends one request after the pause, not one per key.

### Pre-aggregation
- What: Count in place, roll up later.
- Applies when: counts and totals are slow to compute live.
- Stage: at-scale
- Kind: checkable

### Load leveling
- What: Absorb spikes, drain evenly.
- Applies when: work arrives in spikes.
- Stage: at-scale
- Kind: checkable
