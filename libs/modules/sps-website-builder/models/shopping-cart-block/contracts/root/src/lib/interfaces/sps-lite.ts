export const variants = ["simple"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.shopping-cart-block";
  variant: (typeof variants)[number];
  className: string | null;
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
}
