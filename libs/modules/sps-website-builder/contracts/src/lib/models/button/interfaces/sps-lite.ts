export const variants = [
  "primary",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const;

export interface IModel {
  id: number;
  __component?: "elements.button";
  variant: (typeof variants)[number];
  title: string | null;
  url: string | null;
  description: string | null;
  className: string | null;
  additionalAttributes: any | null;
}
