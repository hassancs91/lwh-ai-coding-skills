# Security · data

### TLS
- What: The padlock behind HTTPS.
- Applies when: the app is going live on the internet.
- Stage: go-live
- Kind: checkable

### Encryption at rest
- What: If the database leaks, they get gibberish.
- Applies when: the app stores highly sensitive data.
- Stage: with-users
- Kind: checkable

### Secure cookies
- What: Three flags that shut three doors.
- Applies when: a web app keeps users logged in with cookies.
- Stage: day-one-if
- Kind: checkable
- Done when: The login cookie is set with HttpOnly, Secure and SameSite.

### PII minimization
- What: You can't leak what you never collected.
- Applies when: the app collects personal data.
- Stage: day-one-if
- Kind: checkable
- Done when: Every personal field the app collects is used by a feature in the plan. Nothing is collected just in case.

### Security headers
- What: A wall on every response you send.
- Applies when: a web app is going live.
- Stage: go-live
- Kind: checkable

### Trusted client IP
- What: Read the real visitor, not a faked one.
- Applies when: the app sits behind a proxy and uses the visitor's address.
- Stage: go-live
- Kind: checkable
