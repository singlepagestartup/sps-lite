export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  className?: string;
  orderIndex: number;
  layoutId: string;
  footerId: string;
}
