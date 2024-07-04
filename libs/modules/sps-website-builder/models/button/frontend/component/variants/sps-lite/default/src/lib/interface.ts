import type { IModel as IModelExtended } from "@sps/sps-website-builder/models/button/contracts/extended";
import {
  IModel,
  variants as modelVariants,
} from "@sps/sps-website-builder/models/button/contracts/root";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variants = [...modelVariants] as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: (typeof variants)[number];
  data: Partial<IModel>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
