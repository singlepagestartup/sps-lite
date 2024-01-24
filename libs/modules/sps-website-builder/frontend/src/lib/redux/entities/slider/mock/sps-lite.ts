import { IEntity } from "../interfaces/sps-lite";
import { entity as slide } from "~redux/services/backend/components/elements/slide/mock/sps-lite";

export const entity: IEntity = {
  id: 6,
  slides: Array(4).fill(slide),
  variant: "fade-with-previews",
  aspectRatioClassName: "aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10",
  showBackdrop: true,
  showFullScreen: true,
  showPreviews: true,
  className: null,
  createdAt: "2023-02-14T08:49:14.623Z",
  updatedAt: "2023-02-14T08:49:53.551Z",
  publishedAt: "2023-02-14T22:48:50.378Z",
};
