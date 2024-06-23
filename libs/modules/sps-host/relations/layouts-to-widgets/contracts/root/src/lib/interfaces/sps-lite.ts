export const variants = ["primary", "default"] as const;

export interface IRelation {
  id: string;
  className?: string;
  variant: (typeof variants)[number];

  orderIndex: number;
  layoutId: string;

  widgetId: string;
}
