// import type { IEntity as IBackendFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";
// import type { IComponent as IBackendComponentButton } from "@sps/sps-website-builder-frontend/lib/redux/components/elements/button/interfaces";

export interface IComponent {
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
  buttons: any[] | null;
  media?: any[] | null;
  additionalMedia?: any[] | null;
}
