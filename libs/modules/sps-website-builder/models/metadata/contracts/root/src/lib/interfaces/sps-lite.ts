export const variants = ["default", "primary"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
}
