import { ISpsLiteBackendUploadFile } from "../../upload/interfaces/sps-lite";

export interface ISpsLiteBackendReview {
  id: number;
  name: string | null;
  title: string | null;
  subtitle: string | null;
  rating: number | null;
  description: string | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
