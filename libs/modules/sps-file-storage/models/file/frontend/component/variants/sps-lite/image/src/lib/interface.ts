import { IModel } from "@sps/sps-file-storage/models/file/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-file-storage/models/file/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "image" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  containerClassName?: string;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
