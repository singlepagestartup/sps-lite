# Website Builder Widget Model

## Purpose

Widgets store reusable content blocks (text, media, structured sections) for building UI sections.

## Fields

- `title`: widget title (localized).
- `subtitle`: widget subtitle (localized).
- `description`: widget description/content (localized, rich text).
- `anchor`: HTML anchor for in-page navigation.
- `className`: custom CSS classes.
- `id`: unique identifier (UUID).
- `createdAt`: creation timestamp.
- `updatedAt`: last update timestamp.
- `variant`: display variant/style.
- `adminTitle`: title shown in admin interface.
- `slug`: URL-friendly unique identifier.

## Variants

- `content-ai-chat-profile-create`: project creation card with a form slot and project-start image.
- `content-ai-chat-materials-processing`: expandable materials-processing disclosure.
- `content-ai-chat-help`: support-page heading, support card with its own title and icon, form slot and response information. The Widget receives its persisted data through the owning RBAC Widget relation and renders the Subject/CRM form supplied as children.
- `content-ai-chat-authentication`: sign-in introduction, imagery and aside with an RBAC form slot.
- `content-ai-chat-registration`: registration presentation with two images and its own RBAC form slot.
- `content-ai-chat-forgot-password`: password recovery presentation with its own RBAC form slot.
- `content-ai-chat-reset-password`: password reset presentation with its own RBAC form slot.
- `navbar-ai-chat`: server navigation presentation with children for project and account controls composed by Host. Host supplies `language` and `helpSelected`; the Widget does not receive or parse the current Page URL.
- `footer-ai-chat`: server footer presentation with locale-aware destinations.
- `landing-ai-chat`: landing presentation with its own local interactive demonstration. The walkthrough uses prepared copy and local state without a Social Chat record, API writes or AI calls. It imports no Social or RBAC components.

- `default`: sample component, for debugging.
- `content-default`: rich content sections (article-like text blocks).
- `footer-default`: site footer layout (links, navigation, legal).
- `navbar-default`: site header/navigation bar (menus, branding).
- `find`: internal data-fetch wrapper for queries; not used directly on pages.
- `admin-select-input`: admin UI select input for linking widgets.
- `admin-table-row`: admin UI row for widget listings.
- `admin-form`: admin UI create/edit form.
- `admin-table`: admin UI table for browsing widgets.

## Presentation ownership

These variants render content and JSX slots without loading a Subject, choosing
its form or receiving a business mode. RBAC owns those operations and selects
an exact presentation through its default Widget relation. The authentication
family shares a stateless layout within Website Builder. Localized title,
subtitle and description override its default heading, introduction and aside
body. Default images and supplementary copy remain variant-owned presentation;
CMS migration of those defaults to linked media/content is a separate follow-up.

## Ecommerce presentation

`content-ecommerce-default` renders the saved localized title, subtitle,
description, anchor and className around a rendered children slot. RBAC Widget
variants own catalog and purchase composition and select this exact record
through their default Widget relation. This presentation imports no RBAC or
Ecommerce models and performs no session, cart or order reads.
