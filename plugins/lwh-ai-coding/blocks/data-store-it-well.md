# Data: store it well

### Databases
- What: One organized home for your data.
- Applies when: the app stores data.
- Stage: day-one-if
- Kind: checkable
- Done when: Data that must last is stored in a database and is still there after the app restarts.

### JSON
- What: Structured data any system can read.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### SQL
- What: Ask a database for exactly what you want.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### Data modeling
- What: Design your tables and how they link.
- Applies when: the app stores data.
- Stage: day-one-if
- Kind: checkable
- Done when: Each kind of thing has its own table, tables are linked, and no fact is stored in two places.

### Migrations
- What: Versioned schema changes, in order.
- Applies when: the app uses a database with tables.
- Stage: day-one-if
- Kind: checkable
- Done when: Every change to the tables is a migration file in the project, and a fresh database built from the migrations works with the app.

### Transactions
- What: All steps save together, or none do.
- Applies when: one action changes several records that must stay in step.
- Stage: day-one-if
- Kind: checkable
- Done when: When a save with several steps fails partway, none of its steps stay saved. A test forces the failure.

### NoSQL
- What: MongoDB, and data that won't fit a table.
- Applies when: the term comes up.
- Stage: any
- Kind: concept
