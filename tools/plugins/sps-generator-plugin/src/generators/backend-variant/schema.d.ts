export interface BackendVariantGeneratorSchema {
  entity_name: string;
  action: "create" | "remove";
  level: string;
  variant: string;
  module: string;
}
