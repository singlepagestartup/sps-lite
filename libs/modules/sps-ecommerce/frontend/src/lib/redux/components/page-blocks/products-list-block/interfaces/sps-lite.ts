// import { IComponent as IBackendButton } from "@sps/sps-website-builder-frontend/lib/redux/components/elements/button/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.products-list-block";
  variant: "simple";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  anchor: string | null;
  usePageUrlFilters: boolean;
  query: string | null;
  buttons?: any[] | null;
}
