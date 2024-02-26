export const variants = ["dark-with-image"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.cta-section-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  className: string | null;
}
