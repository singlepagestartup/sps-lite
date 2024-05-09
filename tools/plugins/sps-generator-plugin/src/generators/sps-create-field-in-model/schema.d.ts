export interface SpsCreateFieldInModelGeneratorSchema {
  name: string;
  model: string;
  type: "number" | "text";
  level: "sps-lite" | "startup";
}
