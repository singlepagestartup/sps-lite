export interface IRelation {
  id: string;
  direction: "default" | "reverse";
  orderIndex: number;
  layoutId: string;
  footerId: string;
}
