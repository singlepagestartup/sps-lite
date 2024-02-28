import { getProjects, Tree } from "@nx/devkit";
import * as nxWorkspace from "@nx/workspace";
import { RemoveModelFrontendComponentVariantGeneratorSchema } from "./schema";
import unlinkModelFrontendComponentVariantGenerator from "../unlink-model-frontend-component-variant/generator";

export async function removeModelFrontendComponentVariantGenerator(
  tree: Tree,
  options: RemoveModelFrontendComponentVariantGeneratorSchema,
) {
  const projects = getProjects(tree);
  const project = projects.get(options.project);

  if (!project.name.includes("variants")) {
    console.error("Only variants can be unlinked");
    return;
  }

  await Promise.all([
    unlinkModelFrontendComponentVariantGenerator(tree, {
      project: project.name,
    }),
  ]);

  await nxWorkspace.removeGenerator(tree, {
    projectName: project.name,
    skipFormat: true,
    forceRemove: true,
  });
}

export default removeModelFrontendComponentVariantGenerator;
