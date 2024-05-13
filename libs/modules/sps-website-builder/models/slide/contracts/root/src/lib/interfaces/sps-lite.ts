export const variants = ["default"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  buttons?: any[];
  showBackdrop: boolean | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
}
