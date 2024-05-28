export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  className?: string;
  heroSectionBlockId: string;
  orderIndex: number;
  fileId: string;
}
