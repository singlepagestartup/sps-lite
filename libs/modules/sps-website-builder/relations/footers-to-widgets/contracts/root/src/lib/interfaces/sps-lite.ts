export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  className: string | null;
  orderIndex: number;
  footerId: string;
  widgetId: string;
}
