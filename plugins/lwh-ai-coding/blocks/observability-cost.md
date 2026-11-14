# Observability · cost

### Sampled logging
- What: Keep the signal, drop the bulk.
- Applies when: logs have become too large.
- Stage: at-scale
- Kind: checkable

### Upstream call log
- What: Every paid API call, on the record.
- Applies when: the app calls paid outside services.
- Stage: with-users
- Kind: checkable

### Per-request cost
- What: Put a price on every request.
- Applies when: each request costs real money.
- Stage: with-users
- Kind: checkable

### Cost alerts
- What: Catch a runaway bill early.
- Applies when: the app is going live and uses pay-per-use services.
- Stage: go-live
- Kind: checkable
