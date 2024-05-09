export interface SpsDeleteFieldFromModelGeneratorSchema {
  name: string;
  model: string;
  type: "text" | "number";
  level: "sps-lite" | "startup";
}
