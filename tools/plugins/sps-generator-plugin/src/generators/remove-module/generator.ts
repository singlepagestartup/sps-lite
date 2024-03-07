import { formatFiles, getProjects, Tree } from "@nx/devkit";
import * as nxWorkspace from "@nx/workspace";
import { RemoveModuleGeneratorSchema } from "./schema";

export async function removeModuleGenerator(
  tree: Tree,
  options: RemoveModuleGeneratorSchema,
) {
  const module = options.module;

  const baseName = `@sps/${module}`;

  const projects = getProjects(tree);

  const toRemoveProjects = [];
  projects.forEach(async (project) => {
    if (project.name.startsWith(baseName)) {
      toRemoveProjects.push(project);
    }
  });

  for (const project of toRemoveProjects) {
    await nxWorkspace.removeGenerator(tree, {
      projectName: project.name,
      skipFormat: true,
      forceRemove: false,
    });
  }

  await formatFiles(tree);
}

export default removeModuleGenerator;
