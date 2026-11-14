# lwh skills for Claude Code

Two Claude Code plugins that take you from an app idea to a built, tested app, and teach you the building blocks of a solid app along the way.

- **lwh-ai-coding** plans the app with you, looks for holes in the plan, splits it into small tested tasks, and checks its security.
- **lwh-core** runs any list of tasks with a chain of workers that hand off to each other, so long runs stay reliable. It is installed with lwh-ai-coding, and also works on its own with any task list.

Every decision stays yours. The skills explain each choice, recommend one, and let you pick, or say "decide the rest".

## Install

In Claude Code:

```
/plugin marketplace add <github-user>/lwh-ai-coding-skills
/plugin install lwh-ai-coding@lwh
```

Installing `lwh-ai-coding` also installs `lwh-core`. To use only the runner, install `lwh-core@lwh` instead.

**Get updates automatically:** run `/plugin`, open **Marketplaces**, choose **lwh**, and turn on auto-update. Otherwise run `/plugin update` from time to time.

## Start

1. Make a new, empty folder for your app.
2. Open Claude Code in that folder. Not in your home folder or on the Desktop.
3. Run `/lwh-plan-app`, or `/lwh-guide` for a short tour first.

Each command ends by telling you the next one. `/lwh-whats-next` tells you where you are at any time.

| Command | What it does |
|---|---|
| `/lwh-plan-app` | An interview that turns your idea into a written plan, at the pace you choose |
| `/lwh-challenge-plan` | Looks for holes in the plan and fixes them, after `/clear` |
| `/lwh-make-tasks` | Splits the plan into small tasks, each with its tests |
| `/lwh-run` | Gets the tasks done: one, a few, a milestone, or all of them |
| `/lwh-stop` | Stops a run cleanly. Run it from a second window |
| `/lwh-security-check` | Creates security tests, then reports what was tested and found |
| `/lwh-whats-next` | Where the project stands, and the command to run next |
| `/lwh-guide` | A short tour, and answers to questions about the skills |

## What a run needs from you

- **Git, and your stack's tools** (such as Node or Python) installed. `/lwh-run` checks, and tells you the exact command for anything missing.
- **A few answers before it starts:** how far to go, when to pause, the accounts or keys only you can create, and a spending limit for any paid service.
- **The window open and the computer awake.** A run pauses whenever a permission prompt appears. `/lwh-run` offers a few narrow allow rules so that happens less.

Work happens on a branch called `lwh/work`. Nothing is pushed or deployed. At the end, the run offers to merge the branch on your computer.

These skills do not put your app online yet. The plan lists what is needed before real users, under "Before going live".

## Try it from a local copy

```
claude plugin marketplace add <path-to-this-folder>
claude plugin install lwh-ai-coding@lwh
```

Then open Claude Code in a new, empty folder and run `/lwh-plan-app`. Edits to the skills in this folder take effect after `/reload-plugins` or a restart. To remove it all afterwards:

```
claude plugin uninstall lwh-ai-coding@lwh
claude plugin uninstall lwh-core@lwh
claude plugin marketplace remove lwh
```

## Change the skills

- [docs/file-contract.md](docs/file-contract.md) defines every file the skills read and write. If a skill and the contract disagree, the contract wins.
- How the skills talk to users lives in `shared/house-style.md`. Edit it there, then run `node scripts/sync-shared.mjs` to copy it into each plugin.
- The blocks live in `scripts/blocks-meta.json`. Edit it there, then run `node scripts/build-blocks.mjs`, which checks every field and rebuilds `plugins/lwh-ai-coding/blocks/`. Never edit that folder by hand.
- Before a release, run `node scripts/sync-shared.mjs --check` and `node scripts/build-blocks.mjs --check`, then bump `version` in each plugin's `plugin.json`.

## License

MIT
