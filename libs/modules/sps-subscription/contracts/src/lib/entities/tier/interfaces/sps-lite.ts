import type { IEntity as IAttribute } from "../../attribute/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  description: string | null;
  period: number | null;
  type: "one-time" | "regularly";
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  attributes?: IAttribute[] | null;
}
