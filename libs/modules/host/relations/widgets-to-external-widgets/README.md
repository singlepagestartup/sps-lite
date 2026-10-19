# Host Widgets To External Widgets Relation

## Purpose

Links host widgets to external module widgets.

AI Chat composition starts from the target Widget's persisted module and ID.
Projects, authentication and Help target RBAC Widgets. RBAC resolves their own
Website Builder content and CRM links; Host does not search a content variant or
global authentication slug. The original project creation card and photograph
remain attached to the selected RBAC Widget. A separate runtime manifest command
performs and can roll back the data cutover without changing Host Page, Layout
or Widget IDs.

Website Builder targets render their stored variant directly. Landing owns its
local interactive demonstration and imports no Social Chat reader. The Navbar
adapter supplies account/project controls and route presentation flags through
children; public Widget record reads do not consume session cookies. Subject
controls own their authenticated client SDK reads.

The external-Widget leaf uses Page variant=url-segment-values and its render
callback once for the selected association. It passes the complete original
`routeParams` map to route-dependent module Widgets. Host adapters select no
business resource keys for those Widgets; unknown keys remain available to
project extensions. Upper Page, Layout and Host Widget components do not drill
the map through their props. Non-Widget navigation Subject controls remain
explicit JSX slots; presentation Widgets receive rendered controls.

RBAC, Blog and Social Widgets select their full routing keys and pass explicit
resource inputs or loaded records to Content and lower model components. Host
has no private Widget registries for these modules or Ecommerce. Blog exposes
renderPrivateContent and renderProduct slots, and Social exposes renderChat and
chatList slots for RBAC-owned operations. Those callbacks resolve within the
same runtime before JSX crosses a client boundary. No lower module imports RBAC.

Purchasing scenarios target RBAC Widgets and their exact Website Builder
presentation links. Product cards, prices and media remain Ecommerce; Subject
owns scoped cart/checkout controls. Relation filters do not reach a target
Widget SDK. Routing maps do not become entity SDK parameters or query keys.

Four existing purchasing configurations transfer through
`tools/runtime/ecommerce-widget-links.ts`. Prepare it with explicit Host link
and source Ecommerce Widget IDs, inspect the before manifest, then apply it.
The active Host association IDs and order stay unchanged. An inactive hidden
association preserves each original seed lookup key. Source Widgets and their links
are retained for rollback. Website Builder copies preserve localized title,
subtitle, description, anchor and className. Repeat application is safe; the
command refuses stale records and writes Host bindings last.

## Fields

- `id`: unique identifier (UUID).
- `createdAt`: creation timestamp.
- `updatedAt`: last update timestamp.
- `variant`: display variant/style.
- `orderIndex`: ordering index for the relation.
- `className`: custom CSS classes.
- `widgetId`: related reference.
- `externalModule`: related reference.
- `externalWidgetId`: related reference.

## Variants

- `default`: renders the related target for this link.
- `hidden`: retains an inactive association without rendering or fetching its
  target. Keep this state for retired seeded links so later seed runs find the
  existing natural key instead of recreating an active duplicate. Active domain
  and presentation compositions still use default; hidden does not select a screen.
- `find`: data-fetch wrapper for querying relations.
- `admin-select-input`: admin UI select input for linking relations.
- `admin-table-row`: admin UI row for relation listings.
- `admin-form`: admin UI create/edit form.
- `admin-table`: admin UI table for browsing relations.
