# AI · tools & output

### Tool use
- What: Let the model call your code.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### JSON mode
- What: Output your code can always parse.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### Structured output
- What: Check the shape, retry the misses.
- Applies when: the app's code uses an AI model's answer.
- Stage: day-one-if
- Kind: checkable
- Done when: AI output used by code is checked against a schema. A malformed answer is retried or refused, never passed on.

### Model selection
- What: Pick the tier, then pin it.
- Applies when: the app calls an AI model.
- Stage: day-one-if
- Kind: checkable
- Done when: The model name is pinned in one setting, not scattered through the code or left to a moving default.

### Non-determinism
- What: Same input, different words.
- Applies when: the app calls an AI model.
- Stage: day-one-if
- Kind: checkable
- Done when: Tests of AI features assert facts that must hold, never the exact wording.

### Multimodal input
- What: Send the picture, not a description.
- Applies when: the term comes up.
- Stage: any
- Kind: concept
