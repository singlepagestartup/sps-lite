export interface ModelGeneratorSchema {
  name: string;
  action: "create" | "remove";
  type: string;
  module: string;
}
