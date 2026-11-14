# Blocks index

Every block, with when it applies and when it starts to matter. Pick blocks from these tables, then open only the part files you need for the full entries.

**Stage:** when the block starts to matter.
- `day-one`: every app, from the first version.
- `day-one-if`: from the first version, when the app has the feature in "Applies when".
- `go-live`: before the app is put on the internet for real users.
- `with-users`: after launch, once people use it.
- `at-scale`: with real traffic.
- `any`: a concept, explained when the term comes up.

**Kind:** `checkable` (a test or a reviewer can prove it), `practice` (a way of working), `concept` (something to understand; never put in a plan or turned into a check).

## Plan before you build

File: `plan-before-you-build.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Plan first | every app | day-one | practice |
| MVP | every app | day-one | practice |

## Set up the project right

File: `set-up-the-project-right.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Git | every app | day-one | checkable |
| Branches | every app | day-one | checkable |
| venv | the project uses Python | day-one-if | checkable |
| Env vars | every app | day-one | checkable |
| Secrets | every app | day-one | checkable |

## Build with AI

File: `build-with-ai.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| CLAUDE.md | every app | day-one | checkable |
| Agent memory | the term comes up | any | concept |
| Skills | the term comes up | any | concept |

## Keep the code clean

File: `keep-the-code-clean.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Modularity | every app | day-one | checkable |
| Separation | every app | day-one | checkable |

## How your app fits together

File: `how-your-app-fits-together.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Frontend & backend | the term comes up | any | concept |
| API | the term comes up | any | concept |
| Webhooks | another service must tell the app when something happens, such as a payment | day-one-if | checkable |
| HTTP status codes | the app has an API | day-one-if | checkable |
| Cookies | the term comes up | any | concept |

## In front of your code

File: `in-front-of-your-code.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Middleware | the term comes up | any | concept |
| Edge front door | the app is going live on the internet | go-live | checkable |

## Data: store it well

File: `data-store-it-well.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Databases | the app stores data | day-one-if | checkable |
| JSON | the term comes up | any | concept |
| SQL | the term comes up | any | concept |
| Data modeling | the app stores data | day-one-if | checkable |
| Migrations | the app uses a database with tables | day-one-if | checkable |
| Transactions | one action changes several records that must stay in step | day-one-if | checkable |
| NoSQL | the term comes up | any | concept |

## Security · principles

File: `security-principles.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Threat modeling | the app has logins, money or private data | day-one-if | practice |
| Least privilege | the app uses keys, database users or service accounts | day-one-if | checkable |
| Secure defaults | every app | day-one | checkable |
| Secret rotation | the app is live and uses long-lived keys | with-users | checkable |

## Security · identity

File: `security-identity.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Authentication | the app has logins | day-one-if | checkable |
| Sessions vs JWT | the term comes up | any | concept |
| OAuth 2.1 | users log in with Google or another provider | day-one-if | checkable |
| Magic links | users log in with an email link | day-one-if | checkable |
| Multi-factor auth | accounts guard money or sensitive data | with-users | checkable |
| API keys | the app gives keys to its users or to other programs | day-one-if | checkable |
| Unified principal | callers arrive in more than one way, such as a login and an API key | with-users | checkable |
| CAPTCHA / Turnstile | public forms attract bots | with-users | checkable |
| Hashing | the app stores passwords | day-one-if | checkable |
| Brute force | users log in with a password | day-one-if | checkable |

## Security · access

File: `security-access.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Authorization | the app has logins | day-one-if | checkable |
| Owner-only access | users have their own private data | day-one-if | checkable |
| Role-based access | the app has more than one kind of user, such as admin and member | day-one-if | checkable |

## Security · web vulns

File: `security-web-vulns.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Input validation | the app accepts input from users or other systems | day-one-if | checkable |
| XSS | a web app shows text that users typed | day-one-if | checkable |
| CSRF | a web app keeps users logged in with cookies | day-one-if | checkable |
| CORS | a browser frontend calls an API at a different address | day-one-if | checkable |
| SSRF | the server fetches addresses that users supply | day-one-if | checkable |
| SQL injection | the app uses a SQL database | day-one-if | checkable |
| Content Security Policy | a web app is going live | go-live | checkable |
| Safe user HTML | users can post formatted text or HTML | day-one-if | checkable |
| Path & upload safety | users upload files, or a file path comes from user input | day-one-if | checkable |
| Open redirect | the app redirects to an address taken from a link, such as after login | day-one-if | checkable |

## Security · data

File: `security-data.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| TLS | the app is going live on the internet | go-live | checkable |
| Encryption at rest | the app stores highly sensitive data | with-users | checkable |
| Secure cookies | a web app keeps users logged in with cookies | day-one-if | checkable |
| PII minimization | the app collects personal data | day-one-if | checkable |
| Security headers | a web app is going live | go-live | checkable |
| Trusted client IP | the app sits behind a proxy and uses the visitor's address | go-live | checkable |

## Security · abuse & privacy

File: `security-abuse-and-privacy.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Signed device ID | the app must recognise visitors who have no account | with-users | checkable |
| Honeypot | the app is live and being probed | with-users | checkable |
| Audit trail | staff change other people's data, or money moves | with-users | checkable |
| Dependency scanning | every app | day-one | checkable |
| Secret scanning | every app | day-one | checkable |
| Data retention | the app keeps personal data over time | with-users | checkable |
| Consent management | the app tracks visitors where consent is required | go-live | checkable |

## Design for failure

File: `design-for-failure.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Design for failure | the app depends on outside services | day-one-if | practice |
| Bulkheads | one failing part could take down the rest | at-scale | checkable |
| Redundancy | downtime has become costly | at-scale | checkable |
| Error budgets | a team must balance new features against stability | at-scale | practice |
| Chaos testing | the app runs on several machines | at-scale | practice |

## Don't fall over

File: `don-t-fall-over.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Timeouts | the app calls outside services | day-one-if | checkable |
| Retry | the app calls outside services | day-one-if | checkable |
| Circuit breaker | an outside service fails often under real use | with-users | checkable |
| Error handling | every app | day-one | checkable |
| Idempotency | an action must never happen twice, such as a payment, an order or an email | day-one-if | checkable |
| Fallback | a feature should keep working when one part fails | with-users | checkable |
| Graceful degradation | a feature should keep working when one part fails | with-users | checkable |
| Free-first cascade | the app pays per call for data it could often get free | with-users | checkable |
| Concurrency gate | heavy requests arrive faster than the app can serve them | at-scale | checkable |
| Single-flight | many identical requests arrive at once | at-scale | checkable |
| Per-host pacing | the app calls rate-limited outside services heavily | with-users | checkable |
| Quota ledger | several workers share one limited key | at-scale | checkable |
| Load shedding | traffic can exceed capacity | at-scale | checkable |
| Degrade under quota | the app can run out of a paid quota | with-users | checkable |
| Rate limiting | the app is going live with public or costly endpoints | go-live | checkable |

## Staying up: jobs, health & data

File: `staying-up-jobs-health-and-data.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Background jobs | some work takes longer than a few seconds, such as sending email or calling an AI model | day-one-if | checkable |
| Dead-letter queue | background jobs fail under real use | with-users | checkable |
| Idempotent ingest | the app receives messages from other systems | day-one-if | checkable |
| Checkpoints | jobs run for many minutes | with-users | checkable |
| Health probes | the app is live and depends on outside services | with-users | checkable |
| Heartbeats | background workers run unattended | with-users | checkable |
| Race conditions | two requests can change the same thing at once, such as stock, seats or a balance | day-one-if | checkable |
| Optimistic locking | two people can edit the same record | with-users | checkable |
| Backups & restore drills | the app is going live with data worth keeping | go-live | checkable |

## Performance · measure first

File: `performance-measure-first.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Profiling | something is slow and the cause is unknown | with-users | practice |
| Latency percentiles | speed must be measured under real traffic | at-scale | practice |
| Load testing | a traffic spike is expected | at-scale | practice |
| Core Web Vitals | public web pages are going live | go-live | checkable |
| Slow-query monitoring | the database is under real use | with-users | checkable |

## Performance · caching

File: `performance-caching.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Caching | the same costly work is repeated often | with-users | checkable |
| Cache invalidation | the app caches data that changes | with-users | checkable |
| Negative caching | lookups that find nothing are repeated often | at-scale | checkable |
| Dynamic TTL | cached items go stale at different speeds | at-scale | checkable |
| HTTP caching & ETags | clients fetch the same responses repeatedly | at-scale | checkable |
| Semantic caching | many users ask an AI model similar questions | at-scale | checkable |

## Performance · database

File: `performance-database.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Indexing | tables have grown and lookups are slow | with-users | checkable |
| N+1 queries | lists show related data from the database | day-one-if | checkable |
| Query plans (EXPLAIN) | a specific query is slow | with-users | practice |
| Connection pooling | the app is live and opens many database connections | with-users | checkable |
| Read replicas | reads overload one database | at-scale | checkable |
| Materialized views | an expensive report is read often | at-scale | checkable |
| Bulk operations | the app writes many rows at once | with-users | checkable |
| Pagination | a list can grow long | day-one-if | checkable |

## Performance · concurrency

File: `performance-concurrency.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Async I/O | one worker must handle many waits at once | at-scale | checkable |
| Bounded fan-out | the app runs many outside calls in parallel | with-users | checkable |
| Debounce & throttle | the screen fires rapid triggers, such as search while typing | day-one-if | checkable |
| Pre-aggregation | counts and totals are slow to compute live | at-scale | checkable |
| Load leveling | work arrives in spikes | at-scale | checkable |

## Performance · scale out

File: `performance-scale-out.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Load balancing | one server is no longer enough | at-scale | checkable |
| Autoscaling | traffic rises and falls a lot | at-scale | checkable |
| Sharding | one database can no longer hold the data | at-scale | checkable |
| CDN & edge | users are far from the server | with-users | checkable |

## Performance · frontend

File: `performance-frontend.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Code splitting | the first page load has become heavy | with-users | checkable |
| Image optimization | a web app with images is going live | go-live | checkable |
| Compression | a web app is going live | go-live | checkable |

## Observability · signals

File: `observability-signals.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Structured logs | every app | day-one | checkable |
| Error tracking | the app is going live | go-live | checkable |
| Metrics | the app is live and its health must be watched | with-users | checkable |
| Request IDs | a problem must be followed across logs | with-users | checkable |
| New-error alerts | the app is live | with-users | checkable |
| The four golden signals | the app is live and its health must be watched | with-users | practice |

## Observability · dashboards

File: `observability-dashboards.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Per-job metrics | background jobs run under real use | with-users | checkable |
| Business metrics | the app is live | with-users | checkable |
| Uptime monitoring | the app is going live | go-live | checkable |

## Observability · alerting

File: `observability-alerting.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Upstream probes | the app is live and depends on outside services | with-users | checkable |
| Actionable alerts | the app is live and sends alerts | with-users | practice |
| On-call and paging | a team keeps the app running | at-scale | practice |
| Runbooks | the app is live and things have gone wrong before | with-users | practice |

## Observability · cost

File: `observability-cost.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Sampled logging | logs have become too large | at-scale | checkable |
| Upstream call log | the app calls paid outside services | with-users | checkable |
| Per-request cost | each request costs real money | with-users | checkable |
| Cost alerts | the app is going live and uses pay-per-use services | go-live | checkable |

## Observability · operations

File: `observability-operations.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Feature flags | features must be switched without a new release | with-users | checkable |
| Staged rollout | a bad release would hit many users | at-scale | practice |
| Kill switch | a live feature may need to be stopped fast | with-users | checkable |

## AI · fundamentals

File: `ai-fundamentals.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Context window | the term comes up | any | concept |
| Token counting | the term comes up | any | concept |
| Sampling params | the term comes up | any | concept |
| Streaming | users wait on screen for an AI answer | day-one-if | checkable |
| Prompt caching | the app sends the same long prompt often | with-users | checkable |

## AI · tools & output

File: `ai-tools-and-output.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Tool use | the term comes up | any | concept |
| JSON mode | the term comes up | any | concept |
| Structured output | the app's code uses an AI model's answer | day-one-if | checkable |
| Model selection | the app calls an AI model | day-one-if | checkable |
| Non-determinism | the app calls an AI model | day-one-if | checkable |
| Multimodal input | the term comes up | any | concept |

## AI · safety

File: `ai-safety.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Prompt injection | an AI model reads content its user did not write, or can take actions | day-one-if | checkable |
| Jailbreak resistance | the public can chat with the app's AI | with-users | checkable |
| Content moderation | the public can post content or see AI output | with-users | checkable |
| PII redaction | personal data is sent to an AI model | day-one-if | checkable |

## AI · reliability & quality

File: `ai-reliability-and-quality.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Hallucinations | the term comes up | any | concept |
| Output guardrails | AI output triggers actions or is shown as fact | day-one-if | checkable |
| Evals | an AI feature is central to the app | day-one-if | checkable |
| LLM-as-judge | AI output quality must be graded at volume | with-users | checkable |
| A/B testing | there is enough traffic to compare two versions | at-scale | practice |
| LLM tracing | AI features run under real use | with-users | checkable |

## AI · cost control

File: `ai-cost-control.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Budget caps | the app calls a paid AI model | day-one-if | checkable |
| Batch API | large AI jobs can wait for their results | with-users | checkable |
| Model routing | AI costs have become significant | with-users | checkable |
| Unified interface | the app uses more than one AI provider | with-users | checkable |

## AI · retrieval & memory

File: `ai-retrieval-and-memory.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Embeddings | the term comes up | any | concept |
| Vector database | the term comes up | any | concept |
| RAG | an AI model answers from the app's own documents | day-one-if | checkable |
| Chunking | the term comes up | any | concept |
| Citations | an AI model answers from the app's own documents | day-one-if | checkable |
| Conversation memory | the app has an AI chat | day-one-if | checkable |
| Knowledge freshness | the documents an AI model answers from keep changing | with-users | checkable |

## AI · agents & building with AI

File: `ai-agents-and-building-with-ai.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Agent loop | the term comes up | any | concept |
| MCP | the term comes up | any | concept |
| Autonomy guardrails | an AI model in the app can take actions that change things | day-one-if | checkable |
| Context engineering | the term comes up | any | concept |
| AI code review | every app | day-one | practice |
| Verify with AI | every app | day-one | practice |
| Live prompts | prompts need tuning while the app is live | with-users | checkable |
| Prompt versioning | prompts change while the app is live | with-users | checkable |
| Safe templates | users can edit templates the app fills in | with-users | checkable |

## Get paid

File: `get-paid.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Payments | the app takes payments | day-one-if | checkable |
| Webhook fulfilment | the app takes payments | day-one-if | checkable |
| Subscriptions | the app sells subscriptions | day-one-if | checkable |
| Failed payments | the app sells subscriptions | day-one-if | checkable |
| Money as cents | the app stores or calculates money | day-one-if | checkable |

## Features users expect

File: `features-users-expect.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| File uploads | users upload files | day-one-if | checkable |
| Full-text search | users search the app's content | day-one-if | checkable |
| Realtime updates | changes must appear without a refresh | day-one-if | checkable |
| Scheduled jobs | some work runs on a clock | day-one-if | checkable |
| Admin panel | someone must manage the app's data | day-one-if | checkable |

## Usable for everyone

File: `usable-for-everyone.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Accessibility | the app has screens | day-one-if | checkable |
| Responsive design | the app is used on different screen sizes | day-one-if | checkable |
| Screen states | the app has screens that load data | day-one-if | checkable |
| Localization | the app must work in more than one language | day-one-if | checkable |

## Don't ship bugs

File: `don-t-ship-bugs.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Environments | the app is going live | go-live | checkable |
| Store times in UTC | the app stores dates or times | day-one-if | checkable |

## Get the details right

File: `get-the-details-right.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Debugging with AI | every app | day-one | practice |
| Component library | the app has screens | day-one-if | checkable |
| Guessable IDs | ids appear in links or in the API | day-one-if | checkable |
| Account recovery | users log in with a password | day-one-if | checkable |
| Soft delete | users can delete things that matter to them | day-one-if | checkable |

## Ship it & go live

File: `ship-it-and-go-live.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| Testing | every app | day-one | checkable |
| Playwright | the app has screens | day-one-if | checkable |
| CI/CD | the app is going live | go-live | checkable |
| Domain & DNS | the app is going live on the internet | go-live | checkable |

## How your pages show up

File: `how-your-pages-show-up.md`

| Block | Applies when | Stage | Kind |
|---|---|---|---|
| noindex | a web app with private pages is going live | go-live | checkable |
| Social preview | public web pages are going live | go-live | checkable |
