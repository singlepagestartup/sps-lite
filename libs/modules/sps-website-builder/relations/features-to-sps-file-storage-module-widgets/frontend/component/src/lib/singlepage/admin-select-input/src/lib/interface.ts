export { type IRelation } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-widgets/sdk/model";
import { IRelation } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-widgets/sdk/model";
import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "@sps/shared-frontend-components/singlepage/admin-select-input/interface";

export const variant = "admin-select-input" as const;

export interface IComponentProps
  extends IParentComponentProps<IRelation, typeof variant> {}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended<
    IRelation,
    typeof variant,
    IComponentProps
  > {}
