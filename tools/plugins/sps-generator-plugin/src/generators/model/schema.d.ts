export interface ModelGeneratorSchema {
  name: string;
  action: "create" | "remove";
  module: string;
}
