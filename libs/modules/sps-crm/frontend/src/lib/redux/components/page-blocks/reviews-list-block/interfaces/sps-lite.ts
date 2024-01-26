import type { IEntity as IBackendReview } from "../../../../entities/review/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.reviews-list-block";
  variant: "simple-with-avatars";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  reviews?: IBackendReview[] | null;
  showAll: boolean | null;
  anchor: string | null;
}
