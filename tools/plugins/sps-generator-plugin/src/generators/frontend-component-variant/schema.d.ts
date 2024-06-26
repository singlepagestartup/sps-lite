export interface FrontendComponentVariantGeneratorSchema {
  name: string;
  action: "create" | "remove";
  level: "sps-lite" | "startup";
  type: "model" | "relation";
  entity_name: string;
  module_name: string;
  template?: string;
  left_model_is_external?: boolean;
  right_model_is_external?: boolean;
}
