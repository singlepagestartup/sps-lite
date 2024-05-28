export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  orderIndex: number;
  featuresSectionBlockId: string;
  featureId: string;
  direction: "default" | "reverse";
}
