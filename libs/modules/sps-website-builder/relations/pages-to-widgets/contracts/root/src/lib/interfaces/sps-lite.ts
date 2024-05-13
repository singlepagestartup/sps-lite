export const variants = ["default"] as const;

export interface IModel {
  id: string;
  pageId: string;
  widgetId: string;
  orderIndex: number;
  variant: (typeof variants)[number];
}
