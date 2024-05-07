import { Tree } from "@nx/devkit";
import { SpsCreateFieldInModelGeneratorSchema } from "./schema";
import { Coder as BackendModelSchemaTableCoder } from "../../coder/[root]/libs/modules/[module]/models/[model]/backend/schema/table/Coder";

export async function spsCreateFieldInModelGenerator(
  tree: Tree,
  options: SpsCreateFieldInModelGeneratorSchema,
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

  const backendModelSchemaTableBuilder = new BackendModelSchemaTableCoder({
    modelName: model,
    module,
    tree,
  });

  await backendModelSchemaTableBuilder.createField({
    level: options.level,
    tree,
    name: options.name,
    type: options.type,
  });

  // await backendModelSchemaTableBuilder.deleteField({
  //   level: options.level,
  //   tree,
  //   name: options.name,
  //   type: options.type,
  // });
}

export default spsCreateFieldInModelGenerator;
