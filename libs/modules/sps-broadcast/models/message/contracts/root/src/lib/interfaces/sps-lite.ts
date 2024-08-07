export const variants = ["default"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  createdAt: string;
  expiresAt: string;
  payload: string;
}
