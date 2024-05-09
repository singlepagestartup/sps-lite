import { Tree } from "@nx/devkit";
import { SpsDeleteFieldFromModelGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

export async function spsDeleteFieldFromModelGenerator(
  tree: Tree,
  options: SpsDeleteFieldFromModelGeneratorSchema,
) {
  if (
    !options.model.includes("models") ||
    !options.model.includes("-backend-schema")
  ) {
    throw new Error(
      "The model must be a *-backend-schema-[table/relations] module",
    );
  }

  const moduleName = options.model.split("/")[1].split("-models")[0];
  const modelName = options.model
    .split("/")[1]
    .split("-models-")[1]
    .split("-backend-schema")[0];

  const coder = new Coder({
    tree,
  });

  await coder.removeField({
    modelName: modelName,
    moduleName: moduleName,
    name: options.name,
    level: options.level,
    type: options.type,
  });
}

export default spsDeleteFieldFromModelGenerator;
