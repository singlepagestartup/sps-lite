import { IRelation } from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionsProps } from "@sps/shared-frontend-api";

export const variant = "admin-table" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
  apiProps?: {
    params?: IFindActionsProps["params"];
    options?: IFindActionsProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended[];
}
