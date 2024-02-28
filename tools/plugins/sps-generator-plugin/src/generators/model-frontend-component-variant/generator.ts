import {
  formatFiles,
  generateFiles,
  GeneratorCallback,
  getProjects,
  names,
  offsetFromRoot,
  runTasksInSerial,
  Tree,
  updateProjectConfiguration,
} from "@nx/devkit";
import * as path from "path";
import { ModelFrontendComponentVariantGeneratorSchema } from "./schema";
import { lintInitGenerator, type Linter } from "@nx/eslint";
import { libraryGenerator } from "@nx/react";
import type { SupportedStyles } from "@nx/react/typings/style";
import type { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import * as fs from "fs/promises";
import { exec } from "child_process";
import { FsTree } from "nx/src/generators/tree";
import * as eslint from "@nx/eslint";

export async function modelFrontendComponentVariantGenerator(
  tree: FsTree,
  options: ModelFrontendComponentVariantGeneratorSchema,
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
    linter: "none" as Linter.EsLint,
    minimal: true,
    style: "none" as SupportedStyles,
    projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
  };

  await libraryGenerator(tree, libraryOptions);

  const offsetFromRootProject = offsetFromRoot(directory);
  updateProjectConfiguration(tree, name, {
    root: directory,
    sourceRoot: `${directory}/src`,
    projectType: "library",
    tags: [],
    targets: {
      lint: {},
    },
  });

  generateFiles(tree, path.join(__dirname, "files"), directory, {
    template: "",
    variant,
    module,
    model,
    offset_from_root: offsetFromRootProject,
  });

  return async () => {
    await addVariantToRoot({
      libraryOptions,
      variant,
      projectRoot,
      tree,
      type,
    });
    await addInterfaceToRoot({
      libraryOptions,
      variant,
      projectRoot,
      tree,
      type,
    });
    await addStylesToRoot({ projectRoot, tree, type, variant });
    await new Promise((resolve) => {
      exec(`npx nx format:write`, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
        resolve("");
      });
    });
  };
}

export default modelFrontendComponentVariantGenerator;

async function addVariantToRoot({
  libraryOptions,
  variant,
  projectRoot,
  tree,
  type,
}: {
  libraryOptions: { name: string };
  variant: string;
  projectRoot: string[];
  tree: Tree;
  type: string;
}) {
  const rootProjectVariantsPath =
    projectRoot.join("/") + `/src/lib/${type}/variants.ts`;

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
  type,
}: {
  libraryOptions: { name: string };
  variant: string;
  projectRoot: string[];
  tree: Tree;
  type: string;
}) {
  const rootProjectInterfacesPath =
    projectRoot.join("/") + `/src/lib/${type}/interface.ts`;

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
    /export type IComponentProps =[\n]?[\s]?[\s]?[|]?/,
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
    projectRoot.join("/") + `/src/lib/${type}/_index.scss`;

  let rootProjectStyles = await tree.read(rootProjectStylesPath).toString();
  await fs.writeFile(
    rootProjectStylesPath,
    `${rootProjectStyles}\n@import "../../../../variants/${type}/${variant}/src/index";`,
  );
}
