import {
  formatFiles,
  generateFiles,
  getProjects,
  names,
  Tree,
} from "@nx/devkit";
import * as path from "path";
import { ModelFrontendComponentVariantGeneratorSchema } from "./schema";
import type { Linter } from "@nx/eslint";
import { libraryGenerator } from "@nx/react";
import type { SupportedStyles } from "@nx/react/typings/style";
import type { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import * as fs from "fs/promises";

export async function modelFrontendComponentVariantGenerator(
  tree: Tree,
  options: ModelFrontendComponentVariantGeneratorSchema,
) {
  const variant = options.name;
  const type = "startup";
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

  const name = `${project.name}-variants-${type}-${variant}`;

  const projectRoot = project?.root.split("/");

  const moduleIndex = projectRoot?.findIndex((dir) => dir === "modules");
  const module = projectRoot?.[moduleIndex + 1];

  const modelIndex = projectRoot?.findIndex((dir) => dir === "models");
  const model = projectRoot?.[modelIndex + 1];

  const directory = `${projectRoot
    ?.slice(0, -1)
    .join("/")}/variants/${type}/${variant}`;

  const libraryOptions = {
    name,
    directory,
    linter: "eslint" as Linter.EsLint,
    minimal: true,
    style: "none" as SupportedStyles,
    projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
  };

  await libraryGenerator(tree, libraryOptions);

  generateFiles(tree, path.join(__dirname, "files"), directory, {
    template: "",
    variant,
    module,
    model,
  });

  await addVariantToRoot({ libraryOptions, variant, projectRoot, tree });
  await addInterfaceToRoot({ libraryOptions, variant, projectRoot, tree });
  await addStylesToRoot({ projectRoot, tree, type, variant });

  await formatFiles(tree);
}

export default modelFrontendComponentVariantGenerator;

async function addVariantToRoot({
  libraryOptions,
  variant,
  projectRoot,
  tree,
}: {
  libraryOptions: { name: string };
  variant: string;
  projectRoot: string[];
  tree: Tree;
}) {
  const rootProjectVariantsPath =
    projectRoot.join("/") + "/src/lib/startup/variants.ts";

  let rootProjectVariants = await tree.read(rootProjectVariantsPath).toString();

  const capitalizedName = names(variant).className;
  const createdVariantInterface = `${capitalizedName}`;
  await fs.writeFile(
    rootProjectVariantsPath,
    `import { Component as ${createdVariantInterface} } from "${libraryOptions.name}";\n${rootProjectVariants}`,
  );

  rootProjectVariants = await tree.read(rootProjectVariantsPath).toString();

  const prevExport = rootProjectVariants.match(/export const variants = {/);

  await fs.writeFile(
    rootProjectVariantsPath,
    rootProjectVariants.replace(
      prevExport[0],
      `export const variants = { "${variant}": ${createdVariantInterface},`,
    ),
  );
}

async function addInterfaceToRoot({
  libraryOptions,
  variant,
  projectRoot,
  tree,
}: {
  libraryOptions: { name: string };
  variant: string;
  projectRoot: string[];
  tree: Tree;
}) {
  const rootProjectInterfacesPath =
    projectRoot.join("/") + "/src/lib/startup/interface.ts";

  let rootProjectInterfaces = await tree
    .read(rootProjectInterfacesPath)
    .toString();

  // add import to rootProjectInterfaces to the top of the file
  const capitalizedName = names(variant).className;
  const createdVariantInterface = `I${capitalizedName}ComponentProps`;
  await fs.writeFile(
    rootProjectInterfacesPath,
    `import { IComponentProps as ${createdVariantInterface} } from "${libraryOptions.name}";\n${rootProjectInterfaces}`,
  );

  rootProjectInterfaces = await tree.read(rootProjectInterfacesPath).toString();

  const prevExport = rootProjectInterfaces.match(
    /export type IComponentProps =/,
  );

  await fs.writeFile(
    rootProjectInterfacesPath,
    rootProjectInterfaces.replace(
      prevExport[0],
      `export type IComponentProps = ${createdVariantInterface} |`,
    ),
  );
}

async function addStylesToRoot({
  projectRoot,
  tree,
  type,
  variant,
}: {
  projectRoot: string[];
  tree: Tree;
  type: string;
  variant: string;
}) {
  const rootProjectStylesPath =
    projectRoot.join("/") + "/src/lib/startup/_index.scss";

  let rootProjectStyles = await tree.read(rootProjectStylesPath).toString();
  await fs.writeFile(
    rootProjectStylesPath,
    `${rootProjectStyles}\n@import "../../../../variants/${type}/${variant}/src/index";`,
  );
}
