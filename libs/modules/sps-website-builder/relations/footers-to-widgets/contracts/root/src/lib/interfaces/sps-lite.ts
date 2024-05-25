export interface IRelation {
  id: string;
  orderIndex: number;
  direction: "default" | "reverse";
  footerId: string;
  widgetId: string;
}
