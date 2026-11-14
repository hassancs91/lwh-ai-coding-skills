# Security · abuse & privacy

### Signed device ID
- What: A tamper-proof tag, no account needed.
- Applies when: the app must recognise visitors who have no account.
- Stage: with-users
- Kind: checkable

### Honeypot
- What: Bait paths that log who's poking around.
- Applies when: the app is live and being probed.
- Stage: with-users
- Kind: checkable

### Audit trail
- What: A locked record of who did what, and when.
- Applies when: staff change other people's data, or money moves.
- Stage: with-users
- Kind: checkable

### Dependency scanning
- What: Catch a known hole in a package before an attacker does.
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: A scan of the project's packages reports no known serious problems.

### Secret scanning
- What: A guard that catches a key before it ships.
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: A secret scan over the code and the full git history finds nothing.

### Data retention
- What: Keep personal data only as long as you need it.
- Applies when: the app keeps personal data over time.
- Stage: with-users
- Kind: checkable

### Consent management
- What: Track only after they said yes.
- Applies when: the app tracks visitors where consent is required.
- Stage: go-live
- Kind: checkable
