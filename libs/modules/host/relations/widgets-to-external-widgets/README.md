# Host Widgets To External Widgets Relation

## Purpose

Links host widgets to external module widgets.

AI Chat composition uses the target Widget's persisted variant in `default`.
The Website Builder `navbar-ai-chat` adapter supplies RBAC account and project
selectors through the Widget's children. The project-creation and Help adapters
supply their RBAC forms to Website Builder content slots.
Help composes Subject authentication and its support form directly in the Host
adapter. The persisted Website Builder Help Widget owns the support card; its
child slot receives the RBAC form, which loads the CRM Form through its SDK.
Landing receives the Social Chat demonstration through its children
slot. Website Builder owns their presentation, and the Host adapter owns these
cross-module imports.

The three Profile/Chat/Thread screen adapters resolve IDs through Host Page
`url-segment-value`, using the page mask stored in the database. They pass those
IDs and the locale to RBAC Widgets. The Navbar adapter supplies `helpSelected`
to Website Builder and `settingsSelected` to the Subject account menu. The raw
Page URL remains in Host; external Widgets receive model IDs, locale and
presentation flags. Host relation filters stay on the relation reader and are
not forwarded to a target Widget's SDK.

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
- `find`: data-fetch wrapper for querying relations.
- `admin-select-input`: admin UI select input for linking relations.
- `admin-table-row`: admin UI row for relation listings.
- `admin-form`: admin UI create/edit form.
- `admin-table`: admin UI table for browsing relations.
