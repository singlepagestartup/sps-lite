import { Tree } from "@nx/devkit";
import { SpsDeleteFieldFromModelGeneratorSchema } from "./schema";
import { Builder as BackendModelSchemaTableBuild } from "../../builders/backend/schema/table/Builder";

export async function spsDeleteFieldFromModelGenerator(
  tree: Tree,
  options: SpsDeleteFieldFromModelGeneratorSchema,
) {
  if (
    !options.model.includes("models") ||
    !options.model.includes("-backend-app")
  ) {
    throw new Error("The model must be a backend-app model");
  }

  const module = options.model.split("/")[1].split("-models")[0];
  const model = options.model
    .split("/")[1]
    .split("-models-")[1]
    .replace("-backend-app", "");

  const BackendModelSchemaTableBuilder = new BackendModelSchemaTableBuild({
    modelName: model,
    module,
    tree,
  });

  await BackendModelSchemaTableBuilder.deleteField({
    tree,
    name: options.name,
    type: options.type,
  });
}

export default spsDeleteFieldFromModelGenerator;
