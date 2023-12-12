import { IComponent as IBackendComponentButton } from "~redux/services/backend/components/elements/button/interfaces";
import { IComponent as IBackendComponentInput } from "~redux/services/backend/components/elements/input/interfaces";

export interface IEntity {
  id: number;
  variant: "simple";
  locale: string;
  title: string;
  uid: string;
  inputs?: Omit<IBackendComponentInput, "__component">[];
  className: string | null;
  additionalAttributes: any | null;
  button?: Omit<IBackendComponentButton, "__component">;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
