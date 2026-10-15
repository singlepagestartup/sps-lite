export type JsonValue =
  | null
  | string
  | number
  | boolean
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface IRecord {
  id: string;
  title: string;
  url: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  variant: string;
  className: string | null;
  language: string;
  adminTitle: string;
}

export const variant = "admin-v2-table";

export interface IVariantProps {
  variant?: "admin-v2-table";
  empty?: boolean;
}

type IVariantInputs = NonNullable<IVariantProps>;

export interface IComponentProps extends Omit<IVariantInputs, "variant"> {
  variant?: "admin-v2-table";
}

export interface IComponentPropsExtended extends IComponentProps {}
