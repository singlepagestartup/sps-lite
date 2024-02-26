export const variants = ["simple-centered"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.header-section-block";
  variant: (typeof variants)[number];
  title: string | null;
  description: string | null;
  subtitle: string | null;
  className: string | null;
  anchor: string | null;
}
