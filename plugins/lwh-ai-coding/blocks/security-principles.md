# Security · principles

### Threat modeling
- What: Map the attack before you build it.
- Applies when: the app has logins, money or private data.
- Stage: day-one-if
- Kind: practice

### Least privilege
- What: If it leaks, how much can it touch?
- Applies when: the app uses keys, database users or service accounts.
- Stage: day-one-if
- Kind: checkable
- Done when: Each key and database user can do only what the app needs. No admin or root key is used while the app runs.

### Secure defaults
- What: What happens when you forget a setting?
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: With a setting missing, the app takes the safe path: debug mode off, new things private, access refused.

### Secret rotation
- What: A stolen key that dies on schedule.
- Applies when: the app is live and uses long-lived keys.
- Stage: with-users
- Kind: checkable
