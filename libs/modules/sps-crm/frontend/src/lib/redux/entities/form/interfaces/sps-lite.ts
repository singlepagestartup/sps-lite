// import type { IComponent as IBackendComponentButton } from "@sps/sps-website-builder-frontend/lib/redux/components/elements/button/interfaces";
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
  // button?: Omit<IBackendComponentButton, "__component">;
  button?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
