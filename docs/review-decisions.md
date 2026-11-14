# Review decisions

The first review of the two plugins, before release. Each line is a problem the review found and what was decided. The file contract and the skills now follow these decisions.

## Running unattended

1. **Permission prompts stall a run.** Pre-flight offers narrow allow rules in `.claude/settings.local.json` (edits inside the project, the check command, git add/commit/status/diff/log, the package manager). Added only on a yes; turning checks off is never suggested.
2. **Every later run looked like a resume.** `RUN.md` starts with `state: running | paused | stopped | finished`. A finished run is archived to `.work/archive/<date-time>/`. Only `paused` and `stopped` resume.
3. **`you` tasks were sent to workers.** The orchestrator reads `you` task bodies (only those), walks the user through them in pre-flight, checks the result without reading any secret, and marks them done. Workers never get a `you` task.
4. **Skipped `you` tasks.** New status `skipped`, for `you` tasks only. Their dependents wait, and the next pre-flight asks again.
5. **Workers ran past the scope.** Each worker gets an allowed list cut off at the next pause point or scope limit, and never starts a task outside it.
6. **Unattended decisions never reached the user.** Workers tag each decision `[technical]`, `[product]` or `[plan]`. At each pause the user accepts or changes each one. Accepted ones go into `docs/plan.md`; changed ones become tasks.
7. **Fresh projects committed to main or failed on git.** Pre-flight checks git, the git identity and the runtime, and gives the exact command for anything missing. The orchestrator runs `git init` and creates the branch `lwh/work` before T00.
8. **Sessions in the home folder.** The planning skills, `/lwh-run` and the router stop in the home folder, the Desktop, Documents or Downloads, and offer a project folder.
9. **Stopping from the run's own window.** The orchestrator waits for each worker in either foreground or background mode. Stop from a second window, never with Esc. A `running` state at start asks "still going elsewhere?"; a "no" gets a recovery worker. The docs show a skill cannot force a subagent into the foreground, so the skill handles both modes.
10. **Command names and install.** Tested on Claude Code 2.1.319: bare names (`/lwh-plan-app`) work, `dependencies` installs `lwh-core`, `${CLAUDE_PLUGIN_ROOT}` resolves. A README was added and the stray `note` file removed.

## Routing and security

11. **Security re-checks.** `docs/security-report.md` records the commit it covers. Commits since then, other than its own fixes and `docs/` changes, trigger new security tasks for the changed areas only.
12. **Blockers never cleared.** `BLOCKERS.md` is gone. Anything only the user can resolve becomes a `you` task that the stuck task depends on.

## Block checks

13. **Checks a test can't prove.** Each check has a proof type: `test` (build tasks), `review` (the milestone's review task), `scan` (the security check). Dependency and secret scanning left T00.
14. **Outside services.** Test and sandbox modes with test keys are allowed, including real AI calls in tests. Pre-flight asks for a budget per paid service, and the user sets that limit in the provider's dashboard. Real accounts, real money, real users and live deployments stay off-limits.
15. **Blocks that bloated every first version.** Admin panel applies only when the plan names a staff role. Soft delete applies only when the user wants deletes to be undoable, asked as a story. Guessable IDs stays. Component library became a practice.
16. **Contradicting checks** (done without a question). Background jobs covers work the user does not watch; Streaming covers AI answers on screen. Money as cents tests 10 + 20 cents. Path & upload safety says "away from the app's source files". Data modeling no longer assumes tables.

## Learning, safety and context

17. **The pause could not name the blocks.** Each worker's report names the blocks it used, `LOG.md` keeps them, and the pause reads the plan's blocks table for the reasons.
18. **Lost work and stale servers.** Destructive git commands are forbidden. The orchestrator commits anything left uncommitted before each dispatch. Workers stop the processes they started. App tests always start their own server.
19. **What counts as a failure.** Workers report `done`, `progressing` or `stuck`. Several workers on one task is the design: unfinished at a handoff is normal and never blocks a task. Only two `stuck` reports in a row do. The index has a `Note` column.
20. **Running workers at the same time.** Not in v1. One worker at a time; a parallel mode is designed later.
21. **Task size.** Tasks stay small for clarity, review and progress, not to fit one worker.
22. **The orchestrator's own context.** It stays lean (only rows not done, the end of check output, browser walkthroughs in a subagent), re-reads its skill and `RUN.md` after a compaction, and at a long pause suggests `/clear` then `/lwh-run`. Pre-flight mentions the limit of three usage-limit resets.
23. **The planning interview had no end.** The first screen picks Quick, Thorough or At my own pace. "Decide the rest" works at any time. Routine choices go on one screen. Blocks come up only as stories when they change what gets built. "New session" became `/clear`.
24. **T00 on an existing app.** Only a safety net: git, secrets, env, `CLAUDE.md`, and a check command with one smoke test. Cleanup of old code is optional tasks that nothing depends on.
25. **T00 did not match the day-one blocks.** Blocks with scope `setup` are T00's boxes, copied as they are. Git's check was reworded for T00. Stack gained a "Code organisation" line.
26. **Cross-cutting blocks reached one task.** Blocks with scope `cross-cutting` go into "Rules every change follows" in `CLAUDE.md`, which every worker reads, and every milestone review checks them. Every milestone now ends with a review task.
27. **No path to going live.** The run offers a local merge of `lwh/work` at the end. The security report and the router list the "Before going live" blocks and say plainly the skills do not deploy. `lwh-go-live` is the next skill to design.

## Files, routing and releases

28. **Files in the user's language.** Frontmatter, headings, ids, statuses, columns and block names stay fixed. Content follows the user's language. Block names are taught in English with a translation.
29. **Changing a plan.** Plan-app edits in place, never clears Challenge notes, and lists changes under "Changed since the last challenge". The challenge reviews only those. Wording-only edits keep the status.
30. **The router took over unrelated work.** Its description names the lwh files, and its first step is a guard.
31. **Updates.** Each plugin.json has a `version`, bumped to release. The docs show `autoUpdate` is a user setting, not a `marketplace.json` key, so the README tells users how to turn it on.
32. **Blocks source.** `scripts/blocks-meta.json` is the only source. The build validates every field. The book is an optional `--from-book` comparison. Every "What" line is now a plain sentence.

## Done as defaults

- Open questions are never deleted to empty the list.
- The review brief has a handoff threshold, keeps a "Not yet reviewed" list in its own task file, and keeps the previous worker's handoff notes. Every fix task ends with removing its expected-failure mark.
- The guide no longer says workers don't judge their own work, and describes plan-app on an existing app as it works.
- Review tasks copy checks from the part files. The Magic links example is gone. Workers set `in-progress` when they start.
- `sync-shared.mjs` ignores line endings and skips subfolders.
- Every skill names the project folder as `${CLAUDE_PROJECT_DIR}`, so it never acts on another folder the session can see.
