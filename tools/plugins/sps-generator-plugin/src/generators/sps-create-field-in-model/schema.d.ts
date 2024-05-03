export interface SpsCreateFieldInModelGeneratorSchema {
  name: string;
  model: string;
  type: string;
  level: "sps-lite" | "startup";
}
