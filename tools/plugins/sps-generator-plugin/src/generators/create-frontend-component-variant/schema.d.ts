export interface CreateFrontendComponentVariantGeneratorSchema {
  name: string;
  level: "sps-lite" | "startup";
  type: "model" | "relation";
  entity_name: string;
  module_name: string;
}
