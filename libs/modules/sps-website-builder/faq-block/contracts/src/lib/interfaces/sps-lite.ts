export const variants = ["two-columns-with-centered-introduction"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.faqs-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  className: string | null;
  description: string | null;
  anchor: string | null;
}
