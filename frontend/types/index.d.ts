import { Dispatch, SetStateAction } from "react";

export interface IMeta {
  title?: string;
  description?: string;
  favicon?: IMedia;
  image?: IMedia;
  domain?: string;
  gtmKey?: string;
  script?: string;
}

export interface IPageBlock {
  _Component: `page-blocks.header` | `page-blocks.hero-block`;
}

export interface IButton {
  title: string;
  url: string;
  description?: string;
  icon?: IMedia;
  variant: `bottom-line`;
}

export interface IHeroSection {
  variant:
    | `split`
    | `simple-centered`
    | `split-with-screenshot-on-dark`
    | `with-app-screenshot`
    | `with-angled-image-on-right`;
  title: string;
  description: string;
  buttons?: IButton[];
  media?: IMedia[];
  anchor?: string;
  background?: IMedia;
}

export interface ICategoryOverview {
  variant: `simple`;
  anchor?: string;
  category: ICategory;
}

export interface IContactSecton {
  variant: `split-brand-panel`;
  title?: string;
  description?: string;
  media?: IMedia;
  form?: IForm;
  buttonsArrays?: IButtonsArray[];
  anchor?: string;
}

export interface IProfileSettings {
  variant: `simple`;
  anchor?: string;
}

export interface IModals {
  uid: string;
}

export interface IModal extends IPageBlocksProps {
  id: number;
  title: string;
  variant: `simple`;
  dialogPanelClassName: string;
  uid: string;
}

export interface IModalComponent extends IModal {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export interface IProfileAddresses {
  variant: `simple`;
  anchor?: string;
}

export interface IOtpSettings {
  variant: `simple`;
  anchor?: string;
}

export interface IChangePassword {
  variant: `simple`;
  anchor?: string;
}

export interface IChangePasswordComp extends IChangePassword {
  inputs: any;
  methods: any;
  submitFunction: () => {};
  changePasswordResult;
}

export interface IOrderHistory {
  variant: `with-invoice-panels`;
  anchor?: string;
}

export interface IUseAuthRes {
  inputs: any;
  onSubmit: Function;
}

export interface IAuth {
  variant: `simple-card`;
  media?: IMedia;
  logo?: IMedia;
}

export interface IHeaderSection {
  title: string;
  description: string;
  variant: `with-sign-in-form`;
  subtitle: string;
  media: IMedia[];
  anchor?: string;
}

export interface IProductOverviews {
  variant: `split-with-image`;
  product: IProduct;
  tabs: any[];
}

export interface IProductsLists {
  showAllProducts?: boolean;
  products: IProduct[];
  variant: `card-with-full-details` | `simple`;
  title?: string;
  description?: string;
  buttons?: IButton[];
  anchor?: string;
}

export interface ICategoryPreviewsBlock {
  title?: string;
  variant: `three-column`;
  categories?: ICategory[];
  showAll?: boolean;
  anchor?: string;
}

export interface IBlogSections {
  articles: IArticle[];
  variant: `3-column-card`;
  anchor?: string;
}

export interface IContentSections {
  variant: `centered`;
  article: IArticle;
}

export interface IFaq {
  title: string;
  description: string;
}

export interface IFaqs {
  variant: `centered-accordion`;
  title: string;
  description: string;
  faqs: IFaq[];
  anchor?: string;
}

export interface ILogo {
  logo: IMedia;
  logoMonochrome: IMedia;
  url: string;
}

export interface IForm {
  title: string;
  inputs: {
    label: string;
    placeholder: string;
    isRequired: boolean;
    type: `text` | `text-area` | `date`;
  }[];
  subtitle?: string;
  description?: string;
  button?: IButton;
}

export interface IForms {
  variant: `simple`;
  form: IForm;
  anchor?: string;
}

export interface ILogoCloud {
  variant: `simple`;
  title: string;
  logos: ILogo[];
  buttons?: IButton[];
  description: string;
  anchor?: string;
}

export interface INotFound {
  variant: `simple`;
  title: string;
  description: string;
  buttons?: IButton[];
}

export interface ISlide {
  buttons?: IButton[];
  title?: string;
  subtitle?: string;
  description?: string;
  media: IMedia;
}
export interface ISliderBlock {
  variant: `simple`;
  anchor?: string;
  slider: ISlider;
}

export interface ISlider {
  variant: `fade-with-previews`;
  showBackdrop?: boolean;
  showFullScreen?: boolean;
  aspectRatioClassName?: string;
  slides: ISlide[];
}

export interface IFeature {
  title: string;
  description: string;
  subtitle: string;
  media: IMedia[];
  icon: IMedia;
}

export interface IButtons extends IButton {
  _Component:
    | `elements.button`
    | `elements.buttons-array`
    | `elements.flyout-menu`;
}

export interface IIncentives {
  features: IFeature[];
  title?: string;
  description?: string;
  media?: IMedia[];
  variant: `four-column-with-illustrations`;
  anchor?: string;
}

export interface ITier {
  id: number;
  title: string;
  description?: string;
  features?: IFeature[];
  price: string;
  url?: string;
  period?: number;
  type: `one-time` | `regularly`;
}

export interface IPricings {
  title?: string;
  subtitle?: string;
  description?: string;
  background?: IMedia;
  variant: `two-tiers-with-extra-tier`;
  anchor?: string;
  tiers: ITier[];
}

export interface ICtaSections {
  title?: string;
  description?: string;
  media?: IMedia[];
  variant: `simple-centered`;
  anchor?: string;
  buttons?: IButton[];
}

export interface IProductFeatures {
  features: IFeature[];
  title?: string;
  subtitle?: string;
  description?: string;
  media?: IMedia[];
  variant: `with-alternating-sections`;
  anchor?: string;
}

export interface IFeatureSections {
  features: IFeature[];
  variant: `simple-three-column`;
  title: string;
  description: string;
  anchor?: string;
  media?: IMedia[];
}

export interface IHeaderButton extends IButton {
  _Component: `elements.button`;
}

export interface IHeaderButtonsArray extends IButtonsArray {
  _Component: `elements.buttons-array`;
}

export interface IHeaderFlyoutMenu extends IFlyoutMenu {
  _Component: `elements.flyout-menu`;
}

export interface IHeader {
  topbar?: ITopbar;
  logo: IMedia;
  buttons?: IButtons[];
  profileButtons?: IButtons[];
  additionalButtons?: IButtons[];
  ctaButtons?: IButtons[];
  position: string;
  variant: `simple-links-on-left`;
}

export interface ITopbar {
  variant: `simple`;
  title?: string;
  buttons?: IButtons[];
}

export interface IFlyoutMenu {
  title: string;
  buttonsArrays: IButtonsArray[];
  _Component: `elements.flyout-menu`;
}

export interface IFooter {
  logo: IMedia;
  socialNetworksButtons: IButtonsArray[];
  buttonsArrays: IButtonsArray[];
  policiesButtons: IButtonsArray[];
  copyrights: string;
}

export interface IShoppingCart {
  variant: `slide-over`;
}

export interface ICheckoutForm {
  variant: `single-step-with-order-summary`;
}

export interface IShoppingCartComp extends IShoppingCart {
  isOpen?: boolean;
  setIsOpen: any;
}

export interface IPageBlocksProps {
  pageBlocks: IPageBlock[];
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export interface IButtonsArray {
  title: string;
  buttons: IButtons[];
  description?: string;
  className: string;
  variant: `column`;
}

export interface IFooter {
  copyrights: string;
  description: string;
  logo: IMedia;
  buttons: IButtonsArray[];
  variant: `four-columns-simple`;
}

export interface IDashboardLayout {
  id: number;
  locale: string;
  publishedAt: string;
  variant: `simple`;
  sidebarBlocks: IButtons[];
}

export interface IAuthLayout {
  id: number;
  variant: `simple`;
}

export interface IPublicPageLayout {
  id: number;
  variant: `simple`;
}

export interface IPageProps extends IPageBlocksProps {
  header: IHeader;
  meta: IMeta;
  footer: IFooter;
  shoppingCart: any;
  products?: IProduct[];
  tabs?: any[];
  product?: IProduct;
  dashboardLayout?: IDashboardLayout;
  authLayout?: IAuthLayout;
  publicPageLayout?: IPublicPageLayout;
}

export interface IMedia {
  id: number;
  url: string;
  mime: string;
  alternativeText: string;
}

export interface ICity {
  id: number;
  title: string;
  country: string;
}

export interface IAddress {
  address: string;
  apartment: string;
  comment: string;
  id: number;
  postalCode: string;
  country: string;
  city?: string;
}

export interface IAddressForm {
  address: string;
  apartment: string;
  comment: string;
  postal_code: string;
  country: string;
  city: string;
}

export interface IUser {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: number;
  isEmailConfirmationEnabled?: boolean;
  isOtpConfirmationEnabled?: boolean;
  isPhoneConfirmationEnabled?: boolean;
  name: string;
  nextAuthFactorKey?: string;
  patronymic: string;
  phone: string;
  provider: string;
  surname: string;
  updatedAt: string;
  username: string;
  addresses: IAddress[] | [];
}
export interface ICategory {
  createdAt: string;
  description: string;
  fullDescription: string;
  id: number;
  locale: string;
  media: IMedia[];
  publishedAt: string;
  title: string;
  uid: string;
  updatedAt: string;
  products: IProduct[];
}

export interface ICurrency {
  id: number;
  title: string;
  unicode: string;
  isDefault: boolean;
  products?: IProduct;
}

export interface IOrderProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  attributes: IProductAttribute[];
  variants: IProductVariant[];
  variant: number;
  quantity: number;
  fullDescription: string;
  product?: IProduct;
  media: IMedia[];
}

interface IOrderShipping extends IAddress {
  adminComment: string;
  delivery: IDelivery;
}

export interface IOrder {
  comment?: string;
  createdAt: string;
  email: string;
  id: number;
  isPaid: boolean;
  name: string;
  patronymic: string;
  phone: string;
  status: `new` | `canceled` | `confirmed` | `shipping`;
  surname: string;
  updatedAt: string;
  products: IOrderProduct[];
  user: IUser;
  amount: number;
  shipping: IOrderShipping;
  receipts: {
    title: string;
    amount: number;
  }[];
}
export interface IDeliveryTerms {
  id: number;
  minAmountForFree?: number;
  price?: number;
  priceWillBeCount?: `by_manager` | `on_delivery`;
}
export interface IDelivery {
  id: number;
  title: string;
  country: string;
  createdAt: string;
  description: string;
  locale: string;
  price: number;
  publishedAt: string;
  updatedAt: string;
  duration: string;
  terms: IDeliveryTerms[];
}

export interface IProductAttributeKey {
  id: number;
  key: string;
  title: string;
}

export interface IProductAttribute {
  id: number;
  boolean?: boolean;
  number?: number;
  string?: string;
  key: IProductAttributeKey;
  createdAt: string;
  updatedAt: string;
  isAvailable?: boolean;
}

export interface IProductVariant {
  id: number;
  attributes: IProductAttribute[];
  price: number;
  media: IMedia[];
}

export interface IProduct {
  id: number;
  title: string;
  uid: string;
  price: number;
  description: string;
  media: IMedia[];
  score: number;
  category: ICategory | number;
  currency: ICurrency;
  attributes: IProductAttribute[];
  fullDescription: string;
  reviews: IReview[];
  variants: IProductVariant[];
  createdAt: string;
  updatedAt: string;
  pageBlocks?: any;
}

export interface IArticle {
  id: number;
  title: string;
  description: string;
  media: IMedia[];
  cover: IMedia;
  categories: ICategory[];
  attributes: IProductAttribute[];
  fullDescription: string;
  createdAt: string;
  updatedAt: string;
}

export interface IReview {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  rating: number;
  description: string;
  cover: IMedia;
  createdAt: string;
}

export {};

declare global {
  interface Window {
    utmReferer?: string | string[];
    offsetWidth: number;
  }
}

export interface ICartProduct {
  comment?: string;
  id: number;
  quantity: number;
  variant: number;
  product: IProduct;
}
