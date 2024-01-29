import type { IEntity as IAttribute } from "../../attribute/interfaces";
import type { IComponent as IButton } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  description: string | null;
  period: number | null;
  type: "one-time" | "regularly";
  buttons?: IButton[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  attributes?: IAttribute[] | null;
}
