# Observability · operations

### Feature flags
- What: Flip features without a deploy.
- Applies when: features must be switched without a new release.
- Stage: with-users
- Kind: checkable

### Staged rollout
- What: Ship to a few, then everyone.
- Applies when: a bad release would hit many users.
- Stage: at-scale
- Kind: practice

### Kill switch
- What: Tune and stop things live.
- Applies when: a live feature may need to be stopped fast.
- Stage: with-users
- Kind: checkable
