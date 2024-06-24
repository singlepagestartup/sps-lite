import { IRelation } from "@sps/sps-host/relations/widgets-to-external-modules/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-host/relations/widgets-to-external-modules/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "primary" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
