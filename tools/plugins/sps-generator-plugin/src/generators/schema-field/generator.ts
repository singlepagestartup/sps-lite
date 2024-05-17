import { Tree } from "@nx/devkit";
import { SchemaFieldGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

export async function schemaFieldGenerator(
  tree: Tree,
  options: SchemaFieldGeneratorSchema,
) {
  const coder = new Coder({
    tree,
  });

  if (options.action === "remove") {
    await coder.removeField({
      modelName: options.model_name,
      moduleName: "sps-website-builder",
      name: options.name,
      type: options.type,
    });
  } else {
    await coder.addField({
      modelName: options.model_name,
      moduleName: "sps-website-builder",
      name: options.name,
      type: options.type,
    });
  }
}

export default schemaFieldGenerator;
