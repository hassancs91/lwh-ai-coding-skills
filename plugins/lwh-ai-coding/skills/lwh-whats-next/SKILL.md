---
name: lwh-whats-next
description: Shows where a project stands in the plan, challenge, tasks, build, security flow and which command to run next. Use when the user has a new app idea or is unsure what to do next.
---

# What's next

Tell the user where their project is and the one command to run now. Read only the small state files; do not read code or task bodies.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it.

## Work out where the project is

Check in this order and stop at the first match:

| What you find | Where they are | Next command |
|---|---|---|
| `.work/STOP` exists | A stop was requested and the run is winding down | Nothing. It stops by itself at the next clean point |
| `.work/INDEX.md` with tasks not done | A run over the user's own task list is partway | `/lwh-run` |
| No `docs/plan.md`, no code | Starting from an idea | `/lwh-plan-app`, or `/lwh-guide` for a tour first |
| No `docs/plan.md`, but there is code | An existing app with no plan | `/lwh-plan-app` (it reads the code first) |
| Plan with status `draft` | Planned, not yet checked for holes | `/lwh-challenge-plan`, in a new session |
| Plan with status `challenged` | Plan is solid, not yet split into tasks | `/lwh-make-tasks` |
| Entries in `.work/BLOCKERS.md` | Something is waiting on them | Show the items first, then `/lwh-run` |
| Tasks with status `todo` | Ready to build, or partway through | `/lwh-run` |
| All tasks `done`, no `security` tasks | Built, not security tested | `/lwh-security-check` |
| `security` tasks all `done`, no `docs/security-report.md` | Security tasks finished | `/lwh-security-check` (writes the report) |
| Everything done and reported | Finished | `/lwh-plan-app`, to add the next feature |

## Tell the user

In five lines or fewer:

- where the project is, in plain words
- the next command and what it does
- progress, if tasks exist: how many are done out of how many, and the current milestone

If the user asks what the commands are, give one line each:

- **`/lwh-plan-app`:** a short interview that turns the idea into a written plan.
- **`/lwh-challenge-plan`:** looks for holes in the plan and fixes them before anything is built.
- **`/lwh-make-tasks`:** splits the plan into small tasks, each with its tests.
- **`/lwh-run`:** gets the tasks done and verified, as many at a time as the user chooses. Works on any task list.
- **`/lwh-stop`:** stops a run cleanly at the nearest safe point.
- **`/lwh-security-check`:** creates security tests, then reports what was tested and found.
- **`/lwh-guide`:** a short tour of these skills, and answers to questions about them.
