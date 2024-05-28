export const variants = ["default"] as const;

export interface IModel {
  id: string;
  title: string | null;
  url: string;
  createdAt: string;
  updatedAt: string;
  variant: (typeof variants)[number];
  urls?: { url: string; locale: string }[] | null;
}
