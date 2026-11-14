# Design for failure

### Design for failure
- What: Assume every part will break, and plan for it.
- Applies when: the app depends on outside services.
- Stage: day-one-if
- Kind: practice

### Bulkheads
- What: Wall off each part so one failure can't spread.
- Applies when: one failing part could take down the rest.
- Stage: at-scale
- Kind: checkable

### Redundancy
- What: No single point of failure.
- Applies when: downtime has become costly.
- Stage: at-scale
- Kind: checkable

### Error budgets
- What: Decide how much failure you'll allow, on purpose.
- Applies when: a team must balance new features against stability.
- Stage: at-scale
- Kind: practice

### Chaos testing
- What: Break it on purpose, before reality does.
- Applies when: the app runs on several machines.
- Stage: at-scale
- Kind: practice
