import { IEntity as IBackendAttribute } from "~redux/services/backend/extensions/sps-subscription/api/attribute/interfaces";
import { IComponent as IBackendComponentButton } from "~redux/services/backend/components/elements/button/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  description: string | null;
  period: number | null;
  type: "one-time" | "regularly";
  buttons?: IBackendComponentButton[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  attributes?: IBackendAttribute[] | null;
}
