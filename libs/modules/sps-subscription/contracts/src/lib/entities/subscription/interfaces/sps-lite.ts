import { IEntity as ITier } from "../../tier/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tier?: ITier | null;
}
