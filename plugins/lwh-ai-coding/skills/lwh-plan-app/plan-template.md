# Plan template

Write `docs/plan.md` in exactly this shape. Keep every section short and in plain language. A new builder who reads only this file should be able to build the right app.

```markdown
---
status: draft
app_type: <web, mobile, desktop, or other>
stack: <the chosen stack>
---

# <App name>

## What we're building
Two or three sentences, in the user's own words.

## Who it's for

## First version
**In:**
- ...

**Not yet:**
- ...

## What people can do
One heading per screen, with the actions on it.

## What the app remembers
The things it stores and how they relate, in plain words. Say who can see and change each thing. No schema.

## Stack
The choice, and one line on why.

## Blocks this app needs
| Block | Why this app needs it | Stage |
|---|---|---|

**Before going live:** a short list of block names.

**Later, when the app has users:** a short list of block names.

## Technical decisions
- <choice>: <one-line reason> (chosen by the user, or left to Claude)

## Things only you can do
- [ ] <account to open, key to get, purchase to make>, and what exactly is needed from it

## How we'll know it works
The kinds of testing that apply, one line each.

## Challenge notes
Empty until the plan is challenged.

## Open questions
Must be empty before tasks are written.
```
