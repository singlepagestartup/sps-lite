export { type IModel } from "@sps/website-builder/relations/footer-blocks-to-buttons-arrays/sdk/model";
import { IModel } from "@sps/website-builder/relations/footer-blocks-to-buttons-arrays/sdk/model";
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
