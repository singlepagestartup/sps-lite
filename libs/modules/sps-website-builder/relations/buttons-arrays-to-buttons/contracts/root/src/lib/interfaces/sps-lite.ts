export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  direction: "default" | "reverse";
  buttonsArrayId: string;
  buttonId: string;
  orderIndex: number;
}
