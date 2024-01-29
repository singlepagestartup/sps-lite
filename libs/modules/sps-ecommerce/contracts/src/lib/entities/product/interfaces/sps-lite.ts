import type { IEntity as IBackendAttribute } from "../../attribute/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  description: string | null;
  fullDescription: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  attributes?: IBackendAttribute[] | null;
}
