import { IComponent as IBackendComponentSlide } from "~redux/services/backend/components/elements/slide/interfaces";

export interface IEntity {
  id: number;
  slides: IBackendComponentSlide[];
  className: string | null;
  aspectRatioClassName: string | null;
  variant: "fade-with-previews";
  showFullScreen: boolean | null;
  showBackdrop: boolean | null;
  showPreviews: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
