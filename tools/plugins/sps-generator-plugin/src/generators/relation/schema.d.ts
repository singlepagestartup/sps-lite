export interface RelationGeneratorSchema {
  action: "create" | "remove";
  left_model_name: string;
  left_model_relation_name: string;
  right_model_name: string;
  right_model_relation_name: string;
}
