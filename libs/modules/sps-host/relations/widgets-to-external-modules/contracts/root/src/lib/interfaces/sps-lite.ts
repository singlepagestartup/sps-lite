export const variants = ["primary", "default"] as const;
export const externalModules = [
  "sps-billing",
  "sps-crm",
  "sps-file-storage",
  "sps-host",
  "sps-notification",
  "sps-rbac",
  "sps-third-parties",
  "sps-website-builder",
  "startup",
] as const;

export interface IRelation {
  id: string;
  className?: string;
  variant: (typeof variants)[number];
  orderIndex: number;
  widgetId: string;
  externalModule: (typeof externalModules)[number];
  externalModuleProps: string;
}
