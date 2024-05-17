export interface SchemaFieldGeneratorSchema {
  name: string;
  model_name: string;
  action: "create" | "remove";
  level: "sps-lite" | "startup";
  type: "number" | "text";
}
