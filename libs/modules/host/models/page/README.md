# Host Page Model

## Purpose

Pages represent routable site pages and act as containers for layouts, widgets,
and metadata. The default variant assembles layout structure and in-page widgets
for the page. Page resolves the Layout's default and additional Widget links,
composes their Host Widgets with the current route, and supplies ready nodes to
the Layout. The Layout and its relation presenters receive no URL. Page resolves all named URL values once and forwards routeParams through Host
Widget composition. Domain Widgets select their own required keys; Host retains
presentation flags without interpreting business screens.

## Fields

- `id`: unique identifier (UUID).
- `title`: page title.
- `url`: page URL path.
- `description`: page description.
- `createdAt`: creation timestamp.
- `updatedAt`: last update timestamp.
- `variant`: display variant/style.
- `className`: custom CSS classes.
- `language`: language code.
- `adminTitle`: title shown in admin interface.

## Variants

- `default`: renders page layouts and page widgets for the current page.
- `find`: data-fetch wrapper for querying pages.
- `find-by-url`: resolves a page by URL path (routing helper).
- `url-segment-value`: exposes URL segment values for routing.
- `admin-select-input`: admin UI select input for linking pages.
- `admin-table-row`: admin UI row for page listings.
- `admin-form`: admin UI create/edit form.
- `admin-table`: admin UI table for browsing pages.

## URL lookup cache

The client `findByUrl` query key includes the URL and query parameters, so
different destinations have separate entries. Both URL lookup readers subscribe
to Page changes through `host.pages`.

HTTP response caching excludes `find-by-url`, `url-segment-value` and `urls`.
These operations expand Page masks against other modules' records; a fixed
Page-only cache topic cannot describe all changes to dynamic route values.
The exclusions are defined in
`libs/middlewares/src/lib/http-cache/routes/singlepage.ts`.

## Resolved route parameters

`findByUrl` returns `IResolvedPage`: the saved Page plus a computed routeParams
map. Full placeholder names from Page.url are the keys; values retain their
encoded pathname representation. The field is not stored in the Page table.
Static pages return an empty map. Locale is removed by the Host entrypoint and
passed separately. Query/hash do not become route parameters.

Page passes the same map to page and layout Widgets; domain components consume
it through explicit UI props. A profile/chat/thread screen no longer makes
three nested URL lookups. The scalar urlSegmentValue API and its client/server
component remain supported for external consumers and use the common parser.
Legacy partial-name selection remains; an unrelated missing key returns null,
including on a route with omitted pagination.

Route parsing does not validate resource access. Existing Page resolution and
scoped backend authorization remain active; this change does not replace
withUrls/urls expansion or enable legacy caching for those dependent reads.
