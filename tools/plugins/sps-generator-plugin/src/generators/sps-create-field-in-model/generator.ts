import { Tree } from "@nx/devkit";
import { SpsCreateFieldInModelGeneratorSchema } from "./schema";
import { Builder as BackendModelSchemaTableBuild } from "../../builders/backend/schema/table/Builder";

export async function spsCreateFieldInModelGenerator(
  tree: Tree,
  options: SpsCreateFieldInModelGeneratorSchema,
) {
  if (
    !options.model.includes("models") ||
    !options.model.includes("-backend-schema")
  ) {
    throw new Error("The model must be a *-backend-schema-* module");
  }

  const module = options.model.split("/")[1].split("-models")[0];
  const model = options.model
    .split("/")[1]
    .split("-models-")[1]
    .split("-backend-schema")[0];

  console.log(`🚀 ~ model:`, model);

  const BackendModelSchemaTableBuilder = new BackendModelSchemaTableBuild({
    modelName: model,
    module,
    tree,
  });

  // await BackendModelSchemaTableBuilder.createField({
  //   tree,
  //   name: options.name,
  //   type: options.type,
  // });

  await BackendModelSchemaTableBuilder.deleteField({
    tree,
    name: options.name,
    type: options.type,
  });
}

export default spsCreateFieldInModelGenerator;
