---
sidebar_position: 1
---

# Models

To familiarize yourself with the models that have already been created in Single Page Startup, you need to go to the `Content-Type-Builder` section.

![Strapi Content-Type-Builder Button](./img/strapi-ctb-button.png)

On the opened page, the models and connections available in the project are shown.

![Strapi Content-Type-Builder](./img/strapi-ctb.png)

## Collection Type

Models that are the foundation of the project's business logic should either be linked to other models.

### Currency

The currency model is used in the `Tiers Page Block` and is involved in the business logic of projects inherited from `sps-lite`.

![Currency model](./img/strapi-ct-currency.png)

### Footer

Container model for the footer used on project pages. It contains a Page-Block called `Footer Block`. It was extracted into a model because it may be repeated in different layouts and can be multilingual.

![Footer model](./img/strapi-ct-footer.png)

### Form

Form builder can be multilingual and repeated in different Page-Blocks.

![Form model](./img/strapi-ct-form.png)

### Form Request

Model, an instance of which is created after the user fills out and submits a form on the frontend. It participates in website effects upon form submission, as the data is passed from it to the side effects.

![Form Request model](./img/strapi-ct-form-request.png)

### Layout

Model, based on which the frontend page is displayed. It is a connecting link between the parts of the page - `Navbar`, `Footer`, `Modal` and others.

![Layout model](./img/strapi-ct-layout.png)

### Metatag

Model participating in the formation of `meta-tags` for website pages.

![Metatag model](./img/strapi-ct-metatag.png)

### Modal

Modal window builder used on the website.

![Modal model](./img/strapi-ct-modal.png)

### Navbar

Navigation menu container model used on project pages. The `Navbar Block` is placed inside. It is made into a model because it can be repeated in different `Layouts` and can be multilingual.

![Navbar model](./img/strapi-ct-navbar.png)

### Page

When creating new instances of this model, pages are created that will be available on the frontend at the URL specified in the `url` of the created instance.

![Page model](./img/strapi-ct-page.png)

### Review

Reviews model is used in the `Reviews Block` and `Reviews Table Block` Page-Blocks.

![Review model](./img/strapi-ct-review.png)

### Sidebar

Container model for the sidebar used on project pages. Moved to the model because it can be repeated in different `Layouts` and can be multilingual.

![Sidebar model](./img/strapi-ct-sidebar.png)

### Slide Over

Model of an expandable content block. It is made into a model because it can be repeated in different `Layouts` and can be multilingual.

![Slide Over model](./img/strapi-ct-slide-over.png)

### Slider

Constructor for a content slider.

![Slider model](./img/strapi-ct-slider.png)

### Tier

Subscription level model, used in `Tiers Page Block` and involved in the business logic of `sps-lite` inherited projects.

![Tier model](./img/strapi-ct-tier.png)

### Topbar

Container model for the top bar used on project pages. It was moved to the model because it can be repeated in different `Layouts` and can be multilingual.

![Topbar model](./img/strapi-ct-topbar.png)

### User

The user model is a standard model of the `[Users-Permissions Plugin](https://docs.strapi.io/dev-docs/plugins/users-permissions)`.

![Users-Permissions User model](./img/strapi-ct-up-user.png)

## Single Type

### Configuration

Model for configuring side-effect configuration.

![Configuration model](./img/strapi-st-configuration.png)

### Theme

Model for configuring interface color tokens.

![Theme model](./img/strapi-st-theme.png)

## Components

### Elements

#### Button

Button component

![Button component](./img/strapi-c-e-button.png)

#### Buttons Array

Component for a dropdown list with buttons or just a list of buttons

![Buttons Array component](./img/strapi-c-e-buttons-array.png)

#### Faq

Component for FAQ element used in Page-Block `FAQ Block`

![Faq component](./img/strapi-c-e-faq.png)

#### Feature

Component for the elements used in Page-Blocks `Features Section Block`, `Incentives Block`.

![Feature component](./img/strapi-c-e-feature.png)

#### Input

Component used in the form builder of the `Form` model.

![Input component](./img/strapi-c-e-input.png)

#### Input Option

Variant component used in the input field of the `Form` model constructor.

![Input Option component](./img/strapi-c-e-input-option.png)

#### Logotype

Logo component used in Page-Blocks such as `Footer Block`, `Navbar Block`, and `Logotypes Cloud`.

![Logotype component](./img/strapi-c-e-logotype.png)

#### Reciever

Recipient of side effect result when interacting with the `Form` model.

![Reciever component](./img/strapi-c-e-reciever.png)

#### Request Input

Component used when creating an instance of `Form Request`.

![Request Input component](./img/strapi-c-e-request-input.png)

#### Slide

Slider model of slide builder component `Slider`

![Slide component](./img/strapi-c-e-slide.png)

#### Config

Element used in creating a `Configuration` model

![Config component](./img/strapi-c-e-config.png)

#### Form Side Effect

Element for configuring side effects when creating a `Form` model.

![Form Side Effect component](./img/strapi-c-e-form-side-effect.png)

### Page-blocks

#### CTA Section Block

![CTA Section Block](./img/strapi-c-pb-cta-section-block.png)

#### Contact Section Block

![Contact Section Block](./img/strapi-c-pb-contact-section-block.png)

#### Faqs Block

![Faqs Block](./img/strapi-c-pb-faqs-block.png)

#### Features Section Block

![Features Section Block](./img/strapi-c-pb-features-section-block.png)

#### Footer Block

![Footer Block](./img/strapi-c-pb-footer-block.png)

#### Header Section Block

![Header Section Block](./img/strapi-c-pb-header-section-block.png)

#### Hero Section Block

![Hero Section Block](./img/strapi-c-pb-hero-section-block.png)

#### Incentives Block

![Incentives Block](./img/strapi-c-pb-incentives-block.png)

#### Logotypes Cloud Block

![Logotypes Cloud Block](./img/strapi-c-pb-logotypes-cloud-block.png)

#### Navbar Block

![Navbar Block](./img/strapi-c-pb-navbar-block.png)

#### Not Found Block

![Not Found Block](./img/strapi-c-pb-not-found-block.png)

#### Pricing Block

![Pricing Block](./img/strapi-c-pb-pricing-block.png)

#### Reviews Block

![Reviews Block](./img/strapi-c-pb-reviews-block.png)

#### Reviews Table Block

![Reviews Table Block](./img/strapi-c-pb-reviews-table-block.png)

#### Slider Block

![Slider Block](./img/strapi-c-pb-slider-block.png)
