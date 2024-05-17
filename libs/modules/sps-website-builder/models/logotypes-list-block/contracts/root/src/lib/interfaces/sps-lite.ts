export const variants = ["default"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  className: string | null;
  description: string | null;
  anchor: string | null;
}
