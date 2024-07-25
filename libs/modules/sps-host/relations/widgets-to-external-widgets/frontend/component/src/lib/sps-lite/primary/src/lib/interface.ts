import { IRelation } from "@sps/sps-host/relations/widgets-to-external-widgets/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "primary" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelation;
}
