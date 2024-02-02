import { IModel as IButton } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";

export interface IModel {
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
  buttons?: IButton[] | null;
}
