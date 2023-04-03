import {
  ISpsLiteBackendContactSectonBlock,
  ISpsLiteBackendCtaSectionBlock,
  ISpsLiteBackendFaqBlock,
  ISpsLiteBackendFeaturesSectionBlock,
  ISpsLiteBackendFormBlock,
  ISpsLiteBackendHeaderSectionBlock,
  ISpsLiteBackendHeroSectionBlock,
  ISpsLiteBackendIncentivesBlock,
  ISpsLiteBackendLogotypesCloudBlock,
  ISpsLiteBackendNotFoundBlock,
  ISpsLiteBackendPricingsBlock,
  ISpsLiteBackendReviewsBlock,
  ISpsLiteBackendReviewsTableBlock,
  ISpsLiteBackendSliderBlock,
} from "types/components/page-blocks/sps-lite";
import {
  spsLiteBackendForm,
  spsLiteBackendSlider,
  spsLiteBackendTier,
} from "~mocks/collection-types/sps-lite";
import {
  spsLiteBackendButtonDefault,
  spsLiteBackendButtonsArraySimple,
  spsLiteBackendFaq,
  spsLiteBackendFeature,
  spsLiteBackendLogotype,
} from "~mocks/components/elements/sps-lite";

export const spsLiteBackendFeatureSectionBlockSimpleThreeColumn = {
  id: 32,
  title: `Hello world`,
  variant: `simple-three-column`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  _Component: `page-blocks.features-section-block`,
  features: Array(4).fill(spsLiteBackendFeature),
} as ISpsLiteBackendFeaturesSectionBlock;

export const spsLiteBackendContactSectionBlockSplitBrandPanel = {
  title: `Hello world`,
  variant: `split-brand-panel`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  buttonsArrays: [spsLiteBackendButtonsArraySimple],
} as ISpsLiteBackendContactSectonBlock;

export const spsLiteBackendCtaSectionBlockSimpleCentered = {
  title: `Hello world`,
  variant: `simple-centered`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  buttons: Array(3).fill(spsLiteBackendButtonDefault),
} as ISpsLiteBackendCtaSectionBlock;

export const spsLiteBackendFaqBlockThreeColumns = {
  title: `Hello world`,
  variant: `three-columns`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  faqs: Array(4).fill(spsLiteBackendFaq),
} as ISpsLiteBackendFaqBlock;

export const spsLiteBackendFormBlockSimple = {
  id: 9,
  anchor: null,
  className: null,
  form: spsLiteBackendForm,
  variant: `simple`,
} as ISpsLiteBackendFormBlock;

export const spsLiteBackendHeaderSectionBlockSimpleCentered = {
  id: 9,
  variant: `simple-centered`,
  title: `Используемые коцепции`,
  description: `Концепции, используемые в SPS позволяют постепенно дорабатывать проект при этом давая возможность пользователям получить ваш продукт сразу же. Не нужно разрабатывать проект месяцами, просто начните с одной страницы и добавляйте функционал по мере необходимости. А когда поймете что уперлись в потолок, доработайте функционал под ваши нужды, SPS не ограничивает вас ничем, вы просто пишите JS код на бекенде (Stapi) и фронтенде (Next.js + Tailwind CSS). Не нужно учить новый язык, шаблонизатор или пытаться добавить функционал в закрытую систему.`,
} as ISpsLiteBackendHeaderSectionBlock;

export const spsLiteBackendHeroSectionBlockSimpleCentered = {
  id: 4,
  variant: `simple-centered`,
  title: `OpenSource "под капотом"`,
  description: `Используем OpenSource инструменты под капотом, это имеет ряд преимуществ, таких как быстрая фиксация багов в ядре, лучший уровень безопасности.`,
  buttons: [spsLiteBackendButtonDefault],
} as ISpsLiteBackendHeroSectionBlock;

export const spsLiteBackendIncentivesBlockFourColumnWithIllustrations = {
  id: 9,
  variant: `four-column-with-illustrations`,
  features: Array(4).fill(spsLiteBackendFeature),
} as ISpsLiteBackendIncentivesBlock;

export const spsLiteBackendLogotypesCloudBlockSimple = {
  id: 5,
  title: `Hello world`,
  variant: `simple`,
  logotypes: Array(5).fill(spsLiteBackendLogotype),
} as ISpsLiteBackendLogotypesCloudBlock;

export const spsLiteBackendNotFoundBlockSimple = {
  id: 3,
  variant: `simple`,
  title: `404`,
  subtitle: `Page not found`,
  description: `Come to main page and start again`,
  buttons: Array(1).fill(spsLiteBackendButtonDefault),
} as ISpsLiteBackendNotFoundBlock;

export const spsLiteBackendPricingBlocktwoTiersWithExtraTier = {
  id: 2,
  variant: `two-tiers-with-extra-tier`,
  title: `Один шаг чтобы стать Lean Startup разработчиком`,
  subtitle: null,
  description: `Сэкономьте более 250 часов работы разработчика (7'500$) и постоянный доступ к обновлениям кодовой базы. Таким образом все разработанные на базе SPS проекты можно будет обновлять прямо из репозитория SPS. Не нужно копировать-вставлять блоки кода при обновлении.`,
  className: null,
  tiers: Array(2).fill(spsLiteBackendTier),
} as ISpsLiteBackendPricingsBlock;

export const spsLiteBackendReviewsBlockSimpleWithAvatars = {
  id: 5,
  variant: `simple-with-avatars`,
} as ISpsLiteBackendReviewsBlock;

export const spsLiteBackendReviewsTableBlockSimple = {
  id: 9,
  variant: `simple`,
} as ISpsLiteBackendReviewsTableBlock;

export const spsLiteBackendSliderBlockSimple = {
  id: 2,
  variant: `simple`,
  slider: spsLiteBackendSlider,
} as ISpsLiteBackendSliderBlock;
