import { ISpsComponentBase } from "@sps/ui-adapter";

export type IComponentProps = ISpsComponentBase & {
  url: string;
  routeParams?: Record<string, string>;
  language: string;
  variant: string;
};
