import type { IRecord } from "../admin-v2-table/interface";

export const variant = "admin-v2-card";

export interface IVariantProps {
  variant?: "admin-v2-card";
  id?: string;
  data?: IRecord;
  className?: string;
}

type IVariantInputs = NonNullable<IVariantProps>;

export interface IComponentProps extends Omit<IVariantInputs, "variant"> {
  variant?: "admin-v2-card";
}

export interface IComponentPropsExtended extends IComponentProps {}
