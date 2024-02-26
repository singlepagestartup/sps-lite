export const variants = ["fade-with-previews"] as const;

export interface IModel {
  id: number;
  className: string | null;
  aspectRatioClassName: string | null;
  variant: (typeof variants)[number];
  showFullScreen: boolean | null;
  showPreviews: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
