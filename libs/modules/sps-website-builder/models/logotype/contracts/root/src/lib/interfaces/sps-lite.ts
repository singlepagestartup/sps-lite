export const variants = ["default"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  url: string | null;
  media: string | null;
  className: string | null;
}
