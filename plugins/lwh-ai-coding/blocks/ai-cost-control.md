# AI · cost control

### Budget caps
- What: A ceiling the bill can't pass.
- Applies when: the app calls a paid AI model.
- Stage: day-one-if
- Kind: checkable
- Done when: A usage limit per user, and one overall, stops AI calls when reached and shows a clear message.

### Batch API
- What: Half price when nobody's waiting.
- Applies when: large AI jobs can wait for their results.
- Stage: with-users
- Kind: checkable

### Model routing
- What: Cheap first, escalate the hard ones.
- Applies when: AI costs have become significant.
- Stage: with-users
- Kind: checkable

### Unified interface
- What: One layer in front, automatic failover.
- Applies when: the app uses more than one AI provider.
- Stage: with-users
- Kind: checkable
