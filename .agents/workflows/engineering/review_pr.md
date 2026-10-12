---
description: Review PRs and local diffs for SPS dependency boundaries, API/cache consistency, and concrete behavior risks.
---

# Review a pull request

Review the selected diff and the paths it changes. Report the behavior at risk,
its trigger, and the evidence the developer needs to choose a fix or an
exception. Reviewing does not authorize implementation, publication of GitHub
comments, Project transitions, approval, or merge.

## Scope and evidence

Use the requested PR, base branch, commit, or uncommitted diff. Record the
revision and comparison base when available. Reuse relevant ticket, process,
research, and plan artifacts under the repository-context and knowledge-first
contracts; verify their load-bearing claims against the selected revision.

Read root guidance, then the changed module and entity READMEs. Follow unchanged
callers, middleware, relations, and consumers only as needed to establish a
finding. If the code conflicts with its documentation, report the mismatch and
identify which behavior the current implementation provides.

A module-level import graph is a starting point. Distinguish schema references,
type imports, frontend composition, SDK calls, and backend execution before
calling an edge a runtime cycle or a forbidden dependency. An existing pattern
is evidence of current practice, not automatic permission to repeat it.

## Dependency boundaries

Keep these orders separate:

- **Backend execution:** controller/handler → service → repository → database
  or storage provider. App/bootstrap owns composition and DI. Route middleware
  belongs to its module middleware package; global middleware is assembled in
  `apps/api/app.ts`.
- **Domain ownership:** a consuming model or orchestration service depends on
  the lower capability it uses. Check the applicable module README for the
  established direction. File Storage owns stored bytes and File records;
  Knowledge owns Source reconstruction. Ecommerce owns reusable commerce data;
  RBAC subject surfaces own authenticated commerce orchestration.
- **Framework inheritance:** `singlepage` supplies the base, `startup` extends
  or overrides it, and the public entrypoint exposes the effective result.
  Do not confuse the `startup` business module with that extension layer.

The established boundaries include Knowledge → File Storage and RBAC subject →
Ecommerce. Flag a new reverse dependency with the concrete path and consequence.
Keep domain rules out of the global permission resolver. Shared primitives and
storage providers must not acquire domain orchestration responsibilities;
global middleware and host/widget composition are integration code and need
their own dependency analysis.

Model associations use explicit relation packages. Trace relation ownership,
foreign keys, cascades, and consumers when an association changes. A deletion
can affect more models than its returned entity describes.

Frontend and external callers use model/relation SDK providers. Backend DI
composition is already documented for Broadcast hot paths and the RBAC
permission resolver. For any direct service, repository, or SQL call, establish
which API-boundary responsibilities it bypasses and how those responsibilities
are fulfilled. Preserve transaction and partial-failure semantics when
considering a replacement with separate HTTP calls. Do not report a direct
read or a documented DI call as a cache bug without tracing its actual effect.

An inferred or proposed module order becomes mandatory only after operator
confirmation. Until then, use verified module boundaries and report unclear
ownership as a decision to resolve, with evidence; do not impose a guessed
linear hierarchy or silently expand the accepted exception.

## API and cache review

Check cache behavior for changed API routes, SDK requests, backend mutations,
and their readers. Also check a job or CLI mutation when it affects data served
by the API: it has no outer HTTP middleware by default.

1. **Read scope.** Determine whether the GET is cached, excluded, or explicitly
   sent with `Cache-Control: no-store`. The HTTP-cache key is identity-blind;
   authenticated or ownership-scoped responses require an effective exclusion
   or request header. A fetch `cache: "no-store"` option controls its own cache
   and does not by itself bypass SPS HTTP caching. Inspect the actual options
   and headers reaching each cache boundary.
2. **Write scope.** List every model and relation changed, including cascades,
   derived records, and index markers. Compare that list with the external
   mutation route's resolved topics and the cached readers' topics. API entry
   alone does not guarantee coverage of nested writes. A direct DB transaction
   does not run another model's HTTP middleware. Custom aliases, aggregate/RPC
   routes, and background writes need an explicit path to the affected readers.
3. **Ordering.** Verify that HTTP-cache generation bumps complete before the
   WebSocket notification permits an immediate refetch. Hono's post-`next()`
   execution is inner-first: RevalidationMiddleware is registered before
   HTTPCacheMiddleware in `apps/api/app.ts`. Cache failure behavior is also part
   of the documented contract; bounded stale reads after a failed version bump
   are an accepted fallback, not evidence that every KV failure requires a new
   architecture.
4. **Client consistency.** Factory SDKs supply topics and cache handling.
   Hand-written queries need appropriate `meta.topics`, subscription cleanup,
   and preserved option merging. Hand-written mutations keep shared list-cache
   patching, count/detail handling where applicable, internal success callbacks,
   and WebSocket reconciliation. A local cache patch cannot update another
   client's cache or repair a stale server response.
5. **Other cache boundaries.** When the changed flow uses cached server rendering
   or an aggregate query, inspect its tags, revalidation, keys, filters, and
   pagination. Include service-level memory caches when the changed operation
   uses them. Compare readers with mutation effects instead of assuming that
   one model's invalidation covers every derived result.

Flag a missing or incorrect cache path as a finding even if the data write
succeeds. Name the setting, request, and reader that make the problem observable.
For a suspected stale-data regression, meaningful verification warms the GET,
performs the mutation, then repeats the GET and checks a second subscribed
client. Include creation, update, deletion, and relation changes only where the
diff affects them. Disabled-cache or `no-store` runs are controls, not proof of
cache correctness. When verification is unavailable, say which part is proved
by code and which still needs reproduction.

## Other applicable repository rules

Load the source that governs the change rather than copying its whole checklist:

| Change                           | Source and review focus                                                                                                                                                                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API routes, DI, authorization    | Root and module READMEs; RBAC authorization layering; boundary guards, ownership scope, middleware registration, and transport/transaction effects                                                                                                                                     |
| Queries, mutations, realtime     | `libs/shared/frontend/client/api/README.md`, `libs/middlewares/src/lib/http-cache/README.md`, `libs/middlewares/src/lib/revalidation/README.md`; full cache and subscriber consistency                                                                                                 |
| Model/relation schemas           | Root instructions and entity README; relation ownership, cascading impact, Drizzle `repository-generate`, and runtime behavior instead of data-snapshot edits                                                                                                                          |
| Frontend variants                | `.agents/contracts/engineering/frontend-components.md`, root Code Review Checklist and applicable entity docs; template and Provider ownership, runtime props at RSC boundaries, JSX slots, SDK/relation data flow, memoized rows, per-item pending state, and lowest-level `useWatch` |
| File placement                   | `.agents/contracts/engineering/code-placement.md`; reuse an existing home and avoid a file beside a folder with the same name                                                                                                                                                          |
| Studio or downstream inheritance | `.agents/workflows/design-to-implementation.md`, `.agents/contracts/inheritance.md`, and applicable Studio docs; source ownership, production data flow, and isolation of prototype material                                                                                           |
| Tests and validation             | Root BDD/scoped-testing convention and the change's real consumer; observable behavior, relevant integration/scenario coverage, and explicit gaps                                                                                                                                      |

Keep deterministic lint/format failures in normal checks. Include a convention
in the review findings when its violation creates a concrete behavior,
compatibility, or maintenance problem. Cursor rules are supporting context;
verify them against canonical guidance and code, especially middleware order.

## Findings and developer decisions

Lead with actionable findings in impact order. For each finding provide:

- A concise title, affected file/line, and the changed behavior or activated
  pre-existing risk.
- The triggering operation/configuration, expected result, actual result, and
  affected users or consumers.
- Evidence level: reproduced, established code path, or a hypothesis requiring
  verification. Do not turn an unsupported hypothesis into a confirmed bug.
- Likelihood/frequency when supported by usage or code; otherwise mark it
  unknown. Consider consequence, duration, and exposure as well as frequency.
- The smallest relevant correction or verification, and any documented
  exception that changes the recommendation. A finding may justify an issue
  or a local invalidation fix instead of a module-wide rewrite.

The developer chooses fix now, defer to an issue, or accept a bounded exception.
Temporary code and infrequent cases can remain when the reason and affected
conditions are documented. A frequent, reproducible failure on a used path
supports a stronger correction. Do not assume rare usage without evidence or
treat an exception as an automatic waiver of a serious consequence.

Keep accepted exceptions visible with their limits and revisit condition.
Report remaining verification gaps separately. If there are no findings, state
the reviewed scope and material limitations without claiming universal safety.

## Final editorial pass

Before returning or saving review prose, apply
`.agents/contracts/editorial-pass.md` with
`.agents/references/unslop-patterns.md`. Preserve evidence, uncertainty, code
references, and the developer's decision authority.
