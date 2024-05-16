export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  pageId: string;
  widgetId: string;
  orderIndex: number;
  variant: (typeof variants)[number];
}
