export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  className?: string;
  variant: (typeof variants)[number];

  orderIndex: number;
  roleId: string;

  permissionId: string;
}
