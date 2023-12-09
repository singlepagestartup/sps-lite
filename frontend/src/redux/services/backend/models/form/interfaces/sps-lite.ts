import { ISpsLiteBackendButton } from "~redux/services/backend/components/elements/button/interfaces/sps-lite";
import { ISpsLiteBackendInput } from "~redux/services/backend/components/elements/input/interfaces/sps-lite";

export interface ISpsLiteBackendForm {
  id: number;
  variant: "simple";
  locale: string;
  title: string;
  uid: string;
  inputs?: Omit<ISpsLiteBackendInput, "__component">[];
  className: string | null;
  additionalAttributes: any | null;
  button?: Omit<ISpsLiteBackendButton, "__component">;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
