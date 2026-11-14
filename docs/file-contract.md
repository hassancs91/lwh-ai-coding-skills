# File contract

Status: draft for review. Every skill name starts with `lwh-`.

The skills never rely on an earlier conversation. Each one reads files, does its job, writes files, and ends by telling the user which command comes next. This page defines those files. If a skill and this page disagree, this page wins.

## The flow

| Step | Working name | Reads | Writes |
|---|---|---|---|
| 1 | lwh-plan-app | the user's answers, existing code if any | `docs/plan.md` |
| 2 | lwh-challenge-plan | `docs/plan.md`, blocks index | `docs/plan.md` (updated) |
| 3 | lwh-make-tasks | `docs/plan.md`, blocks index | `docs/tasks/` |
| 4 | lwh-run | the task index, `.work/` | the work, commits, `.work/` |
| 5 | lwh-security-check | code, `docs/plan.md`, blocks index | `security` tasks in `docs/tasks/`, then `docs/security-report.md` |
| during a run | lwh-stop | `.work/` | `.work/STOP` |
| any time | lwh-whats-next (router) | plan status, task index, `.work/` | nothing |
| any time | lwh-guide | the other skills' files | nothing |

Every skill except the router has `disable-model-invocation: true`, so it adds nothing to Claude's context until the user runs it. The router stays visible so Claude can point a beginner to the right command.

`lwh-run` is not tied to the rest of the flow. It runs any task list, including one the user wrote and tasks that are not about code. When the tasks did not come from `lwh-make-tasks`, it builds its own index at `.work/INDEX.md` and leaves the user's task files in their own format.

The plan and challenge skills run in the main session, because they ask the user questions and workers cannot. The challenge runs in a fresh session so it judges the written plan, not the conversation that produced it.

## Files in the user's project

```
docs/
  plan.md            the plan (committed)
  tasks/
    index.md         one line per task: the only place status lives
    T00-setup.md     one file per task
    T01-...md
.work/               run state (gitignored)
  RUN.md             the user's pre-flight answers for this run
  HANDOFF.md         overwritten by each worker
  LOG.md             one line per worker
  DECISIONS.md       one line per judgment call
  BLOCKERS.md        things only the user can resolve
  REPORT.md          written at each pause and at the end
  INDEX.md           the task index, only when the tasks are not in docs/tasks/
  STOP               a stop request: "after-task" or "now"; deleted once the run has stopped
CLAUDE.md            names the check command and links to docs/plan.md
```

## `docs/plan.md`

Frontmatter:

```yaml
status: draft | challenged | tasked
app_type: web, mobile, desktop, or anything else (free text)
stack: whatever the plan chose (free text)
```

The skills work with any stack. Plan recommends one that fits the app and the user, explains why in one line, and the user can choose something else.

Sections, in this order. Every section is short and in plain language.

1. **What we're building.** Two or three sentences, in the user's own words.
2. **Who it's for.**
3. **First version.** Two lists: in, and not yet.
4. **What people can do.** The screens, and the actions on each.
5. **What the app remembers.** The data, described as things and how they relate. No schema.
6. **Stack.** The choice and one line on why.
7. **Blocks this app needs.** A table: block, why this app needs it, stage.
8. **Technical decisions.** Each technical choice with a one-line reason, and whether the user chose it or left it to Claude.
9. **Things only you can do.** Accounts to open, keys to get, purchases.
10. **How we'll know it works.** Which kinds of testing apply: code tests, browser tests, phone width, and so on.
11. **Challenge notes.** What the challenge changed and why. Empty until challenged.
12. **Open questions.** Must be empty before tasks are written.

## Tasks

### `docs/tasks/index.md`

```
| ID  | Title                          | Milestone | Type  | Depends on | Status |
|-----|--------------------------------|-----------|-------|------------|--------|
| T00 | Set up the project             | M0        | build | none       | done   |
| T01 | Visitors can sign up           | M1        | build | T00        | todo   |
```

- Status is one of `todo`, `in-progress`, `done`, `blocked`.
- Status lives only here. The orchestrator reads this file and never reads task bodies.
- New tasks from reviews are added as new files and new lines. Existing IDs never change.

### One task file

```markdown
# T07: Users can reset their password

Milestone: M2 · Type: build · Depends on: T05

## What to build
What works when this is done, from the user's side. Not a list of files or layers.

## Blocks
Account recovery, Magic links, Brute force

## Done when
- [ ] A user who asks for a reset gets an email with a link that works once
- [ ] An expired or reused link shows a clear message
- [ ] (Brute force) Repeated reset requests for one address are slowed down

## How to test
- Code tests: what to cover
- App test: the steps to drive in the real app (for a web app, in a browser at desktop and phone width)
- By hand at the milestone: anything only a person can judge

## Needs from you
None, or the exact item from "Things only you can do".
```

Rules:

- **Types:** `build` (a worker builds it), `you` (only the user can do it), `review` (a fresh worker inspects, with no access to earlier conclusions), `security`.
- **Self-contained:** each task carries the full text of its block checks, because the runner reads only the task.
- **Slices:** each build task delivers something that works end to end. No "all the database first" tasks.
- **Size:** small enough that a worker finishes it before its 30% handoff. If in doubt, split.
- **Done:** a task is done only when every box is ticked by a run of the tests, not by reading the code.
- **Milestones:** each ends with something the user can try, a full check run by the orchestrator, and a pause.
- **T00** always sets up the project. See "Project setup" below.
- All `you` tasks are collected before a run starts, so a run never stalls on them.

## The check command

Every project has one command that runs everything: lint, types, code tests, browser tests. T00 creates it and `CLAUDE.md` names it. The orchestrator runs it itself at each milestone and does not accept a worker's word for the result.

Tests use local data and test keys only. A run never pushes, deploys or touches a live service.

## `.work/` state files

| File | Rule |
|---|---|
| `RUN.md` | How far to go (one task, N tasks, next milestone, everything), when to pause, handoff threshold (default 30%), where the index is, the reference documents, how work is verified |
| `HANDOFF.md` | Overwritten each time: done, in progress, exact next steps, open problems, check command result |
| `LOG.md` | One line per worker: time, worker number, tasks, test result |
| `DECISIONS.md` | One line per decision: what, why |
| `BLOCKERS.md` | One entry per item that needs the user |
| `REPORT.md` | What exists now, how to try it, which blocks were used, what's next |

One line means one line. These files are read on every dispatch, so they must stay small.

## Blocks index (ships inside the plugin)

```
blocks/
  index.md        every block: name, applies when, stage
  <part>.md       one file per book part, with the full entries
```

Skills read `index.md` to pick blocks, then load only the part files they need.

One entry:

```markdown
### Brute force
- What: one plain sentence.
- Applies when: the app has logins.
- Stage: day-one-if
- Kind: checkable
- Done when: five wrong passwords in a row slow down or lock further tries.
```

- **Stage:** `day-one` (every app), `day-one-if` (from the start when the feature exists), `go-live` (before real users reach it), `with-users`, `at-scale`, `any` (a concept, explained when the term comes up).
- **Kind:** `checkable` (a test or a reviewer can prove it), `practice` (a way of working, such as Plan first), `concept` (something to understand, such as JSON; never put in a plan or turned into a check).
- **Done when** is written at behaviour level so it holds on every stack. Version 1 has it only for `day-one` and `day-one-if` blocks.
- The folder is generated, so never edit it by hand. `node scripts/build-blocks.mjs <path-to-book.html>` takes names, taglines and parts from the book and everything else from `scripts/blocks-meta.json`, which is written by hand. It reports any block in the book that has no entry yet.
- First use of a block in front of the user shows the one-liner.
- No links to the book, courses or website anywhere in the skills or their output.

## Project setup (T00)

The skills ship no starter and assume no stack. T00 sets the project up with the stack's own official tooling, and it is done when this list holds, whatever the stack:

- [ ] Git is set up, with a `.gitignore` that covers secrets, dependencies and `.work/`
- [ ] Secrets are read from the environment, with an example file that holds no real values
- [ ] Code is organised in modules with clear separation, as the plan describes
- [ ] The check command exists and passes
- [ ] One code test and one test that drives the real app both pass
- [ ] `CLAUDE.md` names the check command and links to `docs/plan.md`

These are the `day-one` blocks, written as checks.

If the user already has an app or a starter of their own, plan reads the code first, and T00 only fills in whatever on this list is missing.

## This repo

```
.claude-plugin/marketplace.json     one marketplace, several plugins
plugins/
  lwh-core/                         lwh-run and lwh-stop: usable with any task list, by any skill family
    .claude-plugin/plugin.json
    skills/<skill>/SKILL.md
    house-style.md                  copied from shared/
  lwh-ai-coding/                    the planning flow for apps; depends on lwh-core
    .claude-plugin/plugin.json
    skills/<skill>/SKILL.md
    blocks/                         generated by scripts/build-blocks.mjs
    house-style.md                  copied from shared/
shared/
  house-style.md                    how every skill talks to the user; the one place to edit it
scripts/
  build-blocks.mjs                  builds blocks/ from the book and blocks-meta.json
  sync-shared.mjs                   copies shared/ into every plugin
docs/
  file-contract.md                  this page
```

- **No version field** in any plugin.json, so every push reaches users as an update.
- **Each plugin is self-contained.** Once installed, a plugin cannot read another plugin's files. Anything two plugins need is kept in `shared/` and copied in by `sync-shared.mjs`.
- **Dependencies.** `lwh-ai-coding` lists `lwh-core` under `dependencies`, so installing it installs and enables `lwh-core` too. A new skill family does the same.
- **Tasks stand on their own.** `lwh-run` cannot read the blocks files, so every task carries the text of its block checks. The same rule lets it run task lists it has never seen.
