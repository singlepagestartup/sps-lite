export interface FrontendComponentVariantGeneratorSchema {
  name: string;
  action: "create" | "remove";
  level: "sps-lite" | "startup";
  type: "model" | "relation";
  entity_name: string;
  module_name: string;
}
