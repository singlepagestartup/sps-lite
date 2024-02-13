export const variants = ["simple"] as const;

export interface IModel {
  id: number;
  title: string | null;
  variant: (typeof variants)[number];
  className: string | null;
  dialogPanelClassName: string | null;
  uid: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
