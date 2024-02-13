export const variants = ["simple"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.slider-block";
  variant: (typeof variants)[number];
  anchor: string | null;
  className: string | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
}
