---
name: lwh-make-tasks
description: Split the written plan into small tasks, each with exactly what to build and how it gets tested, grouped into milestones.
disable-model-invocation: true
---

# Make the tasks

Turn `docs/plan.md` into the task files in `docs/tasks/`. The build follows these tasks exactly, so each one must say what to build and how to prove it works. You do not write code in this skill.

The project folder is `${CLAUDE_PROJECT_DIR}`. Read and write only inside it.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it in every message.

## Before you start

- Read `docs/plan.md`. If there is no plan, name `/lwh-plan-app` and stop.
- If the plan's status is `draft`, tell the user it was never challenged, or was changed since, and recommend `/lwh-challenge-plan` first. Continue only if they choose to.
- If "Open questions" is not empty, ask those questions now and update the plan.
- Read `${CLAUDE_PLUGIN_ROOT}/blocks/index.md`, then only the part files that hold the plan's blocks and the `setup` blocks. You need each block's "Done when" check, its proof and its scope.
- If the folder already has code, send a subagent to survey it and report in 30 lines or fewer what already exists, so you do not write tasks for finished work.
- If `docs/tasks/` already has tasks, you are adding to them. Keep every existing id and continue the numbering.

## Draft the breakdown

Read [task-template.md](task-template.md) for the formats and the rules. In short:

- **Milestones.** Group tasks into milestones. Each milestone ends with something the user can open and try.
- **T00** sets up the project. Its boxes are the "Done when" checks of every `setup` block that applies, copied as they are. For an app that already exists, see "T00 for an existing app" in the template.
- **Slices.** Each build task delivers one thing that works end to end, from the screen down to the stored data. Never a task like "build all the database tables".
- **Small.** Keep each task to one slice the user can understand, with a handful of boxes and about one commit's worth of change. Small tasks are easier to verify and review, a failure costs less, and the index shows real progress. A task may take several workers, who hand off to each other: that is normal, not a reason to split.
- **Order.** Give each task the tasks it depends on. Put the riskiest or least certain work early, when changing course is cheap.
- **Blocks become checks, by proof:**
  - `test`: the check becomes a box in each task that builds the block's feature. Copy its text. A task must stand on its own, because whoever runs it reads only the task, not the blocks files.
  - `review`: the check goes into the milestone's review task, under "Blocks to check". The worker who builds the code never ticks it.
  - `scan`: leave it out of the tasks. `/lwh-security-check` runs the scans.
  - `practice` and `concept` blocks never become boxes.
- **Cross-cutting blocks become project rules.** Blocks with scope `cross-cutting` that apply to this app are not copied into single tasks. Write their checks, one line each, into a section "Rules every change follows" in `CLAUDE.md`, which every worker reads first. Create `CLAUDE.md` with just that section and a link to `docs/plan.md` if it does not exist yet; T00 adds the check command. Keep the list to the blocks this app needs.
- **`you` tasks.** Every item under "Things only you can do" becomes a `you` task, and the tasks that need it depend on it. A paid service gets a step to set a spending limit in the provider's dashboard.
- **`review` tasks.** End every milestone with a review task. It checks the milestone's work against the plan, against every rule in `CLAUDE.md`, and against the milestone's `review` checks. A milestone that touches logins, money or private data also gets "try to break it" in its review. End the last milestone with a review of the whole app against the plan.

## Check it with the user

Show the milestones, one line each, with what the user will be able to try at the end of each, and the number of tasks. Do not list every task. Explain in one line what a milestone is the first time you use the word.

Ask whether the order feels right and whether anything is missing. Adjust until they agree.

## Write the files

Write one file per task, `docs/tasks/index.md`, and the "Rules every change follows" section in `CLAUDE.md`, as the template shows. Set the plan's status to `tasked`.

## Readiness check

Before you finish, confirm all of this, and fix whatever fails:

- Every build task has a "Done when" list and a "How to test" section.
- Every dependency points to a task that exists, and nothing depends on itself in a circle.
- Every item under "Things only you can do" has a `you` task.
- Every checkable block the plan needs now is in a task, in a review task, in `CLAUDE.md`'s rules, or (for `scan`) left to `/lwh-security-check`.
- Every milestone ends with a review task.
- "Open questions" in the plan is empty.

## Finish

Tell the user how many tasks and milestones there are, and what they need to do themselves before a build. Then name the next step: `/lwh-run`. Mention that they choose how far it goes each time: one task, a few, a milestone, or everything.
