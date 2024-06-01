export const statuses = ["not_verified"] as const;
export const variants = ["default"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  status: (typeof statuses)[number];
}
