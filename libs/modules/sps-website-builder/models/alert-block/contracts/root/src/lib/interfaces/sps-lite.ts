export const variants = ["centered"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.alert-block";
  variant: (typeof variants)[number];
  className: string | null;
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
}
