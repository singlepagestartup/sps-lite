export const variants = ["default"] as const;

export interface IModel {
  id: string;
  url: string;
  className: string | null;
  containerClassName: string | null;
  variant: (typeof variants)[number];
}
