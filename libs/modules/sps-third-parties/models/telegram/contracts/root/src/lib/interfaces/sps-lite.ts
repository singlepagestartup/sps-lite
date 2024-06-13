export const variants = ["default"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  title: string;
  token: string;
  status: "active" | "inactive";
  password: string;
  username: string;
}
