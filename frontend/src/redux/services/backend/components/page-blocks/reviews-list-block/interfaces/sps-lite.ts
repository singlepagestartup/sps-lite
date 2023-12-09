import { ISpsLiteBackendReview } from "~redux/services/backend/models/review/interfaces/sps-lite";

export interface ISpsLiteBackendReviewsListBlock {
  id: number;
  __component: "page-blocks.reviews-list-block";
  variant: "simple-with-avatars";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  reviews?: ISpsLiteBackendReview[] | null;
  showAll: boolean | null;
  anchor: string | null;
}
