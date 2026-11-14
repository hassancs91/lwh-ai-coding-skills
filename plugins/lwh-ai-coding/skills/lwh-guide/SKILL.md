---
name: lwh-guide
description: A short guided tour of the lwh-ai-coding skills: what each one does, the order to use them in, and answers to questions about them.
argument-hint: "A question about the skills, or leave empty for the tour"
disable-model-invocation: true
---

# Guide

Help the user understand these skills and get started. Answer what they ask; do not start planning or building anything here.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it. That matters most here: give the tour in small pieces, not as one long message.

## If the user asked a question

Answer it in a few lines. Before you state what a skill does or how it behaves, read that skill's file at `${CLAUDE_PLUGIN_ROOT}/skills/<skill name>/SKILL.md`. The summaries below are for orientation, and the skill files are the truth.

`/lwh-run` and `/lwh-stop` live in a separate plugin, `lwh-core`, which is installed together with this one. You cannot read their files from here, so for those two, answer from "How a run works" below and say so if a question goes beyond it.

## If they asked for nothing in particular

Start by asking where they are, with the question tool:

- I have an idea and nothing built yet
- I already have an app or some code
- I already have a list of tasks I want done
- I just want to understand how this works

Then give the part of the tour that fits, and name the one command to run first.

## The idea, in three lines

- Decide before you build. Most of the work in these skills happens before any code is written, because a clear plan is what makes the build go right.
- Everything is written to files in the project, so nothing depends on one long conversation, and work can stop and continue at any time.
- An app is made of **blocks**: building pieces such as logins, input validation or backups. The skills name the blocks the app needs and explain each one when it comes up, so the user learns them by using them.

## The skills

| Command | What it does | When |
|---|---|---|
| `/lwh-plan-app` | An interview that turns an idea into a written plan, explaining every choice | First, or whenever a feature is added |
| `/lwh-challenge-plan` | Looks for holes in the plan and fixes them | After planning, in a new session |
| `/lwh-make-tasks` | Splits the plan into small tasks, each with what to build and how it is tested | When the plan is solid |
| `/lwh-run` | Gets tasks done with a chain of workers: one task, a few, a milestone, or all of them | When tasks exist |
| `/lwh-stop` | Stops a run cleanly at the nearest safe point | While a run is going |
| `/lwh-security-check` | Creates security tests for what was built, then reports what was found | After building |
| `/lwh-whats-next` | Says where the project is and which command comes next | Any time |

## How a run works

- `/lwh-run` asks three things before it starts: how far to go, when to pause, and for anything only the user can provide. After that it does not interrupt.
- One worker at a time does the tasks. Before a worker's memory fills up, it writes down where things stand and a fresh worker takes over. That is how a run stays reliable over hours or days.
- Workers do not judge their own work. At each pause point the run verifies the result itself, and review tasks are done by a fresh worker that has not seen the earlier work.
- All state is in a `.work/` folder in the project. If the run is interrupted, running `/lwh-run` again continues from there.
- `/lwh-stop` asks the run to stop after the current task. `/lwh-stop now` stops sooner, at the nearest point where nothing is left half-done.
- In a code project the work happens on a branch, with local data and test keys. Nothing is pushed or deployed.

## Things worth telling a newcomer

Bring these up when they are relevant, not all at once:

- **The usual order** is plan, challenge, tasks, run, security check. `/lwh-whats-next` always knows which one is next.
- **`/lwh-run` is not tied to the rest.** It runs any task list, including one the user wrote themselves, and tasks that are not about code.
- **Starting from an existing app** works. `/lwh-plan-app` reads the code first and plans only what is new.
- **A run can be as small as one task.** Running everything unattended is a choice, not the default. For a long run the computer has to stay awake with the window open.
- **Why a new session for the challenge:** a fresh session judges the written plan, the way a builder who was never in the planning conversation would read it.
- **The user stays in charge.** Every decision is theirs, technical ones included. The skills explain, recommend, and ask.

## Finish

End by naming the one command that fits where the user is, and what it will do in a few words.
