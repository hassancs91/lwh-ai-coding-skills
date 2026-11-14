# Security · web vulns

### Input validation
- What: Check every request against a schema first.
- Applies when: the app accepts input from users or other systems.
- Stage: day-one-if
- Kind: checkable
- Done when: Every input is checked on the server for type, size and allowed values. Bad input gets a clear error and is never saved.

### XSS
- What: Cross-site scripting: stop user-typed text from running as code in someone else's browser.
- Applies when: a web app shows text that users typed.
- Stage: day-one-if
- Kind: checkable
- Done when: Text containing a script tag, saved by one user, shows as plain text to another user and does not run.

### CSRF
- What: Cross-site request forgery: stop another site from acting through a logged-in user's browser.
- Applies when: a web app keeps users logged in with cookies.
- Stage: day-one-if
- Kind: checkable
- Done when: A request that changes something, sent from another site without the app's token, is refused.

### CORS
- What: Cross-origin resource sharing: decide which other sites may call your API from a browser.
- Applies when: a browser frontend calls an API at a different address.
- Stage: day-one-if
- Kind: checkable
- Done when: The API allows only the app's own frontend addresses, and never every site together with logins.

### SSRF
- What: Server-side request forgery: stop users from making your server fetch internal addresses.
- Applies when: the server fetches addresses that users supply.
- Stage: day-one-if
- Kind: checkable
- Done when: A user-supplied address that points at this machine, a private network or a cloud metadata address is refused.

### SQL injection
- What: Never glue user input into a database query.
- Applies when: the app uses a SQL database.
- Stage: day-one-if
- Kind: checkable
- Done when: Every query passes user input as parameters. Input containing quotes and SQL words is treated as plain text.

### Content Security Policy
- What: An allowlist the browser enforces on every script.
- Applies when: a web app is going live.
- Stage: go-live
- Kind: checkable

### Safe user HTML
- What: Clean it, then box it in.
- Applies when: users can post formatted text or HTML.
- Stage: day-one-if
- Kind: checkable
- Done when: User HTML is cleaned to an allowlist of tags before it is shown. Scripts and event handlers are stripped.

### Path & upload safety
- What: Keep file access inside the box.
- Applies when: users upload files, or a file path comes from user input.
- Stage: day-one-if
- Kind: checkable
- Done when: Uploads are limited by type and size and stored under a generated name outside the code folder. A file name containing ../ cannot escape the upload folder.

### Open redirect
- What: Don't let your link bounce people anywhere.
- Applies when: the app redirects to an address taken from a link, such as after login.
- Stage: day-one-if
- Kind: checkable
- Done when: A redirect target outside the app's own addresses is ignored.
