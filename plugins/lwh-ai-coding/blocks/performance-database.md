# Performance · database

### Indexing
- What: Jump to the rows instead of scanning.
- Applies when: tables have grown and lookups are slow.
- Stage: with-users
- Kind: checkable

### N+1 queries
- What: Don't fire one query per row.
- Applies when: lists show related data from the database.
- Stage: day-one-if
- Kind: checkable
- Done when: Loading a list runs a small, fixed number of queries, not one per item. A test counts them.

### Query plans (EXPLAIN)
- What: Read why a query is slow.
- Applies when: a specific query is slow.
- Stage: with-users
- Kind: practice

### Connection pooling
- What: Reuse a bounded set of connections.
- Applies when: the app is live and opens many database connections.
- Stage: with-users
- Kind: checkable

### Read replicas
- What: Route reads to database copies.
- Applies when: reads overload one database.
- Stage: at-scale
- Kind: checkable

### Materialized views
- What: Precompute an expensive result.
- Applies when: an expensive report is read often.
- Stage: at-scale
- Kind: checkable

### Bulk operations
- What: Do many rows in one trip.
- Applies when: the app writes many rows at once.
- Stage: with-users
- Kind: checkable

### Pagination
- What: Hand back data in pages.
- Applies when: a list can grow long.
- Stage: day-one-if
- Kind: checkable
- Done when: Long lists load a page at a time. No request returns every row.
