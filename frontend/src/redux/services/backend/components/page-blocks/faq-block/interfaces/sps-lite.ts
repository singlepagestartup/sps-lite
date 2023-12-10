import { ISpsLiteBackendComponentFaq } from "../../../elements/faq/interfaces/sps-lite";

export interface ISpsLiteBackendComponentFaqBlock {
  id: number;
  __component: "page-blocks.faqs-block";
  variant: "two-columns-with-centered-introduction";
  title: string | null;
  subtitle: string | null;
  className: string | null;
  description: string | null;
  faqs?: ISpsLiteBackendComponentFaq[] | null;
  anchor: string | null;
}
