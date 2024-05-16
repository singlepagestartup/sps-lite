export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  pageId: string;
  layoutId: string;
  variant: (typeof variants)[number];
}
