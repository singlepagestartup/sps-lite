export const variants = [
  "single-step-with-tier",
  "single-step-with-product",
  "single-step-with-cart",
] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.checkout-form-block";
  variant: (typeof variants)[number];
  className: string | null;
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
}
