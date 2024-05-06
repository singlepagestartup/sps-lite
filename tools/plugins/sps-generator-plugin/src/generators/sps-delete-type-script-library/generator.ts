import { Tree, getProjects } from "@nx/devkit";
import { Coder as TypeScriptLibraryCoder } from "../../coder/project/other-actions/type-script-library/Coder";
import { SpsDeleteTypeScriptLibraryGeneratorSchema } from "./schema";

export async function spsDeleteTypeScriptLibraryGenerator(
  tree: Tree,
  options: SpsDeleteTypeScriptLibraryGeneratorSchema,
) {
  const projects = getProjects(tree);

  const toRemoveProjects = [];
  projects.forEach(async (project) => {
    if (project.name === options.project) {
      toRemoveProjects.push(project);
    }
  });

  for (const toRemoveProject of toRemoveProjects) {
    const builder = new TypeScriptLibraryCoder({
      name: toRemoveProject.name,
      directory: toRemoveProject.root,
    });

    await builder.delete({
      tree,
    });
  }
}

export default spsDeleteTypeScriptLibraryGenerator;
