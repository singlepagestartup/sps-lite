import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";
import { ISpsLiteBackendFeature } from "../../../elements/feature/interfaces/sps-lite";

export interface ISpsLiteBackendIncentivesBlock {
  id: number;
  __component: "page-blocks.incentives-block";
  variant: "four-column-with-illustrations";
  features?: ISpsLiteBackendFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
  anchor: string | null;
}
