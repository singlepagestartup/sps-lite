export const variants = ["column-with-title", "row"] as const;

export interface IModel {
  id: number;
  __component: "elements.buttons-array";
  variant: (typeof variants)[number];
  title: string | null;
  additionalAttributes: any;
  description: string | null;
  className: string | null;
  url: string | null;
}
