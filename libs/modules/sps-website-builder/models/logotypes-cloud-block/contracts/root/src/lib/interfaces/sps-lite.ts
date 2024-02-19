export const variants = ["simple-with-heading"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.logotypes-cloud-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  className: string | null;
  description: string | null;
  anchor: string | null;
}
