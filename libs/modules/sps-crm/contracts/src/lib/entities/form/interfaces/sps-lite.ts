import type { IComponent as IBackendComponentInput } from "../../../components/elements/input/interfaces";

export interface IEntity {
  id: number;
  variant: "simple";
  locale: string;
  title: string;
  uid: string;
  inputs?: Omit<IBackendComponentInput, "__component">[];
  className: string | null;
  additionalAttributes: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
