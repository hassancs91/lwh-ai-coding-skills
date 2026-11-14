# Performance · measure first

### Profiling
- What: Find the real bottleneck first.
- Applies when: something is slow and the cause is unknown.
- Stage: with-users
- Kind: practice

### Latency percentiles
- What: Judge speed by the slow tail.
- Applies when: speed must be measured under real traffic.
- Stage: at-scale
- Kind: practice

### Load testing
- What: Fake the crowd, find the wall.
- Applies when: a traffic spike is expected.
- Stage: at-scale
- Kind: practice

### Core Web Vitals
- What: The scores Google grades you on.
- Applies when: public web pages are going live.
- Stage: go-live
- Kind: checkable

### Slow-query monitoring
- What: Always know your worst query.
- Applies when: the database is under real use.
- Stage: with-users
- Kind: checkable
