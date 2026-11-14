# Features users expect

### File uploads
- What: Take files without taking risks.
- Applies when: users upload files.
- Stage: day-one-if
- Kind: checkable
- Done when: A valid file uploads and can be opened again. A file that is too large or of the wrong type is refused with a clear message.

### Full-text search
- What: Let users search your content.
- Applies when: users search the app's content.
- Stage: day-one-if
- Kind: checkable
- Done when: Search finds items by words in their text, handles no results, and returns only what this user may see.

### Realtime updates
- What: Changes appear without refresh.
- Applies when: changes must appear without a refresh.
- Stage: day-one-if
- Kind: checkable
- Done when: A change made in one window appears in another within seconds without a refresh, and the connection recovers after it drops.

### Scheduled jobs
- What: Run work on a clock.
- Applies when: some work runs on a clock.
- Stage: day-one-if
- Kind: checkable
- Done when: The job runs on schedule, a repeated or overlapping run does no double work, and a failure is logged.

### Admin panel
- What: A back office for your data.
- Applies when: someone must manage the app's data.
- Stage: day-one-if
- Kind: checkable
- Done when: Only admins can open the admin area. A normal user is refused on every admin page and action.
