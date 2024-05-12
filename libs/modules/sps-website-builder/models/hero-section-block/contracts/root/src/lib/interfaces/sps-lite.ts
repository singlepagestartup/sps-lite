export const variants = ["default", "simple-centered"] as const;

export interface IModel {
  id: string;
  __component: "page-blocks.hero-section-block";
  variant: (typeof variants)[number];
  className: string | null;
  title: string | null;
  description: string | null;
  anchor: string | null;
}
