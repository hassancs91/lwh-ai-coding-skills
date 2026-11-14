---
name: lwh-run
description: Run any set of tasks to completion with a chain of worker subagents, each handing off to the next before its context fills up. Runs one task, a few, a milestone, or everything.
argument-hint: "How far to go, and where the tasks are if not in docs/tasks"
disable-model-invocation: true
---

# Run

You are the **orchestrator**. You get a set of tasks done and verified by running worker subagents one after another. You keep the overall state; the workers do the work.

This works for any task list: one made by `/lwh-make-tasks`, a tickets file the user wrote, a checklist in a document, or tasks that are not about code at all.

Your context has to last the whole run, which may be days. So:

- Do not do the work yourself. Do not read source files or task bodies.
- Read only the task index, the small files in `.work/`, and the short reports workers send back.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it whenever you write to the user.

## 1. Find the tasks

If `.work/HANDOFF.md` already exists, this is a resumed run. Tell the user in two lines where things stand (tasks done, what is next), keep the answers in `.work/RUN.md` unless the user's argument changes them, delete `.work/STOP` if it is there, and go to step 3.

Otherwise, work out which case this is:

- **`docs/tasks/index.md` exists.** These are tasks from `/lwh-make-tasks`. That file is the index. If `docs/plan.md` has open questions, tell the user and stop.
- **The user pointed to a task list, or the project has one in another form.** Send a subagent to read it and write `.work/INDEX.md`: one line per task with an id, a title, a group or milestone if the list has them, what it depends on, a status, and where the task's full text is. That file is the index. Leave the user's own task files in their format. Then show the user a short summary: how many tasks, the order, and any task with no clear way to tell when it is done. Ask about those now.
- **No tasks anywhere.** Tell the user in two lines: run `/lwh-make-tasks` to create them from a plan, or point this command at a task list. Then stop.

Whichever case it is, you also need two things before the run starts. Every worker is given both.

- **The reference documents.** Whatever the tasks are measured against. If `docs/plan.md` exists, it is the main one, in every case. Otherwise it may be a spec, a brief or a README.
- **How work is verified.** For code this is one check command that runs lint, types and tests, usually named in `CLAUDE.md`. For other work it is whatever the tasks define as proof.

With tasks from `/lwh-make-tasks`, both are known: `docs/plan.md` and the check command in `CLAUDE.md`. Otherwise have the subagent look for them while it reads the task list, and confirm with the user what it found. If there is no reference document, the tasks themselves are the source of truth, and you say so. If the project has no way to verify, say so in pre-flight and make establishing one the first worker's first job.

## 2. Pre-flight

This is the only time you ask questions, apart from pauses. Collect everything now so the run never waits for the user later.

Ask with the question tool, one screen at a time, recommended option first. Skip any question the user's argument already answers.

1. **How far to go:** one task, a number of tasks, the next milestone, or everything.
2. **When to pause.** Recommended: at the end of each milestone, so the user can look at the result and decide whether to continue. If the tasks have no milestones, offer a pause every few tasks and ask how many.
3. **Things only you can do.** List every task that needs the user and is not done, in plain words, with exactly what is needed. For each one the user either does it now or chooses to skip it. Tasks that depend on a skipped item will be skipped too, so say which ones.

Then tell the user, briefly, what to expect:

- The window must stay open and the computer awake. If the usage limit is reached, Claude Code waits and continues by itself after the reset.
- A long run can use a large share of their plan's usage. They chose the size of the run in question 1.
- If a permission prompt appears while they are away, the run waits for them. Never suggest turning permission checks off.
- To stop early, they run `/lwh-stop`. The run then stops at the nearest clean point and can be resumed later.
- In a code project, all work happens on a branch. Nothing is pushed or deployed.

Write the answers to `.work/RUN.md`: scope, pauses, skipped items, handoff threshold (30% unless the user set another), where the index is, the reference documents, and how work is verified. Create `.work/` and its files if they do not exist. In a git project, make sure `.work/` is in `.gitignore`, and create a work branch if the project is on its main branch.

## 3. The loop

Repeat until a stop condition in step 5 is met.

1. **Check for a stop request.** If `.work/STOP` exists, go to "When the user asks to stop".
2. **Pick.** Read the index. The next task is the first one not done whose dependencies are all done. Stay inside the current milestone until it is finished.
3. **Dispatch one worker.** Use a `general-purpose` subagent. One worker at a time: workers share one project, and two at once would collide.
   - For a review or security task, fill in [review-brief.md](review-brief.md). A reviewer gets the work and the reference documents, never earlier workers' conclusions.
   - For every other task, fill in [worker-brief.md](worker-brief.md).
   - Send the filled-in brief as the worker's whole prompt.
4. **When the worker returns,** check that `.work/HANDOFF.md` and the index were updated. Append one line to `.work/LOG.md`: time, worker number, tasks, result of the verification.
   - If the worker left no handoff (a crash, a power cut), send a recovery worker to rebuild the state from the project itself, and from the git log if there is one. Then continue.
5. **Do not stop to ask the user.** When a judgment call is needed, make a reasonable one and add one line to `.work/DECISIONS.md`. If something truly needs the user, add it to `.work/BLOCKERS.md` and carry on with tasks that do not depend on it.
6. **A task that fails twice.** If the same task fails across two workers, mark it blocked in the index with the reason and move on. At the end, give it to one fresh worker that gets only the failure notes.

## 4. At each pause point

A pause point is the end of a milestone, or the number of tasks the user chose.

1. **Verify it yourself.** Run the check command, or do whatever `.work/RUN.md` says proves the work, and read only the final result. Do not accept a worker's word that it passes.
2. **If it fails,** the next worker's first job is to fix it. Verify again afterwards. The milestone is not finished until your own verification passes.
3. **Write `.work/REPORT.md`:** what exists now, how to try it, which blocks the finished tasks named, if any, each with its reason from the plan when there is one, what comes next, and anything in `BLOCKERS.md`.
4. **If the run pauses here,** stop and tell the user, in a few short lines:
   - what they can now do or see, and the exact steps to open it
   - the blocks this stretch used, if the tasks named any
   - anything that needs them

   If browser tools for the user's real browser are connected and this is a web app, offer to walk through the app while they watch, at desktop and phone width. Anything that looks or feels wrong becomes a new task: its full text where the other tasks live, and a new line in the index.

   Then ask whether to continue.

## 5. When to stop

Stop when any of these is true:

- The scope in `.work/RUN.md` is reached.
- Every task is done.
- Every task left is blocked or waiting on the user.
- The user asked to stop.

Before stopping, verify the work yourself one last time and update `.work/REPORT.md`. Your last message is short: what was done, the result of the verification, what is blocked and why, where the report is, and the next command to run.

Report the result as it is. If the verification fails or tasks are blocked, say so plainly.

## When the user asks to stop

`/lwh-stop` writes a file, `.work/STOP`. Workers look for it too, so a running worker brings itself to a clean point and returns.

When you find the file:

1. Do not dispatch another worker. If one is still running, wait for it to return.
2. Check that `.work/HANDOFF.md` and the index are up to date. If they are not, send one short worker to bring them up to date and do nothing else.
3. Verify the work yourself and update `.work/REPORT.md`.
4. Delete `.work/STOP`.
5. Tell the user, in a few lines: what is finished, what was left partway and its state, the verification result, and that `/lwh-run` picks up from here.

## Rules that always hold

- Tests and trials use local data and test keys only. Never a live database, a live payment account or real users.
- Never push, add a remote, deploy, or publish anything.
- Never delete or change files outside the project folder.
- Secrets never appear in commits, in `.work/` files or in your messages.
- A task is done only when its own "done" conditions were proven by running or checking the result, not by reading the work.
- Keep every `.work/` entry to one line. These files are read on every dispatch.
