export const variants = ["default"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  className: string | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
}
