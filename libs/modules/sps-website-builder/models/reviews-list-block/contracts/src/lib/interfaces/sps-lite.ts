export const variants = ["simple-with-avatars"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.reviews-list-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  showAll: boolean | null;
  anchor: string | null;
}
