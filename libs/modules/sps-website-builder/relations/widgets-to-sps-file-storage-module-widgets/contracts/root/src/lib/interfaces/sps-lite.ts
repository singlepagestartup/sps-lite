export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  widgetId: string;
  spsFileStorageModuleWidgetId: string;
}
