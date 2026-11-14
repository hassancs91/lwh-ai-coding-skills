# Ship it & go live

### Testing
- What: Catch the break before your users do.
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: Every feature has tests for the normal case and at least one failure case, and the check command runs them all.

### Playwright
- What: Test your app like a real user.
- Applies when: the app has screens.
- Stage: day-one-if
- Kind: checkable
- Done when: The main user journeys run as automated tests that click through the real app.

### CI/CD
- What: Run the checks automatically on every change, and release automatically when they pass.
- Applies when: the app is going live.
- Stage: go-live
- Kind: checkable

### Domain & DNS
- What: The name, pointed at your server.
- Applies when: the app is going live on the internet.
- Stage: go-live
- Kind: checkable
