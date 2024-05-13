export const variants = ["default", "fade-with-previews"] as const;

export interface IModel {
  id: string;
  className: string | null;
  aspectRatioClassName: string | null;
  variant: (typeof variants)[number];
  showFullScreen: boolean | null;
  showPreviews: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
