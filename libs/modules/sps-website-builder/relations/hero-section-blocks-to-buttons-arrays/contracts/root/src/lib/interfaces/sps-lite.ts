export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  className?: string;
  orderIndex: number;
  heroSectionBlockId: string;
  buttonsArrayId: string;
}
