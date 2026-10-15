## Summary

Bring the Studio AI Chat model composition into the production Host: authenticated project selection and creation, document workspaces, account settings, attachments and confirmed Knowledge edits. The final review also fixes stale caches, authorization-option loss and document-confirmation races.

The project chooser preserves the original photographic creation form. Telegram bot conversations remain under Agent and `apps/telegram`; only the unused Telegram business module is removed.

## Changes

- Extend Studio module/model variants, public registries, independent fixtures/assets and explicit Host Page/Layout composition. Update catalog generation, Storybook states, copy publication and raw preview asset handling. Directory moves account for much of the diff.
- Compose production AI Chat through Host, RBAC Subject, Social Profile/Chat/Thread and Knowledge Source components. Preserve scoped access, ordinary-account provisioning, the shared token balance, separate assistant Skills and five document threads. AI Chat is the homepage; project and account links retain the locale.
- Keep specialized data reads in typed local client/server readers with one Provider owner. Register public variants, preserve SDK options and use explicit serializable UI props and JSX slots. Restore the creation card inside the chooser rather than replacing its form.
- Add exact-draft proposals, paginated Knowledge reads, attachment ordering/previews, scoped file changes and conditional Source updates. Confirmation claims survive interrupted requests; retries reconcile committed text and Files, concurrent confirmations reuse one Source, and known conflicts permit revision without claiming partial saves were undone.
- Preserve full AI context as the default. Compact-context support includes token estimates, summary billing, exact recent exchanges/drafts, scoped history/media tools and compare-and-set Thread metadata. Provider usage and request billing remain explicit.
- Repair detail/count cache updates, caller metadata and realtime subscriptions. Order totals cover all price dependencies; dynamic Host URL lookup responses bypass HTTP caching, and URL query keys include their inputs. React Query owns API results; the global action snapshot is debug-only.
- Confirm and enforce the fifteen-module dependency order, including type imports and reexports. Move author/article composition above Blog and authenticated commerce orchestration above Ecommerce. Remove `libs/modules/telegram`, its registrations and generator choices while keeping the bot transport and runtime ownership.
- Avoid enumerating every entity URL during Host static-path generation. Support both Turbopack file font URLs and Webpack relative static-media URLs. Scope the deploy workflow's MCP output environment to the service step.

## Verification

- [x] Main review checkpoint: `npm run test:unit:scoped -- --maxWorkers=2` — 23 projects, 286 suites, 1,254 tests passed. Subsequent form/font changes have the focused and production checks below.
- [x] `test:integration:scoped -- --maxWorkers=1` with local PostgreSQL — 16 projects, 24 suites, 71 tests passed; one existing Social suite with five tests remains skipped.
- [x] Dedicated PostgreSQL document/context fixtures and Knowledge transactions, including six concurrent first-Source upserts, missing Files and conditional-write recovery; Telegram transport tests passed.
- [x] Final project chooser/form and Host routing regressions — 60 tests passed; Host and Studio TypeScript checks passed.
- [x] Studio design-system tests — 95 passed; registry rebuilds preserve 429 keys in 63 models. Studio manifests, publisher check and Storybook production build passed.
- [x] Latest full Webpack production build and local `next start`; text PNG generation returned 200 with identical dev/production bytes. Temporary build/server were removed.
- [x] Browser smoke: authenticated workspace, account settings, purchases, project chooser → original photographic creation form → chooser; no browser warning/error logs in the checked paths.
- [x] Static module audit found no upward direct or shared/provider-mediated imports. Prettier, code-placement and diff checks passed.
- [ ] Repository-wide API TypeScript remains red with 22 diagnostics in lines present in the comparison base; no additional diagnostic file/code/message appeared during these fixes.
- [ ] Recheck live WebSocket transport with two clients and Redis. Store → subscription → QueryObserver and warmed HTTP-cache invalidation were tested separately.
- [ ] Manual review of complete ordinary-account registration/project/AI-confirmation flows and payment/account-deletion paths. The destructive fixed-Subject scenario suites and real OpenRouter scenario were not rerun in this pass.

## Notes

- The branch now includes `main`. The duplicate Studio histories were reconciled by comparing the equivalent checkpoint and stable patch IDs; conflict resolution preserves the reviewed application tree. GitHub rejects a full patch download above 300 files for this PR. Use the local `git diff origin/main...origin/codex/studio-host-models` for the complete diff.
- Review entry points: [review findings and checks](https://github.com/singlepagestartup/singlepagestartup/blob/codex/studio-host-models/thoughts/shared/research/singlepagestartup/2026-10-15-branch-code-review-followup.md), [implementation and runtime evidence](https://github.com/singlepagestartup/singlepagestartup/blob/codex/studio-host-models/thoughts/shared/processes/singlepagestartup/ISSUE-ai-chat-production-integration.md), and [module dependency contract](https://github.com/singlepagestartup/singlepagestartup/blob/codex/studio-host-models/.agents/contracts/engineering/module-dependencies.md).
- Earlier commits include database snapshots and uploaded-material fixtures. Treat them as explicit data-management inputs, not automatic tenant migrations. The final fixes do not edit snapshots to implement behavior. Removing the Telegram module adds no migration that deletes legacy database tables.
- Compact context stays opt-in; the recorded acceptance comparison is incomplete. Local production runtime was verified; a full Docker deployment was not performed. The existing Node server `localStorage.getItem` diagnostic remains outside the font fix.
- Changelog: AI Chat gains a scoped project/document workspace, resilient confirmed Knowledge edits and consistent frontend/cache behavior; Studio and code review follow the same module and component contracts.

## Downstream migration

Owned overrides and data require review even after a clean merge:

1. Preserve flat Studio model paths and direct model props; reconcile owned public registries, manifests, Figma bindings and publisher outputs. Preserve startup overrides, project facts and local assets; adapt retired account/navigation exports to their current Subject/Host owners.
2. Apply the confirmed module order to owned imports, including types and barrels. Replace Telegram business-module APIs/widgets before removing that dependency; preserve Agent bot conversations, `apps/telegram`, RBAC scope, Notification delivery and existing tenant records. Keep Social/Blog and RBAC/Ecommerce composition in their higher owners.
3. Adapt owned production variants to the canonical reader/Provider and client-boundary contract. Preserve the chooser and original creation card, pass its persisted Widget as `projectCreateWidget`, and remove the superseded `appearance="projects"` bypass. Preserve scoped SDK headers, cache metadata, detail/count patches, aggregate topics and realtime reconciliation.
4. Adapt owned AI handlers to the public context factory, namespace compare-and-set writes, exact drafts, paginated reads and summary billing. Install the locked Sharp/js-tiktoken dependencies. Reconcile the final model policy instead of restoring retired generative router-plugin behavior; preserve JEV decision/retrieval responsibilities and keep full context as the default.
5. Reconcile runtime provisioning with each project's actual owners, assistants, five independent Skills, document threads and grants. If using the free allowance, configure the runtime zero-price daily subscription and 3,000-token top-up through explicit management flows; preserve existing subscription terms. Do not copy instance IDs or overwrite edited instructions from snapshots.
6. Treat pending proposals with `confirmationMessageId` as applying claims. Keep conditional Source/attachment writes and idempotent links, retry unknown commit outcomes, expose partial saves, and allow revision for known conflicts. Preserve owned data and original Files.
7. Keep entity URL masks resolved on demand. Preserve both bundled-font representations and deployment static-volume synchronization. Run affected module/unit/PostgreSQL checks, exercise scoped and cross-client cache refresh, verify project navigation and confirmation recovery, and check both dev and production font rendering before release.
