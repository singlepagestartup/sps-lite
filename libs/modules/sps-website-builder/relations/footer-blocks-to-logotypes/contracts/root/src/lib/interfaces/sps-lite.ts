export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  orderIndex: number;
  direction: "default" | "reverse";
  footerBlockId: string;

  logotypeId: string;
}
