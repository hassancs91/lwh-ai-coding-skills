# Get the details right

### Debugging with AI
- What: Reproduce before you fix.
- Applies when: every app.
- Stage: day-one
- Kind: practice

### Component library
- What: Don't hand-roll every button.
- Applies when: the app has screens.
- Stage: day-one-if
- Kind: checkable
- Done when: Buttons, inputs and dialogs come from one shared set of components, not restyled page by page.

### Guessable IDs
- What: Use UUIDs, not 1, 2, 3.
- Applies when: ids appear in links or in the API.
- Stage: day-one-if
- Kind: checkable
- Done when: Ids in links and API responses are not counting numbers. Changing an id by one finds nothing.

### Account recovery
- What: Forgot password, done right.
- Applies when: users log in with a password.
- Stage: day-one-if
- Kind: checkable
- Done when: A reset link works once and expires. The reset page gives the same answer whether or not the email has an account.

### Soft delete
- What: Deleted, but recoverable.
- Applies when: users can delete things that matter to them.
- Stage: day-one-if
- Kind: checkable
- Done when: A deleted item disappears for the user and can be restored for a set period.
