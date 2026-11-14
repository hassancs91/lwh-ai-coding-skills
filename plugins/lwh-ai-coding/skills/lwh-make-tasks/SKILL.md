---
name: lwh-make-tasks
description: Split the written plan into small tasks, each with exactly what to build and how it gets tested, grouped into milestones.
disable-model-invocation: true
---

# Make the tasks

Turn `docs/plan.md` into the task files in `docs/tasks/`. The build follows these tasks exactly, so each one must say what to build and how to prove it works. You do not write code in this skill.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it in every message.

## Before you start

- Read `docs/plan.md`. If there is no plan, name `/lwh-plan-app` and stop.
- If the plan's status is `draft`, tell the user it was never challenged and recommend `/lwh-challenge-plan` first. Continue only if they choose to.
- If "Open questions" is not empty, ask those questions now and update the plan.
- Read `${CLAUDE_PLUGIN_ROOT}/blocks/index.md`, then only the part files that hold the plan's blocks. You need each block's "Done when" check.
- If the folder already has code, send a subagent to survey it and report in 30 lines or fewer what already exists, so you do not write tasks for finished work.
- If `docs/tasks/` already has tasks, you are adding to them. Keep every existing id and continue the numbering.

## Draft the breakdown

Read [task-template.md](task-template.md) for the formats and the rules. In short:

- **Milestones.** Group tasks into milestones. Each milestone ends with something the user can open and try.
- **T00** sets up the project, using the checklist in the template.
- **Slices.** Each build task delivers one thing that works end to end, from the screen down to the stored data. Never a task like "build all the database tables".
- **Small.** A task should be finishable by one worker with room to spare. When in doubt, split it.
- **Order.** Give each task the tasks it depends on. Put the riskiest or least certain work early, when changing course is cheap.
- **Blocks become checks.** Each task names the blocks it must honour, and each block's "Done when" becomes one of the task's boxes. Copy the check's text into the task. A task must stand on its own, because whoever runs it reads only the task, not the blocks files.
- **`you` tasks.** Every item under "Things only you can do" becomes a `you` task, and the tasks that need it depend on it.
- **`review` tasks.** End each milestone that touches logins, money or private data with a review task. End the last milestone with a review of the whole app against the plan.

## Check it with the user

Show the milestones, one line each, with what the user will be able to try at the end of each, and the number of tasks. Do not list every task. Explain in one line what a milestone is the first time you use the word.

Ask whether the order feels right and whether anything is missing. Adjust until they agree.

## Write the files

Write one file per task and `docs/tasks/index.md`, as the template shows. Set the plan's status to `tasked`.

## Readiness check

Before you finish, confirm all of this, and fix whatever fails:

- Every build task has a "Done when" list and a "How to test" section.
- Every dependency points to a task that exists, and nothing depends on itself in a circle.
- Every item under "Things only you can do" has a `you` task.
- Every block the plan needs now appears in at least one task.
- "Open questions" in the plan is empty.

## Finish

Tell the user how many tasks and milestones there are, and what they need to do themselves before a build. Then name the next step: `/lwh-run`. Mention that they choose how far it goes each time: one task, a few, a milestone, or everything.
