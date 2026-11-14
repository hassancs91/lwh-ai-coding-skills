# Don't fall over

### Timeouts
- What: Don't wait forever on a dead call.
- Applies when: the app calls outside services.
- Stage: day-one-if
- Kind: checkable
- Done when: Every outside call has a time limit. With a service that hangs, the app gives up and tells the user.

### Retry
- What: With backoff: wait longer each time.
- Applies when: the app calls outside services.
- Stage: day-one-if
- Kind: checkable
- Done when: A call that fails briefly is retried a few times with growing waits, then gives up with a clear error. Errors that can never succeed are not retried.

### Circuit breaker
- What: Stop calling a dead service.
- Applies when: an outside service fails often under real use.
- Stage: with-users
- Kind: checkable

### Error handling
- What: Decide what happens when things break.
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: A failure shows the user a plain message and is logged with detail. No raw error or stack trace reaches the screen.

### Idempotency
- What: Run it twice, and nothing doubles.
- Applies when: an action must never happen twice, such as a payment, an order or an email.
- Stage: day-one-if
- Kind: checkable
- Done when: The same request sent twice, by a double click or a retry, has the effect of one.

### Fallback
- What: A safe default when a part fails.
- Applies when: a feature should keep working when one part fails.
- Stage: with-users
- Kind: checkable

### Graceful degradation
- What: Fail open or fail closed, on purpose.
- Applies when: a feature should keep working when one part fails.
- Stage: with-users
- Kind: checkable

### Free-first cascade
- What: Cheapest source first, pay only for the leftovers.
- Applies when: the app pays per call for data it could often get free.
- Stage: with-users
- Kind: checkable

### Concurrency gate
- What: Cap the crowd, return a retryable "busy".
- Applies when: heavy requests arrive faster than the app can serve them.
- Stage: at-scale
- Kind: checkable

### Single-flight
- What: One fetch for a stampede of identical requests.
- Applies when: many identical requests arrive at once.
- Stage: at-scale
- Kind: checkable

### Per-host pacing
- What: Throttle each upstream to its own limit.
- Applies when: the app calls rate-limited outside services heavily.
- Stage: with-users
- Kind: checkable

### Quota ledger
- What: One shared tally for a shared key.
- Applies when: several workers share one limited key.
- Stage: at-scale
- Kind: checkable

### Load shedding
- What: Drop the low-priority stuff to stay up.
- Applies when: traffic can exceed capacity.
- Stage: at-scale
- Kind: checkable

### Degrade under quota
- What: Drop to a lighter mode, don't just die.
- Applies when: the app can run out of a paid quota.
- Stage: with-users
- Kind: checkable

### Rate limiting
- What: Cap requests per caller.
- Applies when: the app is going live with public or costly endpoints.
- Stage: go-live
- Kind: checkable
