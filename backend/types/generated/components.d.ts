import type { Schema, Attribute } from "@strapi/strapi";

export interface ElementsButton extends Schema.Component {
  collectionName: "components_elements_buttons";
  info: {
    displayName: "Button";
    icon: "closed-captioning";
    description: "";
  };
  attributes: {
    url: Attribute.Text;
    media: Attribute.Media;
    description: Attribute.RichText;
    variant: Attribute.Enumeration<
      ["primary", "secondary", "text", "locale", "profile"]
    > &
      Attribute.Required &
      Attribute.DefaultTo<"primary">;
    additional_media: Attribute.Media;
    title: Attribute.RichText;
    additional_attributes: Attribute.JSON;
    class_name: Attribute.String;
    flyout: Attribute.Relation<
      "elements.button",
      "oneToOne",
      "plugin::sps-website-builder.flyout"
    >;
  };
}

export interface ElementsButtonsArray extends Schema.Component {
  collectionName: "components_elements_buttons_arrays";
  info: {
    displayName: "Buttons Array";
    icon: "bars";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    buttons: Attribute.Component<"elements.button", true>;
    class_name: Attribute.String;
    media: Attribute.Media;
    variant: Attribute.Enumeration<["column-with-title", "row"]> &
      Attribute.Required &
      Attribute.DefaultTo<"column-with-title">;
    description: Attribute.RichText;
    additional_media: Attribute.Media;
    url: Attribute.String;
    additional_attributes: Attribute.JSON;
  };
}

export interface ElementsDateValue extends Schema.Component {
  collectionName: "components_elements_date_values";
  info: {
    displayName: "Date Value";
  };
  attributes: {
    date_value: Attribute.Date;
    datetime_value: Attribute.DateTime;
    time_value: Attribute.Time;
  };
}

export interface ElementsFaq extends Schema.Component {
  collectionName: "components_elements_faqs";
  info: {
    displayName: "Faq";
    icon: "question-circle";
    description: "";
  };
  attributes: {
    description: Attribute.RichText;
    title: Attribute.RichText;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: "components_elements_features";
  info: {
    displayName: "Feature";
    icon: "apple-alt";
    description: "";
  };
  attributes: {
    media: Attribute.Media;
    description: Attribute.RichText;
    additional_media: Attribute.Media;
    title: Attribute.RichText;
    subtitle: Attribute.RichText;
  };
}

export interface ElementsFont extends Schema.Component {
  collectionName: "components_elements_fonts";
  info: {
    displayName: "Font";
    description: "";
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
    weight: Attribute.Enumeration<
      ["light", "regular", "medium", "semi_bold", "bold"]
    > &
      Attribute.Required &
      Attribute.DefaultTo<"regular">;
    style: Attribute.Enumeration<["normal", "italic"]> &
      Attribute.Required &
      Attribute.DefaultTo<"normal">;
    variant: Attribute.Enumeration<["default", "primary"]> &
      Attribute.Required &
      Attribute.DefaultTo<"default">;
  };
}

export interface ElementsInputOption extends Schema.Component {
  collectionName: "components_elements_input_options";
  info: {
    displayName: "Input Option";
    icon: "bars";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    media: Attribute.Media;
    additional_media: Attribute.Media;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: "components_elements_inputs";
  info: {
    displayName: "Input";
    icon: "text-height";
    description: "";
  };
  attributes: {
    placeholder: Attribute.String;
    variant: Attribute.Enumeration<
      ["text", "listbox", "radio-group", "switch", "file", "range", "date"]
    > &
      Attribute.Required &
      Attribute.DefaultTo<"text">;
    is_required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    value: Attribute.Text;
    name: Attribute.String & Attribute.Required;
    options: Attribute.Component<"elements.input-option", true>;
    label: Attribute.RichText;
    class_name: Attribute.String;
    type: Attribute.Enumeration<
      [
        "number",
        "text",
        "textarea",
        "date",
        "date_inline",
        "datetime_inline",
        "daterange_inline",
        "datetimerange_inline",
      ]
    >;
    multiple: Attribute.Boolean;
    min: Attribute.Float;
    max: Attribute.Float;
    step: Attribute.Float;
    media: Attribute.Media;
    additional_media: Attribute.Media;
    extra_media: Attribute.Media;
  };
}

export interface ElementsLogotype extends Schema.Component {
  collectionName: "components_elements_logotypes";
  info: {
    displayName: "Logotype";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    url: Attribute.Text;
    media: Attribute.Media;
    additional_media: Attribute.Media;
  };
}

export interface ElementsReciever extends Schema.Component {
  collectionName: "components_elements_recievers";
  info: {
    displayName: "Reciever";
    description: "";
  };
  attributes: {
    identifier: Attribute.Email;
    admin: Attribute.Relation<"elements.reciever", "oneToOne", "admin::user">;
    user: Attribute.Relation<
      "elements.reciever",
      "oneToOne",
      "plugin::users-permissions.user"
    >;
  };
}

export interface ElementsRequestInput extends Schema.Component {
  collectionName: "components_elements_request_inputs";
  info: {
    displayName: "Request Input";
    icon: "bullhorn";
    description: "";
  };
  attributes: {
    key: Attribute.Text;
    value: Attribute.Text;
    files: Attribute.Media;
    options: Attribute.Component<"elements.input-option", true>;
    is_true: Attribute.Boolean;
    option: Attribute.Component<"elements.input-option">;
    date_value: Attribute.Date;
    datetime_value: Attribute.DateTime;
    dates: Attribute.Component<"elements.date-value", true>;
  };
}

export interface ElementsSlide extends Schema.Component {
  collectionName: "components_elements_slides";
  info: {
    displayName: "Slide";
    icon: "photo-video";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    subtitle: Attribute.RichText;
    media: Attribute.Media & Attribute.Required;
    buttons: Attribute.Component<"elements.button", true>;
    additional_media: Attribute.Media;
  };
}

export interface FunctionsConfig extends Schema.Component {
  collectionName: "components_functions_configs";
  info: {
    displayName: "Config";
    description: "";
  };
  attributes: {
    provider: Attribute.Enumeration<["google"]> & Attribute.Required;
    config: Attribute.JSON;
  };
}

export interface FunctionsFormSideEffect extends Schema.Component {
  collectionName: "components_functions_form_side_effects";
  info: {
    displayName: "Form Side Effect";
    description: "";
  };
  attributes: {
    type: Attribute.Enumeration<
      ["send-to-recievers", "save-as-pdf", "pass-to-service"]
    > &
      Attribute.Required;
    recievers: Attribute.Component<"elements.reciever", true>;
    provider: Attribute.Enumeration<
      ["local", "email", "google-drive", "google-sheets"]
    > &
      Attribute.Required;
  };
}

export interface PageBlocksAlertBlock extends Schema.Component {
  collectionName: "components_page_blocks_alert_blocks";
  info: {
    displayName: "Alert Block";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    subtitle: Attribute.RichText;
    description: Attribute.RichText;
    media: Attribute.Media;
    additional_media: Attribute.Media;
    buttons: Attribute.Component<"elements.button", true>;
    class_name: Attribute.String;
    anchor: Attribute.String;
    variant: Attribute.Enumeration<["centered"]> &
      Attribute.Required &
      Attribute.DefaultTo<"centered">;
  };
}

export interface PageBlocksContactSectionBlock extends Schema.Component {
  collectionName: "components_page_blocks_contact_section_blocks";
  info: {
    displayName: "Contact Section Block";
  };
  attributes: {
    title: Attribute.RichText;
    subtitle: Attribute.RichText;
    description: Attribute.RichText;
    anchor: Attribute.Text;
    class_name: Attribute.Text;
    variant: Attribute.Enumeration<["centered"]> &
      Attribute.Required &
      Attribute.DefaultTo<"centered">;
    media: Attribute.Media;
    buttons_arrays: Attribute.Component<"elements.buttons-array", true>;
    additional_media: Attribute.Media;
    form: Attribute.Relation<
      "page-blocks.contact-section-block",
      "oneToOne",
      "plugin::sps-crm.form"
    >;
  };
}

export interface PageBlocksCtaSectionBlock extends Schema.Component {
  collectionName: "components_page_blocks_cta_section_blocks";
  info: {
    displayName: "CTA Section Block";
    description: "";
  };
  attributes: {
    variant: Attribute.Enumeration<["dark-with-image"]> &
      Attribute.Required &
      Attribute.DefaultTo<"dark-with-image">;
    anchor: Attribute.String;
    class_name: Attribute.String;
    title: Attribute.RichText;
    description: Attribute.RichText;
    media: Attribute.Media;
    buttons: Attribute.Component<"elements.button", true>;
    subtitle: Attribute.RichText;
    additional_media: Attribute.Media;
  };
}

export interface PageBlocksFaqsBlock extends Schema.Component {
  collectionName: "components_page_blocks_faqs_blocks";
  info: {
    displayName: "Faqs Block";
    icon: "question";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    faqs: Attribute.Component<"elements.faq", true>;
    variant: Attribute.Enumeration<["two-columns-with-centered-introduction"]> &
      Attribute.Required &
      Attribute.DefaultTo<"two-columns-with-centered-introduction">;
    class_name: Attribute.String;
    anchor: Attribute.String;
    subtitle: Attribute.RichText;
  };
}

export interface PageBlocksFeaturesSectionBlock extends Schema.Component {
  collectionName: "components_page_blocks_features_section_blocks";
  info: {
    displayName: "Features Section Block";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    subtitle: Attribute.RichText;
    features: Attribute.Component<"elements.feature", true>;
    variant: Attribute.Enumeration<["with-icon"]> &
      Attribute.Required &
      Attribute.DefaultTo<"with-icon">;
    anchor: Attribute.String;
    class_name: Attribute.String;
    media: Attribute.Media;
    additional_media: Attribute.Media;
  };
}

export interface PageBlocksFooterBlock extends Schema.Component {
  collectionName: "components_page_blocks_footer_blocks";
  info: {
    displayName: "Footer Block";
  };
  attributes: {
    copyrights: Attribute.RichText;
    description: Attribute.RichText;
    variant: Attribute.Enumeration<["four-columns-with-company-mission"]> &
      Attribute.Required &
      Attribute.DefaultTo<"four-columns-with-company-mission">;
    class_name: Attribute.String;
    logotype: Attribute.Component<"elements.logotype">;
    buttons_arrays: Attribute.Component<"elements.buttons-array", true>;
    additional_buttons_arrays: Attribute.Component<
      "elements.buttons-array",
      true
    >;
    extra_buttons_arrays: Attribute.Component<"elements.buttons-array", true>;
  };
}

export interface PageBlocksHeaderSectionBlock extends Schema.Component {
  collectionName: "components_page_blocks_header_section_blocks";
  info: {
    displayName: "Header Section Block";
    icon: "font";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    media: Attribute.Media;
    variant: Attribute.Enumeration<["simple-centered"]> &
      Attribute.Required &
      Attribute.DefaultTo<"simple-centered">;
    subtitle: Attribute.RichText;
    anchor: Attribute.String;
    class_name: Attribute.String;
    additional_media: Attribute.Media;
  };
}

export interface PageBlocksHeroSectionBlock extends Schema.Component {
  collectionName: "components_page_blocks_hero_section_blocks";
  info: {
    displayName: "Hero Section Block";
    icon: "window-restore";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    media: Attribute.Media;
    buttons: Attribute.Component<"elements.button", true>;
    variant: Attribute.Enumeration<["simple-centered", "split"]> &
      Attribute.Required &
      Attribute.DefaultTo<"simple-centered">;
    anchor: Attribute.String;
    class_name: Attribute.String;
    additional_media: Attribute.Media;
  };
}

export interface PageBlocksIncentivesBlock extends Schema.Component {
  collectionName: "components_page_blocks_incentives_blocks";
  info: {
    displayName: "Incentives Block";
    description: "";
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    features: Attribute.Component<"elements.feature", true>;
    anchor: Attribute.String;
    class_name: Attribute.String;
    variant: Attribute.Enumeration<["four-column-with-illustrations"]> &
      Attribute.Required &
      Attribute.DefaultTo<"four-column-with-illustrations">;
    media: Attribute.Media;
    additional_media: Attribute.Media;
    subtitle: Attribute.RichText;
  };
}

export interface PageBlocksLogotypesCloudBlock extends Schema.Component {
  collectionName: "components_page_blocks_logotypes_cloud_blocks";
  info: {
    displayName: "Logotypes Cloud Block";
    description: "";
  };
  attributes: {
    variant: Attribute.Enumeration<["simple-with-heading"]> &
      Attribute.Required &
      Attribute.DefaultTo<"simple-with-heading">;
    title: Attribute.RichText;
    buttons: Attribute.Component<"elements.button", true>;
    description: Attribute.RichText;
    anchor: Attribute.String;
    class_name: Attribute.String;
    logotypes: Attribute.Component<"elements.logotype", true>;
    subtitle: Attribute.RichText;
  };
}

export interface PageBlocksNavbarBlock extends Schema.Component {
  collectionName: "components_page_blocks_navbar_blocks";
  info: {
    displayName: "Navbar Block";
    description: "";
  };
  attributes: {
    variant: Attribute.Enumeration<["simple-links-on-left"]> &
      Attribute.Required &
      Attribute.DefaultTo<"simple-links-on-left">;
    description: Attribute.RichText;
    class_name: Attribute.String;
    logotype: Attribute.Component<"elements.logotype">;
    buttons: Attribute.Component<"elements.button", true>;
    additional_buttons: Attribute.Component<"elements.button", true>;
    extra_buttons: Attribute.Component<"elements.button", true>;
  };
}

export interface PageBlocksNotFoundBlock extends Schema.Component {
  collectionName: "components_page_blocks_not_found_blocks";
  info: {
    displayName: "Not Found Block";
    icon: "question-circle";
    description: "";
  };
  attributes: {
    variant: Attribute.Enumeration<["simple"]> &
      Attribute.Required &
      Attribute.DefaultTo<"simple">;
    title: Attribute.RichText;
    description: Attribute.RichText;
    class_name: Attribute.Text;
    anchor: Attribute.Text;
    buttons: Attribute.Component<"elements.button", true>;
    subtitle: Attribute.RichText;
    media: Attribute.Media;
    additional_media: Attribute.Media;
  };
}

export interface PageBlocksPricingBlock extends Schema.Component {
  collectionName: "components_page_blocks_pricing_blocks";
  info: {
    displayName: "Pricing Block";
    description: "";
  };
  attributes: {
    variant: Attribute.Enumeration<["two-columns-card"]> &
      Attribute.Required &
      Attribute.DefaultTo<"two-columns-card">;
    title: Attribute.RichText;
    subtitle: Attribute.RichText;
    description: Attribute.RichText;
    class_name: Attribute.Text;
    tiers: Attribute.Relation<
      "page-blocks.pricing-block",
      "oneToMany",
      "plugin::sps-billing.tier"
    >;
    anchor: Attribute.String;
    media: Attribute.Media;
    additional_media: Attribute.Media;
  };
}

export interface PageBlocksReviewsListBlock extends Schema.Component {
  collectionName: "components_page_blocks_reviews_list_blocks";
  info: {
    displayName: "Reviews List Block";
    description: "";
  };
  attributes: {
    variant: Attribute.Enumeration<["simple-with-avatars"]> &
      Attribute.Required &
      Attribute.DefaultTo<"simple-with-avatars">;
    show_all: Attribute.Boolean & Attribute.DefaultTo<true>;
    anchor: Attribute.String;
    class_name: Attribute.String;
    title: Attribute.RichText;
    subtitle: Attribute.RichText;
    description: Attribute.RichText;
    reviews: Attribute.Relation<
      "page-blocks.reviews-list-block",
      "oneToMany",
      "plugin::sps-crm.review"
    >;
  };
}

export interface PageBlocksReviewsTableBlock extends Schema.Component {
  collectionName: "components_page_blocks_reviews_table_blocks";
  info: {
    displayName: "Reviews Table Block";
    description: "";
  };
  attributes: {
    variant: Attribute.Enumeration<["simple"]> &
      Attribute.Required &
      Attribute.DefaultTo<"simple">;
    anchor: Attribute.String;
    class_name: Attribute.String;
  };
}

export interface PageBlocksSliderBlock extends Schema.Component {
  collectionName: "components_page_blocks_slider_blocks";
  info: {
    displayName: "Slider Block";
    icon: "arrows-alt-h";
    description: "";
  };
  attributes: {
    variant: Attribute.Enumeration<["simple"]> & Attribute.DefaultTo<"simple">;
    slider: Attribute.Relation<
      "page-blocks.slider-block",
      "oneToOne",
      "plugin::sps-website-builder.slider"
    >;
    anchor: Attribute.String;
    class_name: Attribute.String;
    title: Attribute.RichText;
    description: Attribute.RichText;
    subtitle: Attribute.RichText;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "elements.button": ElementsButton;
      "elements.buttons-array": ElementsButtonsArray;
      "elements.date-value": ElementsDateValue;
      "elements.faq": ElementsFaq;
      "elements.feature": ElementsFeature;
      "elements.font": ElementsFont;
      "elements.input-option": ElementsInputOption;
      "elements.input": ElementsInput;
      "elements.logotype": ElementsLogotype;
      "elements.reciever": ElementsReciever;
      "elements.request-input": ElementsRequestInput;
      "elements.slide": ElementsSlide;
      "functions.config": FunctionsConfig;
      "functions.form-side-effect": FunctionsFormSideEffect;
      "page-blocks.alert-block": PageBlocksAlertBlock;
      "page-blocks.contact-section-block": PageBlocksContactSectionBlock;
      "page-blocks.cta-section-block": PageBlocksCtaSectionBlock;
      "page-blocks.faqs-block": PageBlocksFaqsBlock;
      "page-blocks.features-section-block": PageBlocksFeaturesSectionBlock;
      "page-blocks.footer-block": PageBlocksFooterBlock;
      "page-blocks.header-section-block": PageBlocksHeaderSectionBlock;
      "page-blocks.hero-section-block": PageBlocksHeroSectionBlock;
      "page-blocks.incentives-block": PageBlocksIncentivesBlock;
      "page-blocks.logotypes-cloud-block": PageBlocksLogotypesCloudBlock;
      "page-blocks.navbar-block": PageBlocksNavbarBlock;
      "page-blocks.not-found-block": PageBlocksNotFoundBlock;
      "page-blocks.pricing-block": PageBlocksPricingBlock;
      "page-blocks.reviews-list-block": PageBlocksReviewsListBlock;
      "page-blocks.reviews-table-block": PageBlocksReviewsTableBlock;
      "page-blocks.slider-block": PageBlocksSliderBlock;
    }
  }
}
