---
name: lwh-security-check
description: Create security testing tasks for the app that was built, and afterwards write an honest report of what was tested and found.
disable-model-invocation: true
---

# Security check

This skill has two jobs, depending on where the project is:

- **No security tasks yet, or new code since the last ones:** create them.
- **Security tasks exist and are finished:** write the report.

The tasks themselves are run by `/lwh-run`, like any other task. Findings come back as fix tasks through the same loop.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it in every message.

## Job 1: create the security tasks

### Look before you ask

- Read `docs/plan.md` and `docs/tasks/index.md`. If nothing has been built yet, say so, name `/lwh-run`, and stop.
- Read `${CLAUDE_PLUGIN_ROOT}/blocks/index.md`, then the security part files for the blocks that apply to this app.
- Send a subagent to survey the code and report in 40 lines or fewer what the app exposes: pages and endpoints, forms and inputs, logins and roles, file uploads, payments, outside services it calls, where secrets live, and what private data it stores.

### Ask what matters most

Ask two or three questions at most, with your recommended answers taken from the plan:

- What here would hurt most if a stranger got it or changed it?
- Who might want to misuse this app?

Explain in one line why you are asking: testing effort goes where the damage would be worst.

### Write the tasks

Add `security` tasks to `docs/tasks/` and the index, in a milestone of their own. Use the review task format in `${CLAUDE_PLUGIN_ROOT}/skills/lwh-make-tasks/task-template.md`. One task per area that applies to this app:

- **Logins and sessions:** guessing passwords, weak resets, sessions that never end.
- **Who can see what:** one user reaching another user's data, a normal user reaching admin actions.
- **Inputs:** every form and endpoint fed hostile input.
- **Files and uploads,** if the app has them.
- **Payments,** if the app has them: faked or repeated payment messages, changed amounts.
- **Private data:** what is stored, what appears in logs and error messages.
- **Secrets:** nothing in the code or the git history, checked with a scanning tool.
- **Dependencies:** known problems in the packages the app uses, checked with a scanning tool.
- **AI features,** if the app has them: instructions hidden in user content, leaking private data through the model.

Each task says what to try to break and lists its blocks with each block's check copied in, so the task stands on its own. Skip an area that does not apply, and say that you skipped it. Start with the areas the user said matter most.

All testing runs against the app on the user's own machine with local data and test keys. Never a live site, a live account or anything outside the project.

### Finish

Tell the user how many tasks were created and what they cover. Then name the next step: `/lwh-run`, which runs these tasks and turns each finding into a fix.

## Job 2: write the report

When the security tasks are done, write `docs/security-report.md`:

- **Tested:** each area, and what was tried.
- **Found:** each finding in one line, how serious it was, and whether it is fixed. List anything still open first.
- **Not tested:** what this check did not cover, such as the hosting setup, the live site and anything that needs a person to try.

Show the user a summary of a few lines: findings, fixed, still open, not covered.

Never say the app is "secure". Say what was tested and what was found. This check lowers risk; it does not replace a professional review for an app that handles money or sensitive data, and the report should say that once, plainly.
