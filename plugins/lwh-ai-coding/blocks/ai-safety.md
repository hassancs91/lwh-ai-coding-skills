# AI · safety

### Prompt injection
- What: Untrusted text that gives orders.
- Applies when: an AI model reads content its user did not write, or can take actions.
- Stage: day-one-if
- Kind: checkable
- Done when: Text planted in content the AI reads, telling it to ignore its rules, does not change what the app does or reveal private data.

### Jailbreak resistance
- What: When users try to break the rules.
- Applies when: the public can chat with the app's AI.
- Stage: with-users
- Kind: checkable

### Content moderation
- What: Filter what goes in and out.
- Applies when: the public can post content or see AI output.
- Stage: with-users
- Kind: checkable

### PII redaction
- What: Strip the personal bits first.
- Applies when: personal data is sent to an AI model.
- Stage: day-one-if
- Kind: checkable
- Done when: Personal details the model does not need are removed before the text is sent.
