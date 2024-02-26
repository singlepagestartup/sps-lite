export const variants = ["simple"] as const;

export interface IModel {
  id: number;
  anchor: string | null;
  className: string | null;
  __component: "page-blocks.reviews-table-block";
  variant: (typeof variants)[number];
}
