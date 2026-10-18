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

Page supplies the computed routeParams map through Host Widget composition.
The RBAC adapter loads the exact target and renders its saved variant through
the public RBAC Widget entrypoint with dataSource=props. It has no private RBAC
Widget or Subject registry and no screen-specific branch. RBAC owns the route
key selection, Subject/session wrappers and functional view composition.

Existing Ecommerce Product adapters forward to public RBAC product-card
compositions for compatibility. RBAC provides authenticated cart/checkout
controls to Ecommerce slots. Host retains module integration and pure route
presentation flags; relation filters do not reach a target Widget SDK.

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
