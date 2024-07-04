import { IRelation } from "@sps/sps-website-builder/relations/footers-to-widgets/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder/relations/footers-to-widgets/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "admin-form" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
  data?: Partial<IRelation>;
  setOpen?: (open: boolean) => void;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
