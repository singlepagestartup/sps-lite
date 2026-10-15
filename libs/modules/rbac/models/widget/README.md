# RBAC Widget Model

## Purpose

RBAC widgets provide reusable content blocks for access and account flows.

## Fields

- `id`: unique identifier (UUID).
- `className`: optional CSS class name.
- `title`: localized title.
- `subtitle`: localized subtitle.
- `description`: localized description.
- `createdAt`: creation timestamp.
- `updatedAt`: last update timestamp.
- `variant`: display variant.
- `adminTitle`: title used in admin UI.
- `slug`: URL-friendly unique identifier.

## Variants

- `subject-me-profile-settings`: account sections composed from separate Subject Profile, avatar, Identity and purchase components.
- `subject-me-social-module-profile-create-ai-chat`: authenticated project chooser and creation flow. Host passes the persisted Website Builder creation Widget as `projectCreateWidget`. The chooser renders project links; Create project opens the original `content-ai-chat-profile-create` card with its photograph, copy and Subject form. Back to projects returns to the chooser.
- `subject-me-social-module-profile-id-settings-ai-chat`: project settings for explicit Profile/Chat IDs supplied by Host.
- `subject-me-social-module-profile-id-chat-id-thread-create-ai-chat`: Thread creation within a selected, connected project.
- `subject-me-social-module-profile-id-chat-id-thread-id-ai-chat`: connected-project guard and Social Profile → Chat → Thread composition. Subject components provide messages, composer, Knowledge editors and document export.
- `subject-me-authentication-*-ai-chat`: separate authentication pages with a Website Builder content slot and the corresponding Subject form.

AI Chat Widgets use server authentication and project readers for their initial
composition. Interactive Subject forms and Thread panes remain client
components. Navbar and Footer are linked through Host Layout data. Route IDs
come from Host adapters; these Widgets do not select screens from URL strings.

Landing and Help composition belongs to Host `widgets-to-external-widgets`.
Their persisted targets are Website Builder Widgets. Host supplies the Social
Chat demonstration to Landing and the authenticated Subject support form to
Help through children slots.

- `default`: placeholder widget view.
- `find`: data-fetch wrapper for querying widgets.
- `admin-form`: admin create/edit form for localized fields and metadata.
- `admin-select-input`: admin select input for choosing a widget.
- `admin-table`: admin table listing widgets.
- `admin-table-row`: admin row showing widget fields.
