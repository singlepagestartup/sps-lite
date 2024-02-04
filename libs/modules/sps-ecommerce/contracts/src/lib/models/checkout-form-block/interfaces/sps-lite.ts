export interface IModel {
  id: number;
  __component: "page-blocks.checkout-form-block";
  variant:
    | "single-step-with-tier"
    | "single-step-with-product"
    | "single-step-with-cart";
  className: string | null;
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
}
