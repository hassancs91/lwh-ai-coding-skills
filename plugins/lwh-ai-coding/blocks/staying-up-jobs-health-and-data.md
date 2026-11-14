# Staying up: jobs, health & data

### Background jobs
- What: Do slow work off to the side.
- Applies when: some work takes longer than a few seconds, such as sending email or calling an AI model.
- Stage: day-one-if
- Kind: checkable
- Done when: Slow work runs outside the request. The user gets an immediate response and can see the job's status.

### Dead-letter queue
- What: Park failed jobs, refund the charge.
- Applies when: background jobs fail under real use.
- Stage: with-users
- Kind: checkable

### Idempotent ingest
- What: Same message twice, handled once.
- Applies when: the app receives messages from other systems.
- Stage: day-one-if
- Kind: checkable
- Done when: The same incoming message delivered twice is processed once.

### Checkpoints
- What: Crash mid-job, pick up where it stopped.
- Applies when: jobs run for many minutes.
- Stage: with-users
- Kind: checkable

### Health probes
- What: A provider goes down, only its feature does.
- Applies when: the app is live and depends on outside services.
- Stage: with-users
- Kind: checkable

### Heartbeats
- What: A worker goes quiet, a watchdog catches it.
- Applies when: background workers run unattended.
- Stage: with-users
- Kind: checkable

### Race conditions
- What: Two requests, one resource.
- Applies when: two requests can change the same thing at once, such as stock, seats or a balance.
- Stage: day-one-if
- Kind: checkable
- Done when: Two requests at the same moment for the last item: exactly one succeeds. A test fires them together.

### Optimistic locking
- What: Save only if nobody changed it first.
- Applies when: two people can edit the same record.
- Stage: with-users
- Kind: checkable

### Backups & restore drills
- What: A backup you've never restored is just hope.
- Applies when: the app is going live with data worth keeping.
- Stage: go-live
- Kind: checkable
