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

## Ecommerce scenarios

- `subject-me-ecommerce-module-product-list-default`: catalog with current-Subject purchase actions.
- `subject-me-ecommerce-module-product-overview-default`: one Product selected from `routeParams["ecommerce.products.slug"]`.
- `subject-me-ecommerce-module-category-overview-default`: Category products and their Store-specific purchase actions, selected from `routeParams["ecommerce.categories.slug"]`.
- `subject-me-ecommerce-module-store-overview-default`: Store products and purchase actions, selected from `routeParams["ecommerce.stores.slug"]`.

Each uses the public Widget reader and its own default
widgets-to-website-builder-module-widgets association. The linked
`content-ecommerce-default` Website Builder Widget owns the block layout and
editable copy. Product cards, attributes and media remain in Ecommerce;
Subject variants provide the session and scoped cart operations. Host forwards
the complete `routeParams` map from Page's render callback without selecting
resource keys. Each Widget selects its own keys and passes explicit props to
its Content and Subject views. Host holds no scenario registry.

## Variants

- `subject-me-profile-settings`: account sections composed from separate Subject Profile, avatar, Identity and purchase components.
- `subject-me-social-module-profile-create-ai-chat`: authenticated project chooser and creation flow. Its own `widgets-to-website-builder-module-widgets` link selects the persisted Website Builder creation card. The chooser renders project links; Create project opens the original `content-ai-chat-profile-create` card with its photograph, copy and Subject form. Back to projects returns to the chooser.
- `subject-me-social-module-profile-id-settings-ai-chat`: project settings for the Profile/Chat selected from routeParams.
- `subject-me-social-module-profile-id-chat-id-thread-create-ai-chat`: Thread creation within a selected, connected project.
- `subject-me-social-module-profile-id-chat-id-thread-id-ai-chat`: connected-project guard and Social Profile → Chat → Thread composition. Subject components provide messages, composer, Knowledge editors and document export.
- `subject-me-authentication-*-ai-chat`: separate authentication pages whose own Widget relation selects the Website Builder frame, containing the corresponding Subject form.

AI Chat Widgets use the shared model reader. Auth, project list/create and Help
read content links by their own Widget ID; the default relation resolves the exact Website
Builder record and forwards the rendered form slot. Interactive Subject forms
retain their authenticated SDK scope. Route IDs and locale come from Host;
Widgets do not select another instance from URL strings, variants or global
content slugs.

- `subject-me-crm-module-form-support-ai-chat`: Help owns an explicit Website
  Builder content link and an explicit CRM Widget link. The latter's
  `widgets-to-forms` selects the exact `crmModuleFormId` passed to the Subject.
  Form → Step → Input owns the fields; RBAC owns authenticated submission.

The admin-v2 Widget form exposes Website Builder and CRM relation tabs. Missing,
duplicate AI Chat content links report a configuration error.
The project chooser keeps the original creation photograph, copy and form.

Landing's interactive walkthrough belongs to Website Builder and needs no
Social Chat record. Host forwards Navbar presentation flags; RBAC Subject owns
the session, project selector and account controls.

- `default`: placeholder widget view.
- `find`: data-fetch wrapper for querying widgets.
- `admin-form`: admin create/edit form for localized fields and metadata.
- `admin-select-input`: admin select input for choosing a widget.
- `admin-table`: admin table listing widgets.
- `admin-table-row`: admin row showing widget fields.

## Functional and presentation composition

Authentication, registration, recovery, project creation and support use their
own RBAC Widget variants. Each reads its saved Widget links by widgetId and
renders the standard default relation. The linked Website Builder variant owns
its layout and content; the RBAC variant supplies its Subject form as children.
There is no relation-specific business mode. Sign-in, registration, forgot and
reset password have independent Website Builder presentations and may share a
stateless layout inside that model. A stored copy/image change does not add a
new RBAC variant. Shared content is forked before assigning distinct layouts,
so changing registration does not alter sign-in.

### Page context and migrated compositions

AI Chat workspace/settings Widgets accept `routeParams` and select
`social.profiles.id`, `social.chats.id` and `social.threads.id`. Subject overview
and product views select `rbac.subjects.slug`; Ecommerce views select their full
Ecommerce keys. The neutral readonly `IRouteParams` type comes from shared route
utilities. Client views and Content receive explicit resource props, never the
map. A missing required value cannot become an unfiltered collection read.
Host resolves Page through its render-reader and passes the original map to the
public saved Widget variant. RBAC imports no Host reader and does not add the
map to SDK query keys. Standalone callers supply the same routing context.
Legacy Subject list/overview, identity settings and product/order compositions
also live here; their functional Content sits beside the owning Widget view.
The saved Widget IDs, localized content and relation records are unchanged.
