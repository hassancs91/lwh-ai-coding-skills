---
name: lwh-plan-app
description: Turn an app idea into a clear written plan through a guided interview that explains every choice along the way.
argument-hint: "Your idea, in a sentence or two"
disable-model-invocation: true
---

# Plan the app

Interview the user about their idea and write `docs/plan.md`. Everything built later follows this file, so a vague plan here becomes a wrong app later. You do not write code in this step.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it in every message.

## Before you ask anything

- **If `docs/plan.md` exists,** read it. The user is changing the plan or adding a feature. Ask what they want to add or change, and interview only about that.
- **If the folder already has code,** send a subagent to survey it and report in 30 lines or fewer: what the app does, the stack, what works, what is missing. Do not ask the user things the code answers.
- **If the user gave their idea as an argument,** start from it. Otherwise ask them to describe the idea in their own words, as plain text, not a multiple-choice question.

## The interview

There is no fixed number of questions. Keep asking and clarifying until every detail of the app is settled and nothing is left assumed. The interview is finished when someone who has only the plan could build the right app without guessing.

Ask in small rounds of 1 to 3 questions, and let each answer shape the next round, so a long interview never feels like a form. If the user wants to move faster, they can tell you to decide the rest. Then decide, and list what you decided so they can change it.

1. **The idea.** What it is, who it is for, and the one thing it must do well. Say it back in two sentences and check you understood.
2. **The first version.** Propose two lists: what is in the first version, and what waits. Cut hard. A small first version that works teaches more and ships sooner than a big one that does not. Let the user move items between the lists.
3. **What people can do.** Propose the screens and the actions on each, as a short list. Ask what is wrong or missing.
4. **Features that change what must be built.** Ask only where the idea leaves it unclear: do people log in, does it take payments, do users upload files, does it send email, does it use AI, is data private to each user or shared.
5. **Kind of app and stack.** Ask whether the user has a stack in mind and what they have used before. If they know what they want, use it, and say so plainly if you see a real problem with the fit. If they do not, explain the realistic options in plain words, recommend one with the reason, and let them choose. Any stack is allowed.
6. **How we'll know it works.** Recommend the kinds of testing that fit this app: code tests, tests that drive the real app, and for web apps the phone-width check. Explain each in one line and confirm.

### Technical choices

The user makes the technical choices too: the database, how people log in, where files are stored, the main libraries, how the code is organised. Put each one to them:

- Say in a line or two what is being chosen and why it matters for this app.
- Give the options, with your recommendation first and the reason.
- Let them choose, or discuss it for as long as they want.

A professional may already know what they want. Follow it. A beginner should come out of each choice understanding what was picked and why, which is how they learn to make the next one themselves.

Only a detail with one sensible answer and no effect on the product, the cost or the user's work can be settled without asking, and it still gets listed.

Record every choice in the plan under "Technical decisions", with a one-line reason and whether the user chose it or left it to you.

### Blocks

Read `${CLAUDE_PLUGIN_ROOT}/blocks/index.md`. A block is one building piece of a solid app, such as input validation or backups.

- Pick the blocks whose "applies when" matches this app.
- Blocks at stage `day-one` and `day-one-if` go in the plan as needed now.
- Blocks at stage `go-live` that apply are listed under "Before going live".
- Blocks at stage `with-users` are listed as "later". Leave `at-scale` blocks out. Never plan either into a first version.
- Blocks of kind `concept` never go in the plan. Use them to explain a term when it comes up.
- When a block comes up in the conversation, give its one-line meaning. Do not present the whole list as a lecture.

## Write the plan

Read [plan-template.md](plan-template.md) and write `docs/plan.md` in that shape, with status `draft`. If a question is still open, put it under "Open questions" rather than guessing silently.

Then show the user a summary of 5 to 8 lines: what is being built, the first version, the stack, how many blocks it needs, and what only they can do. Ask what to change, and update the file until they are happy.

## Finish

Tell the user the next step: start a new session and run `/lwh-challenge-plan`, which looks for holes in the plan before anything is built. A new session matters because the challenge should judge the written plan, not this conversation.
