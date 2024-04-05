import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getProjects,
  moveFilesToNewDirectory,
  Tree,
} from "@nx/devkit";
import * as path from "path";
import { V2GeneratorSchema } from "./schema";

export async function v2Generator(tree: Tree, options: V2GeneratorSchema) {
  const projects = getProjects(tree);

  const apiProjects = [];
  projects.forEach((project) => {
    if (!project.name.includes("models-order-frontend")) {
      return;
    }

    if (project.root.includes("/frontend/api")) {
      apiProjects.push(project);
    }
  });

  apiProjects.forEach((project) => {
    moveFilesToNewDirectory(
      tree,
      project.root,
      project.root.replace("frontend/api", "frontend/old-api"),
    );
  });

  console.log(`🚀 ~ v2Generator ~ apiProjects:`, apiProjects);

  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: "library",
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, "files"), projectRoot, options);
  await formatFiles(tree);
}

export default v2Generator;
