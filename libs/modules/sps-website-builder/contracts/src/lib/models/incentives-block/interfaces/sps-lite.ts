export const variants = ["four-column-with-illustrations"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.incentives-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  anchor: string | null;
}
