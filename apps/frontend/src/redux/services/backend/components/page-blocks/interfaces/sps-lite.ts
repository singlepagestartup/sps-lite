import { pageBlockComponents } from "../../../../../../components/page-blocks/aliases/index";

export interface ISpsLiteBackendComponentPageBlock {
  id: number;
  __component: keyof typeof pageBlockComponents;
  [key: string]: any;
}
