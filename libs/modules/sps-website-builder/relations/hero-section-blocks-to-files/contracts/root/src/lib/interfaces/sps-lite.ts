export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  heroSectionBlockId: string;
  fileId: string;
}
