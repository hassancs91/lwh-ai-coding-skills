# Don't ship bugs

### Environments
- What: dev, staging, production.
- Applies when: the app is going live.
- Stage: go-live
- Kind: checkable

### Store times in UTC
- What: One clock for the whole app.
- Applies when: the app stores dates or times.
- Stage: day-one-if
- Kind: checkable
- Done when: Times are stored in UTC and shown in the user's time zone. A test with two time zones agrees.
