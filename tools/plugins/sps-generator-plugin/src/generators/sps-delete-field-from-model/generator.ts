import { Tree } from "@nx/devkit";
import { SpsDeleteFieldFromModelGeneratorSchema } from "./schema";
import { Builder as BackendModelSchemaTableBuild } from "../../builders/backend/schema/table/Builder";

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

  const module = options.model.split("/")[1].split("-models")[0];
  const model = options.model
    .split("/")[1]
    .split("-models-")[1]
    .split("-backend-schema")[0];

  const backendModelSchemaTableBuilder = new BackendModelSchemaTableBuild({
    modelName: model,
    module,
    tree,
  });

  await backendModelSchemaTableBuilder.deleteField({
    level: options.level,
    tree,
    name: options.name,
    type: options.type,
  });
}

export default spsDeleteFieldFromModelGenerator;
