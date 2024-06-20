import { IRelation } from "@sps/sps-host/relations/layouts-to-widgets/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-host/relations/layouts-to-widgets/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "select-right" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  layoutId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
