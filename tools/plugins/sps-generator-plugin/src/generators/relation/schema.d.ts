export interface RelationGeneratorSchema {
  action: "create" | "remove";
  left_model_name: string;
  right_model_name: string;
  module: string;
  left_model_is_external: boolean;
  right_model_is_external: boolean;
}
