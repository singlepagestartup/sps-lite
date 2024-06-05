export const variants = ["default"] as const;

export interface IModel {
  title: string;
  id: string;
  variant: (typeof variants)[number];
}
