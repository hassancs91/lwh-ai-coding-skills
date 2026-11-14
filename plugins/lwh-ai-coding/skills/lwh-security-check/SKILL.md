---
name: lwh-security-check
description: Create security testing tasks for the app that was built, and afterwards write an honest report of what was tested and found.
disable-model-invocation: true
---

# Security check

The project folder is `${CLAUDE_PROJECT_DIR}`. Read and write only inside it.

Read `${CLAUDE_PLUGIN_ROOT}/house-style.md` first and follow it in every message.

## Which job

Read `docs/plan.md`, `docs/tasks/index.md`, and the first lines of `docs/security-report.md` if it exists. Then take the first case that matches:

1. **Nothing has been built yet.** Say so, name `/lwh-run`, and stop.
2. **Security tasks exist and some are not done,** including the fix tasks they created. Say how many are left, name `/lwh-run`, and stop.
3. **Security tasks are all done, and there is no report, or the report is older than the last of them.** Do job 2: write the report.
4. **There is a report.** Its first line is `Covers commit: <id>`. List the commits since then with `git log <id>..HEAD --oneline`. Leave out commits whose message names a task listed in the report, and commits that change only `docs/`. If any commits are left, do job 1 for the areas they changed only. If none are left, tell the user the report is up to date.
5. **No security tasks and no report.** Do job 1 for the whole app.

Without git, ask the user which milestones were built since the last report, and check those.

The tasks themselves are run by `/lwh-run`, like any other task. Findings come back as fix tasks through the same loop.

## Job 1: create the security tasks

### Look before you ask

- Read `${CLAUDE_PLUGIN_ROOT}/blocks/index.md`, then the security part files for the blocks that apply to this app, and every block with proof `scan`.
- Send a subagent to survey the code, or only the changed areas, and report in 40 lines or fewer what the app exposes: pages and endpoints, forms and inputs, logins and roles, file uploads, payments, outside services it calls, where secrets live, and what private data it stores.

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
- **Secrets:** nothing in the code or the git history, checked with a scanning tool (the Secret scanning block).
- **Dependencies:** known problems in the packages the app uses, checked with a scanning tool (the Dependency scanning block).
- **AI features,** if the app has them: instructions hidden in user content, leaking private data through the model.

Each task says what to try to break and lists its blocks with each block's check copied in from its part file, so the task stands on its own. Skip an area that does not apply, and say that you skipped it. Start with the areas the user said matter most.

For the scans: the tool is installed inside the project, for example as a dev dependency, or run through the package manager without a global install. If the only way is a global install, add a `you` task with the exact command, and make the scan task depend on it. A scan finding that cannot be fixed in the project, such as a problem deep in a dev tool, is listed with its reason instead of blocking the run.

All testing runs against the app on the user's own machine. Outside services may be used in their test or sandbox mode with test keys. Never a real account, real money, real users or a live site.

### Finish

Tell the user how many tasks were created and what they cover. Then name the next step: `/lwh-run`, which runs these tasks and turns each finding into a fix.

## Job 2: write the report

Write `docs/security-report.md`. Its first line is `Covers commit: <the current commit id>`. Then:

- **Tested:** each area, and what was tried.
- **Found:** each finding in one line, how serious it was, the task id of its fix, and whether it is fixed. List anything still open first.
- **Not tested:** what this check did not cover, such as the hosting setup, the live site and anything that needs a person to try.

Show the user a summary of a few lines: findings, fixed, still open, not covered.

Never say the app is "secure". Say what was tested and what was found. This check lowers risk; it does not replace a professional review for an app that handles money or sensitive data, and the report should say that once, plainly.

Then name the next step. If the plan lists "Before going live" blocks, say plainly that these skills do not put the app online, and list those blocks, one line each, so the user knows what is left before real users. Otherwise name `/lwh-plan-app`, to add the next feature.
