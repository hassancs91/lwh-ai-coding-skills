# Set up the project right

### Git
- What: Version control, rewind any change.
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: The project is a git repository, and every finished task is its own commit.

### Branches
- What: A side copy for the risky change.
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: Build work happens on a branch, not directly on the main branch.

### venv
- What: Each project, its own package box.
- Applies when: the project uses Python.
- Stage: day-one-if
- Kind: checkable
- Done when: Packages install into an environment that belongs to this project only, and a fresh install from the requirements file works.

### Env vars
- What: Keep settings out of your code.
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: Settings that differ per machine come from the environment, and the app starts from the example env file once its values are filled in.

### Secrets
- What: Keep them out of code, git, and logs.
- Applies when: every app.
- Stage: day-one
- Kind: checkable
- Done when: The real env file is ignored by git, and no key or password appears in the code, the git history or the logs.
