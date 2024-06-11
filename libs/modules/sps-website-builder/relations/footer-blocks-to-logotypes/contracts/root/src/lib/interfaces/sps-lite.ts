export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  orderIndex: number;
  footerBlockId: string;
  logotypeId: string;
  className?: string;
}
