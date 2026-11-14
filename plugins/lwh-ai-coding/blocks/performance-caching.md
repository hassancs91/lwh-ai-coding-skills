# Performance · caching

### Caching
- What: Do the work once, reuse it.
- Applies when: the same costly work is repeated often.
- Stage: with-users
- Kind: checkable

### Cache invalidation
- What: Bust stale data on write.
- Applies when: the app caches data that changes.
- Stage: with-users
- Kind: checkable

### Negative caching
- What: Remember the misses too.
- Applies when: lookups that find nothing are repeated often.
- Stage: at-scale
- Kind: checkable

### Dynamic TTL
- What: A lifetime that fits each item.
- Applies when: cached items go stale at different speeds.
- Stage: at-scale
- Kind: checkable

### HTTP caching & ETags
- What: Skip re-sending what hasn't changed.
- Applies when: clients fetch the same responses repeatedly.
- Stage: at-scale
- Kind: checkable

### Semantic caching
- What: Cache by meaning, not exact words.
- Applies when: many users ask an AI model similar questions.
- Stage: at-scale
- Kind: checkable
