import { getProjects, Tree } from "@nx/devkit";
import { V1GeneratorSchema } from "./schema";

export async function v1Generator(tree: Tree, options: V1GeneratorSchema) {
  const projects = getProjects(tree);

  const apiProjects = [];
  projects.forEach((project) => {
    if (project.root.includes("/frontend/api")) {
      apiProjects.push(project);
    }
  });

  // tree.rename()
  for (const project of apiProjects) {
    const path = project.root;
    const clientFolder = path + "/src/lib/client";

    if (!tree.exists(clientFolder)) {
      continue;
    }

    const rtkFolder = path + "/src/lib/rtk";

    // console.log(`🚀 ~ v1Generator ~ clientFolder:`, clientFolder);
    // console.log(`🚀 ~ v1Generator ~ rtkFolder:`, rtkFolder);

    tree.rename(clientFolder, rtkFolder);
  }

  // console.log(`🚀 ~ v1Generator ~ projects:`, projects);
}

export default v1Generator;
