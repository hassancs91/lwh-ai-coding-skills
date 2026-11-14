# AI · reliability & quality

### Hallucinations
- What: Confident, fluent, and wrong.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### Output guardrails
- What: Check the output before it acts.
- Applies when: AI output triggers actions or is shown as fact.
- Stage: day-one-if
- Kind: checkable
- Done when: AI output is checked before it is acted on, and an answer outside the allowed bounds is blocked.

### Evals
- What: A test set for your prompts.
- Applies when: an AI feature is central to the app.
- Stage: day-one-if
- Kind: checkable
- Done when: Each prompt has a small set of example inputs with facts the answer must contain, run as a test.

### LLM-as-judge
- What: A model grades the output.
- Applies when: AI output quality must be graded at volume.
- Stage: with-users
- Kind: checkable

### A/B testing
- What: Let real traffic pick the prompt.
- Applies when: there is enough traffic to compare two versions.
- Stage: at-scale
- Kind: practice

### LLM tracing
- What: See inside the chain.
- Applies when: AI features run under real use.
- Stage: with-users
- Kind: checkable
