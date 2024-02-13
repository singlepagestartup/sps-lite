export const variants = ["centered"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.contact-section-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  anchor: string | null;
}
