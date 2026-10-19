# Social Widget Model

## Purpose

Social widgets provide layout wrappers for profile and chat views.

## Fields

- `id`: unique identifier (UUID).
- `createdAt`: creation timestamp.
- `updatedAt`: last update timestamp.
- `className`: optional CSS class name.
- `variant`: display variant.
- `title`: localized title.
- `subtitle`: localized subtitle.
- `description`: localized description.
- `adminTitle`: title used in admin UI.
- `slug`: URL-friendly unique identifier.

## Variants

- `default`: placeholder widget view.
- `profile-overview-default`: card layout wrapper for profile overview content.
- `chat-list-default`: wrapper for chat list content.
- `chat-overview-default`: wrapper for chat overview content.
- `find`: data-fetch wrapper for querying widgets.
- `admin-form`: admin create/edit form for localized fields and metadata.
- `admin-select-input`: admin select input for choosing a widget.
- `admin-table`: admin table listing widgets.
- `admin-table-row`: admin row showing widget fields.

## Page context and authenticated slots

Profile overview selects `social.profiles.slug` from readonly routeParams and
loads the Profile through its model reader. Chat overview selects
`social.chats.id` and `social.threads.id`, then calls renderChat with explicit
chatId/threadId. A missing Chat ID does not invoke that slot. Chat list accepts
a rendered chatList slot. Host supplies RBAC-owned Chat operations through these
slots; Social imports no RBAC code. Upper routing context is not passed to the
model or Subject readers. Saved Widget records, localized content and relation
IDs are unchanged.
