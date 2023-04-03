import {
  IBackendContactSectonBlock,
  IBackendCtaSectionBlock,
  IBackendFaqBlock,
  IBackendFeaturesSectionBlock,
  IBackendFormBlock,
  IBackendHeaderSectionBlock,
  IBackendHeroSectionBlock,
  IBackendIncentivesBlock,
  IBackendLogotypesCloudBlock,
  IBackendNotFoundBlock,
  IBackendPricingsBlock,
  IBackendReviewsBlock,
  IBackendReviewsTableBlock,
  IBackendSliderBlock,
} from "types/components/page-blocks/sps-lite";
import {
  backendForm,
  backendSlider,
  backendTier,
} from "~mocks/collection-types/sps-lite";
import {
  backendButtonDefault,
  backendButtonsArraySimple,
  backendFaq,
  backendFeature,
  backendLogotype,
} from "~mocks/components/elements/sps-lite";

export const backendFeatureSectionBlockSimpleThreeColumn = {
  id: 32,
  title: `Hello world`,
  variant: `simple-three-column`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  _Component: `page-blocks.features-section-block`,
  features: Array(4).fill(backendFeature),
} as IBackendFeaturesSectionBlock;

export const backendContactSectionBlockSplitBrandPanel = {
  title: `Hello world`,
  variant: `split-brand-panel`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  buttonsArrays: [backendButtonsArraySimple],
} as IBackendContactSectonBlock;

export const backendCtaSectionBlockSimpleCentered = {
  title: `Hello world`,
  variant: `simple-centered`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  buttons: Array(3).fill(backendButtonDefault),
} as IBackendCtaSectionBlock;

export const backendFaqBlockThreeColumns = {
  title: `Hello world`,
  variant: `three-columns`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  faqs: Array(4).fill(backendFaq),
} as IBackendFaqBlock;

export const backendFormBlockSimple = {
  id: 9,
  anchor: null,
  className: null,
  form: backendForm,
  variant: `simple`,
} as IBackendFormBlock;

export const backendHeaderSectionBlockSimpleCentered = {
  id: 9,
  variant: `simple-centered`,
  title: `Используемые коцепции`,
  description: `Концепции, используемые в SPS позволяют постепенно дорабатывать проект при этом давая возможность пользователям получить ваш продукт сразу же. Не нужно разрабатывать проект месяцами, просто начните с одной страницы и добавляйте функционал по мере необходимости. А когда поймете что уперлись в потолок, доработайте функционал под ваши нужды, SPS не ограничивает вас ничем, вы просто пишите JS код на бекенде (Stapi) и фронтенде (Next.js + Tailwind CSS). Не нужно учить новый язык, шаблонизатор или пытаться добавить функционал в закрытую систему.`,
} as IBackendHeaderSectionBlock;

export const backendHeroSectionBlockSimpleCentered = {
  id: 4,
  variant: `simple-centered`,
  title: `OpenSource "под капотом"`,
  description: `Используем OpenSource инструменты под капотом, это имеет ряд преимуществ, таких как быстрая фиксация багов в ядре, лучший уровень безопасности.`,
  buttons: [backendButtonDefault],
} as IBackendHeroSectionBlock;

export const backendIncentivesBlockFourColumnWithIllustrations = {
  id: 9,
  variant: `four-column-with-illustrations`,
  features: Array(4).fill(backendFeature),
} as IBackendIncentivesBlock;

export const backendLogotypesCloudBlockSimple = {
  id: 5,
  title: `Hello world`,
  variant: `simple`,
  logotypes: Array(5).fill(backendLogotype),
} as IBackendLogotypesCloudBlock;

export const backendNotFoundBlockSimple = {
  id: 3,
  variant: `simple`,
  title: `404`,
  subtitle: `Page not found`,
  description: `Come to main page and start again`,
  buttons: Array(1).fill(backendButtonDefault),
} as IBackendNotFoundBlock;

export const backendPricingBlocktwoTiersWithExtraTier = {
  id: 2,
  variant: `two-tiers-with-extra-tier`,
  title: `Один шаг чтобы стать Lean Startup разработчиком`,
  subtitle: null,
  description: `Сэкономьте более 250 часов работы разработчика (7'500$) и постоянный доступ к обновлениям кодовой базы. Таким образом все разработанные на базе SPS проекты можно будет обновлять прямо из репозитория SPS. Не нужно копировать-вставлять блоки кода при обновлении.`,
  className: null,
  tiers: Array(2).fill(backendTier),
} as IBackendPricingsBlock;

export const backendReviewsBlockSimpleWithAvatars = {
  id: 5,
  variant: `simple-with-avatars`,
} as IBackendReviewsBlock;

export const backendReviewsTableBlockSimple = {
  id: 9,
  variant: `simple`,
} as IBackendReviewsTableBlock;

export const backendSliderBlockSimple = {
  id: 2,
  variant: `simple`,
  slider: backendSlider,
} as IBackendSliderBlock;
