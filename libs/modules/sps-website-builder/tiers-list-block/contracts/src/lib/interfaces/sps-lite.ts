export const variants = ["two-columns-card"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.tiers-list-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  className: string | null;
}
