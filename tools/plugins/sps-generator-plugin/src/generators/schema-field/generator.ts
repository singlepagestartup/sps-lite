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
      moduleName: options.module,
      name: options.name,
      level: options.level,
      pgCoreType: options.pg_core_type,
      isRequired: options.is_required,
    });
  } else {
    await coder.addField({
      modelName: options.model_name,
      moduleName: options.module,
      name: options.name,
      pgCoreType: options.pg_core_type,
      level: options.level,
      isRequired: options.is_required,
    });
  }
}

export default schemaFieldGenerator;
