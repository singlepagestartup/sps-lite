export const variants = ["default"] as const;
export const types = ["opengraph_image"] as const;

export interface IRelation {
  id: string;
  className?: string;
  variant: (typeof variants)[number];
  orderIndex: number;
  metadataId: string;
  spsFileStorageModuleFileId: string;
  type: (typeof types)[number];
}
