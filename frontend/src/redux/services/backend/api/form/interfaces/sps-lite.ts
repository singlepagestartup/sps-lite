import { IBackendComponentElement as ISpsLiteBackendComponentButton } from "~redux/services/backend/components/elements/button/interfaces/sps-lite";
import { IBackendComponentElement as ISpsLiteBackendComponentInput } from "~redux/services/backend/components/elements/input/interfaces/sps-lite";

export interface ISpsLiteBackendApiForm {
  id: number;
  variant: "simple";
  locale: string;
  title: string;
  uid: string;
  inputs?: Omit<ISpsLiteBackendComponentInput, "__component">[];
  className: string | null;
  additionalAttributes: any | null;
  button?: Omit<ISpsLiteBackendComponentButton, "__component">;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
