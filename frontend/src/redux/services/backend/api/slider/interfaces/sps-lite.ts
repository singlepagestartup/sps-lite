import { IBackendComponentElement as ISpsLiteBackendComponentSlide } from "~redux/services/backend/components/elements/slide/interfaces/sps-lite";

export interface IBackendApiEntity {
  id: number;
  slides: ISpsLiteBackendComponentSlide[];
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
