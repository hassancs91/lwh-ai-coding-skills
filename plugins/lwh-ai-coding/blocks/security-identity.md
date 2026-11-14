# Security · identity

### Authentication
- What: Proving who you are.
- Applies when: the app has logins.
- Stage: day-one-if
- Kind: checkable
- Done when: Pages and actions for logged-in users refuse a visitor who is not logged in, including direct requests that skip the screen.

### Sessions vs JWT
- What: Two ways to remember who's logged in.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### OAuth 2.1
- What: Log in with Google, no password shared.
- Applies when: users log in with Google or another provider.
- Stage: day-one-if
- Kind: checkable
- Done when: Login through the provider works end to end, and the app never sees or stores the provider password.

### Magic links
- What: Log in with an email link, no password.
- Applies when: users log in with an email link.
- Stage: day-one-if
- Kind: checkable
- Done when: A login link works once and expires after a short time. A used or expired link shows a clear message.

### Multi-factor auth
- What: A second proof, so a stolen password isn't enough.
- Applies when: accounts guard money or sensitive data.
- Stage: with-users
- Kind: checkable

### API keys
- What: Show it once, store only a hash.
- Applies when: the app gives keys to its users or to other programs.
- Stage: day-one-if
- Kind: checkable
- Done when: A new key is shown once and only its hash is stored. A revoked key stops working at once.

### Unified principal
- What: One identity object for every caller.
- Applies when: callers arrive in more than one way, such as a login and an API key.
- Stage: with-users
- Kind: checkable

### CAPTCHA / Turnstile
- What: Let humans in, stop the bots.
- Applies when: public forms attract bots.
- Stage: with-users
- Kind: checkable

### Hashing
- What: Store a one-way fingerprint of a password, never the password.
- Applies when: the app stores passwords.
- Stage: day-one-if
- Kind: checkable
- Done when: Passwords are stored only as salted hashes made by a password-hashing function. No password appears in the database, logs or error messages.

### Brute force
- What: Lock out repeated password guessing.
- Applies when: users log in with a password.
- Stage: day-one-if
- Kind: checkable
- Done when: Repeated wrong passwords for one account, or from one source, are slowed down or locked out.
