export interface SchemaFieldGeneratorSchema {
  name: string;
  model_name: string;
  action: "create" | "remove";
  type: "number" | "text";
  level: "sps-lite" | "startup";
}
