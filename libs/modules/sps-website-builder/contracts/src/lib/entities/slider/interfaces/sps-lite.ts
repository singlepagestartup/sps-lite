import type { IComponent as ISlide } from "../../../components/elements/slide/interfaces";

export interface IEntity {
  id: number;
  slides: ISlide[];
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
