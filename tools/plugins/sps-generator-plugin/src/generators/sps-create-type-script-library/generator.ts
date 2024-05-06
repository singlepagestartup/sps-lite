import { Tree } from "@nx/devkit";
import { SpsCreateTypeScriptLibraryGeneratorSchema } from "./schema";
import { Builder as TypeScriptLibraryBuilder } from "../../coder/project/other-actions/type-script-library/Coder";

export async function spsCreateTypeScriptLibraryGenerator(
  tree: Tree,
  options: SpsCreateTypeScriptLibraryGeneratorSchema,
) {
  let prepend = "";
  if (!options.name.startsWith("@sps/")) {
    prepend = "@sps/";
  }

  const builder = new TypeScriptLibraryBuilder({
    name: `${prepend}${options.name}`,
    directory: options.directory,
  });

  await builder.create({
    tree,
  });
}

export default spsCreateTypeScriptLibraryGenerator;
