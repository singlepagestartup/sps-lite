import type { IModel } from "@sps/crm/models/form/sdk/model";
import type {
  IComponentProps as IParent,
  IComponentPropsExtended as IParentExtended,
} from "@sps/shared-frontend-components/singlepage/default/interface";
export const variant = "support-ai-chat" as const;
export interface IComponentProps extends IParent<IModel, typeof variant> {
  id: string;
  values: Record<"topic" | "details" | "result", string>;
  errors?: Partial<Record<"topic" | "details" | "result", string>>;
  onChange: (field: "topic" | "details" | "result", value: string) => void;
  submitted?: boolean;
  pending?: boolean;
  children?: React.ReactNode;
}
export interface IComponentPropsExtended
  extends IParentExtended<IModel, typeof variant, IComponentProps> {}
