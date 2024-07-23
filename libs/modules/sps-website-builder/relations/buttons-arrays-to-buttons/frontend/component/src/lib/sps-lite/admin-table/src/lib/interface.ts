import { IRelation } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionProps } from "@sps/shared-frontend-api";

export const variant = "admin-table" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
  apiProps?: {
    params?: IFindActionProps["params"];
    options?: IFindActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelation[];
}