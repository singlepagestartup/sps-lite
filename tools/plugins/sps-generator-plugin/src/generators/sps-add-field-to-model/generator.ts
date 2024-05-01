import { Tree } from "@nx/devkit";
import { SpsAddFieldToModelGeneratorSchema } from "./schema";
import { Builder as BackendModelSchemaTableBuild } from "../../builders/backend/schema/table/Builder";

export async function spsAddFieldToModelGenerator(
  tree: Tree,
  options: SpsAddFieldToModelGeneratorSchema,
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

  await BackendModelSchemaTableBuilder.createField({
    tree,
    name: options.name,
    type: options.type,
  });

  // await BackendModelSchemaTableBuilder.deleteField({
  //   tree,
  //   name: options.name,
  //   type: options.type,
  // });
}

export default spsAddFieldToModelGenerator;
