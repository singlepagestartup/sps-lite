import { formatFiles, getProjects, Tree } from "@nx/devkit";
import { RemoveModelGeneratorSchema } from "./schema";
import * as nxWorkspace from "@nx/workspace";
import { Coder as ModelBackendCoder } from "../../coder/project/module/models/backend/Coder";

export async function removeModelGenerator(
  tree: Tree,
  options: RemoveModelGeneratorSchema,
) {
  const modelName = options.name;
  const module = options.module;

  const baseName = `@sps/${module}-models-${modelName}`;

  const modelBackendBuilder = new ModelBackendCoder({
    modelName,
    module,
    tree,
  });

  await modelBackendBuilder.delete({ tree });

  // await removeBackendSchemaRelations({
  //   tree,
  //   baseName,
  // });

  // await removeBackendSchemaPlain({
  //   tree,
  //   baseName,
  // });

  // const projects = getProjects(tree);

  // const toRemoveProjects = [];
  // projects.forEach(async (project) => {
  //   if (project.name.startsWith(baseName)) {
  //     toRemoveProjects.push(project);
  //   }
  // });

  // for (const project of toRemoveProjects) {
  //   await nxWorkspace.removeGenerator(tree, {
  //     projectName: project.name,
  //     skipFormat: true,
  //     forceRemove: true,
  //   });
  // }

  await formatFiles(tree);
}

export default removeModelGenerator;
