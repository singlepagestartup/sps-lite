export const variants = ["default"] as const;
export const types = ["http"] as const;
export const methods = ["GET", "POST", "PATCH", "DELETE"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  type: (typeof types)[number];
  method: (typeof methods)[number];
  path: string;
}
