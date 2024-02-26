export const variants = ["simple-centered"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.hero-section-block";
  variant: (typeof variants)[number];
  className: string | null;
  title: string | null;
  description: string | null;
  anchor: string | null;
}
