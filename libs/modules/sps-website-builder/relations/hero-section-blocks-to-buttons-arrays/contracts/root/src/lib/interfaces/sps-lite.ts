export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  direction: "default" | "reverse";
  orderIndex: number;
  heroSectionBlockId: string;
  buttonsArrayId: string;
}
