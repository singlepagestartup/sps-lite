export { type IModel } from "@sps/sps-website-builder/relations/content-blocks-to-sps-file-storage-module-widgets/sdk/model";
import { IModel } from "@sps/sps-website-builder/relations/content-blocks-to-sps-file-storage-module-widgets/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "admin-table-row" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel;
}