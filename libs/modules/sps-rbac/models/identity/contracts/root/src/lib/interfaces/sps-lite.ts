export const variants = ["default"] as const;
export const providers = ["login_and_password"] as const;

export interface IModel {
  password?: string;
  account?: string;
  email?: string;
  id: string;
  variant: (typeof variants)[number];
  provider: (typeof providers)[number];
}
