export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  orderIndex: number;
  className?: string;
  widgetId: string;
  sliderBlockId: string;
}
