export const variants = ["default"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  __component: "elements.logotype";
  url: string | null;
  title: string | null;
  className: string | null;
}
