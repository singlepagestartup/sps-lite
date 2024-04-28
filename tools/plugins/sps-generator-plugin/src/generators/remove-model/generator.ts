import { formatFiles, getProjects, Tree } from "@nx/devkit";
import { RemoveModelGeneratorSchema } from "./schema";
import * as nxWorkspace from "@nx/workspace";
import { Builder as ModelBackendAppBuilder } from "../../builders/backend/app/Builder";

export async function removeModelGenerator(
  tree: Tree,
  options: RemoveModelGeneratorSchema,
) {
  const modelName = options.name;
  const module = options.module;

  const baseName = `@sps/${module}-models-${modelName}`;

  const backendAppBuilder = new ModelBackendAppBuilder({
    modelName,
    module,
    tree,
  });

  // await backendApp.detachFromRoot({ tree });
  await backendAppBuilder.delete({ tree });

  // await removeBackendRoot({
  //   tree,
  //   baseName,
  // });

  // await removeBackendSchema({
  //   tree,
  //   baseName,
  // });

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

async function removeBackendRoot({
  tree,
  baseName,
}: {
  tree: Tree;
  baseName: string;
}) {
  const projectName = `${baseName}-backend-app`;

  await nxWorkspace.removeGenerator(tree, {
    projectName,
    skipFormat: true,
    forceRemove: true,
  });

  await formatFiles(tree);
}

async function removeBackendSchema({
  tree,
  baseName,
}: {
  tree: Tree;
  baseName: string;
}) {
  const projectName = `${baseName}-backend-schema`;

  await nxWorkspace.removeGenerator(tree, {
    projectName,
    skipFormat: true,
    forceRemove: true,
  });

  await formatFiles(tree);
}

async function removeBackendSchemaRelations({
  tree,
  baseName,
}: {
  tree: Tree;
  baseName: string;
}) {
  const baseLibraryName = `${baseName}-backend-schema`;
  const projectName = `${baseLibraryName}-relations`;

  await nxWorkspace.removeGenerator(tree, {
    projectName,
    skipFormat: true,
    forceRemove: true,
  });

  await formatFiles(tree);
}

async function removeBackendSchemaPlain({
  tree,
  baseName,
}: {
  tree: Tree;
  baseName: string;
}) {
  const projectName = `${baseName}-backend-schema-plain`;

  await nxWorkspace.removeGenerator(tree, {
    projectName,
    skipFormat: true,
    forceRemove: true,
  });

  await formatFiles(tree);
}
