import { pageBlockComponents } from "~utils/api/components";

export interface ISpsLiteBackendPageBlock {
  id: number;
  __component: keyof typeof pageBlockComponents;
  [key: string]: any;
}
