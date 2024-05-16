export const variants = ["default"] as const;

export interface IModel {
  id: string;
  __component: "page-blocks.features-section-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  className: string | null;
}
