# Security · access

### Authorization
- What: What you're allowed to do.
- Applies when: the app has logins.
- Stage: day-one-if
- Kind: checkable
- Done when: Every action checks on the server that this user may do it. Hiding a button does not count as the check.

### Owner-only access
- What: Scope every query to its owner.
- Applies when: users have their own private data.
- Stage: day-one-if
- Kind: checkable
- Done when: A logged-in user who asks for another user's item by its id is refused, for reading, changing and deleting.

### Role-based access
- What: Bundle permissions into roles, not scattered flags.
- Applies when: the app has more than one kind of user, such as admin and member.
- Stage: day-one-if
- Kind: checkable
- Done when: Each role can do exactly its allowed actions. A test tries each forbidden action as each role.
