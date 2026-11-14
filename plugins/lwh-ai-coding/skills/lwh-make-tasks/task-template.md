# Task formats and rules

## The index: `docs/tasks/index.md`

One line per task. Status lives only here.

```markdown
| ID  | Title                  | Milestone | Type  | Depends on | Status |
|-----|------------------------|-----------|-------|------------|--------|
| T00 | Set up the project     | M0        | build | none       | todo   |
| T01 | Visitors can sign up   | M1        | build | T00        | todo   |
```

- **Type:** `build`, `you`, `review` or `security`.
- **Status:** `todo`, `in-progress`, `done` or `blocked`.
- Ids never change once written. New tasks take the next free number.

Above the table, list the milestones with one line each: what the user can try when it is finished.

## One task: `docs/tasks/T07-reset-password.md`

```markdown
# T07: Users can reset their password

Milestone: M2 · Type: build · Depends on: T05

## What to build
What works when this is done, from the user's side. Not a list of files or layers.

## Blocks
Account recovery, Brute force

## Done when
- [ ] A user who asks for a reset gets an email with a link that works once
- [ ] An expired or reused link shows a clear message
- [ ] (Brute force) Repeated reset requests for one address are slowed down

## How to test
- Code tests: what to cover
- App test: the steps to drive in the real app (for a web app, in a browser at desktop and phone width)
- By hand at the milestone: anything only a person can judge

## Needs from you
None, or the exact item the user must provide.
```

Rules for writing a task:

- Write "What to build" as behaviour the user would notice. Leave out file names and code; they go out of date as soon as the build starts.
- Every "Done when" box must be something a test can prove. "Works well" is not a check. "A wrong password shows an error and does not log in" is.
- Cover the unhappy path in the boxes, not only the case where everything goes right.
- A box that comes from a block starts with the block's name in brackets.

## T00: set up the project

T00 always has these boxes, whatever the stack. Add stack-specific ones if the plan needs them.

```markdown
## Done when
- [ ] Git is set up, with a .gitignore that covers secrets, dependencies and .work/
- [ ] Secrets are read from the environment, with an example file that holds no real values
- [ ] Code is organised in modules with clear separation, as the plan describes
- [ ] One check command runs lint, types and all tests, and it passes
- [ ] One code test and one test that drives the real app both pass
- [ ] CLAUDE.md names the check command and links to docs/plan.md
```

If the project already exists, T00 fills in only what is missing from this list.

## A `you` task

```markdown
# T03: Create a payments test account

Milestone: M2 · Type: you

## What you need to do
Numbered steps a beginner can follow, one action per step.

## What to give back
Exactly what is needed and where it goes, for example which key into which line of the env file. Never paste a secret into a task file or a chat message.
```

## A `review` task

```markdown
# T12: Review logins and private data

Milestone: M2 · Type: review · Depends on: T08, T09, T10, T11

## What to review
The area, and what to try to break.

## Blocks to check
- <Block name>: <its check, copied from the blocks index>
- ...
```

The reviewer writes each finding as a failing test and a new task. It does not fix anything itself.
