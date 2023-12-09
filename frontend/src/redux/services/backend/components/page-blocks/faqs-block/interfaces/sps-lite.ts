import { ISpsLiteBackendFaq } from "../../../elements/faq/interfaces/sps-lite";

export interface ISpsLiteBackendFaqsBlock {
  id: number;
  __component: "page-blocks.faqs-block";
  variant: "two-columns-with-centered-introduction";
  title: string | null;
  subtitle: string | null;
  className: string | null;
  description: string | null;
  faqs?: ISpsLiteBackendFaq[] | null;
  anchor: string | null;
}
