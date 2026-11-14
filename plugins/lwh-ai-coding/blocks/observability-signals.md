# Observability · signals

### Structured logs
- What: Logs you can actually search.
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: The app logs errors and key events with a time, a level and a message, and never logs a secret or a password.

### Error tracking
- What: Every crash in one place.
- Applies when: the app is going live.
- Stage: go-live
- Kind: checkable

### Metrics
- What: Numbers you can watch over time.
- Applies when: the app is live and its health must be watched.
- Stage: with-users
- Kind: checkable

### Request IDs
- What: One tag that ties it all together.
- Applies when: a problem must be followed across logs.
- Stage: with-users
- Kind: checkable

### New-error alerts
- What: Hear about a fresh break first.
- Applies when: the app is live.
- Stage: with-users
- Kind: checkable

### The four golden signals
- What: Four numbers that catch most trouble.
- Applies when: the app is live and its health must be watched.
- Stage: with-users
- Kind: practice
