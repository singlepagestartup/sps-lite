import type { IEntity as IBackendAttribute } from "../../attribute/interfaces";
import type { IComponent as IBackendComponentButton } from "@sps/sps-website-builder-frontend/lib/redux/components/elements/button/interfaces";

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
