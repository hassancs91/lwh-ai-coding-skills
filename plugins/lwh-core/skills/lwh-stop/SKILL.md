---
name: lwh-stop
description: Stop a running /lwh-run cleanly at the nearest safe point, so nothing is left half-done and the run can be resumed later.
argument-hint: "Leave empty to stop after the current task, or say 'now' to stop sooner"
disable-model-invocation: true
---

# Stop the run

The user wants a running `/lwh-run` to stop. Your job is to request a clean stop, not to cut anything off. A worker that is killed mid-task can leave work half-applied; a worker that is asked to stop finishes or parks its work first.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it.

## 1. Check there is a run

If the project has no `.work/` folder, tell the user in one line that no run was found here, and stop.

## 2. Write the stop request

Write the file `.work/STOP` with one word on the first line, and the user's reason on the second line if they gave one:

- `after-task` (the default): the worker finishes the task it is on, then stops. Nothing is left partway.
- `now`: when the user said "now", or asked to stop as soon as possible. The worker brings its current task to the nearest clean point, saves it as unfinished, and stops.

The running worker and the orchestrator both look for this file. Do not stop, kill or message a worker in any other way, and do not change any other file.

## 3. Then, depending on where you are

**If this session is the one running `/lwh-run`,** you are the orchestrator. Follow "When the user asks to stop" in that skill: dispatch nothing new, wait for the running worker to return, verify, update the report, delete `.work/STOP`, and tell the user where things stand.

**If this is a different session,** you only leave the request. Tell the user in a few lines:

- The stop request is placed. The run stops by itself at the next clean point.
- With `after-task` that is when the current task finishes, which can take a while. With `now` it is sooner.
- The other session will say when it has stopped and what state things are in.
- Running `/lwh-run` again later continues from where it stopped.

## If the user changes their mind

If they want the run to carry on after all, and `.work/STOP` is still there, delete the file and tell them the request is withdrawn.
