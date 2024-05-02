import { IComponentProps as IFindComponentProps } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-find";
import { IComponentProps as IPageAttacherComponentProps } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-page-attacher";
import { IComponentProps as IEditorComponentProps } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-editor";
import { IComponentProps as IBoxedComponentProps } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-boxed";
import { IComponentProps as IWideComponentProps } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-wide";

export type IComponentProps =
  | IFindComponentProps
  | IPageAttacherComponentProps
  | IEditorComponentProps
  | IBoxedComponentProps
  | IWideComponentProps;
