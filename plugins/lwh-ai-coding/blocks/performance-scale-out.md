# Performance · scale out

### Load balancing
- What: Spread traffic, skip the dead.
- Applies when: one server is no longer enough.
- Stage: at-scale
- Kind: checkable

### Autoscaling
- What: Capacity follows the crowd.
- Applies when: traffic rises and falls a lot.
- Stage: at-scale
- Kind: checkable

### Sharding
- What: Split the data by key.
- Applies when: one database can no longer hold the data.
- Stage: at-scale
- Kind: checkable

### CDN & edge
- What: Cache near your users.
- Applies when: users are far from the server.
- Stage: with-users
- Kind: checkable
