---
sidebar_position: 3
---

# Разработка

## Панель адмнистрирования

После запуска проекта станет доступна панель администрирования по адресу [http://127.0.0.1:1337/admin](http://127.0.0.1:1337/admin). При первом посещении необходимо создать администратора.

![Strapi login](./img/strapi-login.png)

После создания пользователя и входа в аккаунт откроется главная страница панели администрирования Strapi. Подробную информация о том что такое Strapi можно узнать в [Официальной документации](https://docs.strapi.io/dev-docs/quick-start).

![Strapi main](./img/strapi-main.png)

## Модели

Для того, чтобы ознакомиться с моделями, которые уже созданы в Single Page Startup нужно перейти в раздел `Content-Type-Builder`

![Strapi Content-Type-Builder Button](./img/strapi-ctb-button.png)

На открывшейся страницы показано какие модели и связи имеются в проекте.

![Strapi Content-Type-Builder](./img/strapi-ctb.png)

### Collection Type

Модели, которые являются основой бизнес логики проекта, либо должны быть связаны с другими моделями.

#### Currency

Модель валют, используется в `Tiers Page Block` и участвует в бизнес логике проектов, наследуемых от `sps-lite`.

![Currency model](./img/strapi-ct-currency.png)

#### Footer

Модель контейнера футера, который используется на страницах проекта. В него помещается Page-Block `Footer Block`. Вынесен в модель потому что может повторяться в разных `Layout` и может быть мультиязычным.

![Footer model](./img/strapi-ct-footer.png)

#### Form

Конструктор форм, может быть мультиязычной и повторяться в разных Page-Block.

![Form model](./img/strapi-ct-form.png)

#### Form Request

Модель, экземпляр которой создается после того, как пользователь заполнил и отправил форму на фронтенде. Участвует в сайт-эффектах на отправку формы, так как данные в сайд-эффекты передаются из нее.

![Form Request model](./img/strapi-ct-form-request.png)

#### Layout

Модель, на основе которой отображается страница на фронтенде. Является связующим звеном частей страницы - `Navbar`, `Footer`, `Modal` и других.

![Layout model](./img/strapi-ct-layout.png)

#### Metatag

Модель участвующая в формировании `meta-тегов` страниц сайта.

![Metatag model](./img/strapi-ct-metatag.png)

#### Modal

Конструктор модальных окон, используемых на сайте.

![Modal model](./img/strapi-ct-modal.png)

#### Navbar

Модель контейнера навигационного меню, который используется на страницах проекта. В него помещается Page-Block `Navbar Block`. Вынесен в модель потому что может повторяться в разных `Layout` и может быть мультиязычным.

![Navbar model](./img/strapi-ct-navbar.png)

#### Page

Модель страниц, создавая новые экземпляры данной модели создаются страницы, которые будут доступны на фронтенде по адресу, указанному в `url` создаваемого экземпляра.

![Page model](./img/strapi-ct-page.png)

#### Review

Модель отзывов, используется в Page-Block `Reviews Block` и `Reviews Table Block`.

![Review model](./img/strapi-ct-review.png)

#### Sidebar

Модель контейнера сайдбара, который используется на страницах проекта. Вынесен в модель потому что может повторяться в разных `Layout` и может быть мультиязычным.

![Sidebar model](./img/strapi-ct-sidebar.png)

#### Slide Over

Модель выезжающего блока с контентом. Вынесен в модель потому что может повторяться в разных `Layout` и может быть мультиязычным.

![Slide Over model](./img/strapi-ct-slide-over.png)

#### Slider

Конструктор для слайдера с контентом.

![Slider model](./img/strapi-ct-slider.png)

#### Tier

Модель уровня подписки, используется в `Tiers Page Block` и участвует в бизнес логике проектов, наследуемых от `sps-lite`.

![Tier model](./img/strapi-ct-tier.png)

#### Topbar

Модель контейнера топбара, который используется на страницах проекта. Вынесен в модель потому что может повторяться в разных `Layout` и может быть мультиязычным.

![Topbar model](./img/strapi-ct-topbar.png)

#### User

Модель пользователя, является стандартной моделью `Users-Permissions Plugin`.

![Users-Permissions User model](./img/strapi-ct-up-user.png)

### Single Type

#### Configuration

Модель для настройки конфигурации сайд-эффектов.

![Configuration model](./img/strapi-st-configuration.png)

#### Theme

Модель для настройки цветовых токенов интерфейса.

![Theme model](./img/strapi-st-theme.png)

### Components

#### Elements

##### Button

Компонент кнопки

![Button component](./img/strapi-c-e-button.png)

##### Buttons Array

Компонент для выпадающего списка с кнопками либо просто списка кнопок

![Buttons Array component](./img/strapi-c-e-buttons-array.png)

##### Faq

Компонент для элемента FAQ, используемого в Page-Block `Faq Block`

![Faq component](./img/strapi-c-e-faq.png)

##### Feature

Компонент для элементов, используемых в Page-Block'ах `Features Section Block`, `Incentives Block`.

![Feature component](./img/strapi-c-e-feature.png)

##### Input

Компонент, используемый в конструкторе форм модели [Form](/docs/backend/development/#form).

![Input component](./img/strapi-c-e-input.png)

##### Input Option

Компонент варианта, используемый в поле ввода конструктора форм модели [Form](/docs/backend/development/#input).

![Input Option component](./img/strapi-c-e-input-option.png)

##### Logotype

Компонент логотипа, используется в Page-Block'ах `Footer Block`, `Navbar Block` и `Logotypes Cloud`.

![Logotype component](./img/strapi-c-e-logotype.png)

##### Reciever

Получатель результата сайт-эффекта при взаимодействии с моделью [Form](/docs/backend/development/#input).

![Reciever component](./img/strapi-c-e-reciever.png)

##### Request Input

Компонент, используемый при построении экземпляра [Form Request](/docs/backend/development#form-request).

![Request Input component](./img/strapi-c-e-request-input.png)

##### Slide

Компонент конструктора слайдов модели [Slider](/docs/backend/development#slider)

![Slide component](./img/strapi-c-e-slide.png)

##### Config

Элемент, используемый при создании модели [Configuration](/docs/backend/development#configuration)

![Config component](./img/strapi-c-e-config.png)

##### Form Side Effect

Элемент для настройки сайд-эффектов при создании модели [Form](/docs/backend/development#form).

![Form Side Effect component](./img/strapi-c-e-form-side-effect.png)

#### Page-blocks

##### CTA Section Block

![CTA Section Block](./img/strapi-c-pb-cta-section-block.png)

##### Contact Section Block

![Contact Section Block](./img/strapi-c-pb-contact-section-block.png)

##### Faqs Block

![Faqs Block](./img/strapi-c-pb-faqs-block.png)

##### Features Section Block

![Features Section Block](./img/strapi-c-pb-features-section-block.png)

##### Footer Block

![Footer Block](./img/strapi-c-pb-footer-block.png)

##### Header Section Block

![Header Section Block](./img/strapi-c-pb-header-section-block.png)

##### Hero Section Block

![Hero Section Block](./img/strapi-c-pb-hero-section-block.png)

##### Incentives Block

![Incentives Block](./img/strapi-c-pb-incentives-block.png)

##### Logotypes Cloud Block

![Logotypes Cloud Block](./img/strapi-c-pb-logotypes-cloud-block.png)

##### Navbar Block

![Navbar Block](./img/strapi-c-pb-navbar-block.png)

##### Not Found Block

![Not Found Block](./img/strapi-c-pb-not-found-block.png)

##### Pricing Block

![Pricing Block](./img/strapi-c-pb-pricing-block.png)

##### Reviews Block

![Reviews Block](./img/strapi-c-pb-reviews-block.png)

##### Reviews Table Block

![Reviews Table Block](./img/strapi-c-pb-reviews-table-block.png)

##### Slider Block

![Slider Block](./img/strapi-c-pb-slider-block.png)
