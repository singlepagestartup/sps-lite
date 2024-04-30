import { Tree, getProjects } from "@nx/devkit";
import { Builder as TypeScriptLibraryBuilder } from "../../builders/project/type-script-library/Builder";
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
    const builder = new TypeScriptLibraryBuilder({
      name: toRemoveProject.name,
      directory: toRemoveProject.root,
    });

    await builder.delete({
      tree,
    });
  }
}

export default spsDeleteTypeScriptLibraryGenerator;
