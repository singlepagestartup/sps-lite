import type { IModel as IModelExtended } from "@sps/sps-website-builder-models-button-contracts-extended";
import {
  IModel,
  variants as modelVariants,
} from "@sps/sps-website-builder-models-button-contracts";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variants = [...modelVariants] as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: (typeof variants)[number];
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
