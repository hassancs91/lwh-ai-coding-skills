# How your app fits together

### Frontend & backend
- What: Two halves of your app.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### API
- What: How apps talk to each other.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### Webhooks
- What: They call you when it happens.
- Applies when: another service must tell the app when something happens, such as a payment.
- Stage: day-one-if
- Kind: checkable
- Done when: A webhook with a missing or wrong signature is refused, and the same webhook delivered twice has the effect of one.

### HTTP status codes
- What: How the web reports back.
- Applies when: the app has an API.
- Stage: day-one-if
- Kind: checkable
- Done when: Errors return the matching status code (not found, not allowed, bad input), never a success code with an error inside.

### Cookies
- What: How a site remembers your browser.
- Applies when: the term comes up.
- Stage: any
- Kind: concept
