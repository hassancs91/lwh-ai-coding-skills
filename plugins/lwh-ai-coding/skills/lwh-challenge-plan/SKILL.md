---
name: lwh-challenge-plan
description: Stress-test the written plan for holes, missing pieces and oversized scope before anything is built, then fix the plan.
disable-model-invocation: true
---

# Challenge the plan

Find what is wrong with `docs/plan.md` while it is still cheap to fix, and fix it. A hole found here costs a few minutes. The same hole found after the build costs days.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it in every message.

## Start fresh

You should judge the plan as written, the way a builder who was never in the planning conversation would read it. If this session is the one that wrote the plan, tell the user to run this in a new session, and continue here only if they prefer to.

Read `docs/plan.md` and `${CLAUDE_PLUGIN_ROOT}/blocks/index.md`. If there is no plan, say so, name `/lwh-plan-app`, and stop.

## Find the weak spots first

Before asking anything, go through the plan and list every problem you can find. Look for:

- **Unclear.** A place where two builders would build two different things.
- **Unhappy paths.** What happens when something goes wrong: wrong input, an empty list, no connection, a forgotten password, a failed payment, a file that is too big.
- **Who can do what.** Can one user see or change another user's things? Is there an admin, and what can they do?
- **Missing blocks.** The app has a feature, and a block that feature needs is not in the plan.
- **Too much.** The first version is too big, or the plan builds `go-live`, `with-users` or `at-scale` blocks now. Move them to the lists for later.
- **Contradictions.** Two parts of the plan that cannot both be true.
- **Cannot be checked.** A feature described so loosely that no test could tell whether it works.
- **Missing human steps.** An account, key or purchase the build will need that is not under "Things only you can do".

## Then sort them

- **Fix it yourself** only when there is one sensible answer and no real choice: a contradiction with an obvious resolution, or a missing piece the plan clearly implies. Record the fix in "Challenge notes" so the user sees it.
- **Ask the user** about everything that involves a real choice, whether it is about the product or the technology. Explain what is at stake, recommend, and let them choose.

There is no fixed number of questions. Work through every weak spot, most serious first. If the user wants to move faster, they can tell you to decide the rest. Then decide, and list what you decided.

## Ask as small stories

Ask in rounds of 1 to 3 questions. Put each one as a concrete situation with a named person, give the options, and put your recommendation first:

> Sara typed the wrong password five times. What should happen?

When a question is about a block, name the block and give its one-line meaning. This is where the user learns why the block exists.

Be direct about scope. If the first version is too big, say so and propose what to move to "Not yet".

## Update the plan

Rewrite the affected sections of `docs/plan.md` so the plan reads as one clean document, not a plan with patches on top. Then:

- Fill "Challenge notes" with what changed and why, one line each, including the fixes you made yourself.
- Make sure "Open questions" is empty.
- Set the status to `challenged`.

## Finish

Tell the user in a few lines how many things changed and the three that matter most. Then name the next step: `/lwh-make-tasks`, which splits the plan into small tested tasks.
