export interface SpsDeleteFieldFromModelGeneratorSchema {
  name: string;
  model: string;
  type: string;
  level: "sps-lite" | "startup";
}
