import { ISpsLiteBackendApiReview } from "~redux/services/backend/api/review/interfaces/sps-lite";

export interface ISpsLiteBackendComponentReviewsListBlock {
  id: number;
  __component: "page-blocks.reviews-list-block";
  variant: "simple-with-avatars";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  reviews?: ISpsLiteBackendApiReview[] | null;
  showAll: boolean | null;
  anchor: string | null;
}
