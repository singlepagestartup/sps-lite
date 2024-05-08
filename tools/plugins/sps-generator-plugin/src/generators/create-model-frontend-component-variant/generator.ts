import { getProjects } from "@nx/devkit";
import { CreateModelFrontendComponentVariantGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import { Tree } from "@nx/devkit";

export async function createModelFrontendComponentVariantGenerator(
  tree: Tree,
  options: CreateModelFrontendComponentVariantGeneratorSchema,
) {
  const variant = options.name;
  const type = options.type;
  const projects = getProjects(tree);
  const project = projects.get(options.project);

  if (project.name.includes("variants")) {
    console.error("Variants could not be created inside a variant");
    return;
  }

  if (!project.name.includes("component")) {
    console.error("Only components can have variants");
    return;
  }

  const coder = new Coder({
    tree,
  });
  await coder.createModelFrontendComponentVariant({
    project,
    type,
    variant,
  });
}

export default createModelFrontendComponentVariantGenerator;
