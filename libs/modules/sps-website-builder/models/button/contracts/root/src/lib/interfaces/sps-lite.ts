export const variants = [
  "default",
  "primary",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  title: string | null;
  url: string | null;
  description: string | null;
  className: string | null;
  additionalAttributes: any | null;
}
