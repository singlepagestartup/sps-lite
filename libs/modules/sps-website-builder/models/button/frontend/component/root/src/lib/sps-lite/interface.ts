import { IComponentProps as ILinkComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-link";
import { IComponentProps as IGhostComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-ghost";
import { IComponentProps as IOutlineComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-outline";
import { IComponentProps as IDestructiveComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-destructive";
import { IComponentProps as ILocaleComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-locale";
import { IComponentProps as ISecondaryComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-secondary";
import { IComponentProps as IPrimaryComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-primary";

export type IComponentProps =
  | ILinkComponentProps
  | IGhostComponentProps
  | IOutlineComponentProps
  | IDestructiveComponentProps
  | ILocaleComponentProps
  | ISecondaryComponentProps
  | IPrimaryComponentProps;
