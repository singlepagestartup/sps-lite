export const variants = ["simple"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.not-found-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  anchor: string | null;
}
