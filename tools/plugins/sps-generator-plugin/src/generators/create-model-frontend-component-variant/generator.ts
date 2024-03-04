import {
  formatFiles,
  generateFiles,
  getProjects,
  names,
  offsetFromRoot,
  Tree,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import * as path from "path";
import { CreateModelFrontendComponentVariantGeneratorSchema } from "./schema";
import { type Linter } from "@nx/eslint";
import { libraryGenerator } from "@nx/react";
import type { SupportedStyles } from "@nx/react/typings/style";
import type { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import { FsTree } from "nx/src/generators/tree";

export async function createModelFrontendComponentVariantGenerator(
  tree: FsTree,
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

  tree.delete(`${directory}/tsconfig.lib.json`);
  updateJson(tree, `${directory}/tsconfig.json`, (json) => {
    json.references = [];
    delete json.files;
    delete json.include;

    return json;
  });

  generateFiles(tree, path.join(__dirname, "files"), directory, {
    template: "",
    variant,
    module,
    model,
    offset_from_root: offsetFromRootProject,
  });

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

  await formatFiles(tree);
}

export default createModelFrontendComponentVariantGenerator;

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

  let rootProjectVariants = tree.read(rootProjectVariantsPath).toString();

  const capitalizedName = names(variant).className;
  const createdVariantInterface = `${capitalizedName}`;
  const importVariantOutput = `import { Component as ${createdVariantInterface} } from "${libraryOptions.name}";\n${rootProjectVariants}`;
  tree.write(rootProjectVariantsPath, importVariantOutput);

  rootProjectVariants = tree.read(rootProjectVariantsPath).toString();

  const prevExport = rootProjectVariants.match(/export const variants = {/);
  const exportVariantOutput = rootProjectVariants.replace(
    prevExport[0],
    `export const variants = { "${variant}": ${createdVariantInterface},`,
  );
  tree.write(rootProjectVariantsPath, exportVariantOutput);
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

  let rootProjectInterfaces = tree.read(rootProjectInterfacesPath).toString();

  // add import to rootProjectInterfaces to the top of the file
  const capitalizedName = names(variant).className;
  const createdVariantInterface = `I${capitalizedName}ComponentProps`;
  const importInterfaceOutput = `import { IComponentProps as ${createdVariantInterface} } from "${libraryOptions.name}";\n${rootProjectInterfaces}`;
  tree.write(rootProjectInterfacesPath, importInterfaceOutput);

  rootProjectInterfaces = tree.read(rootProjectInterfacesPath).toString();

  const prevExport = rootProjectInterfaces.match(
    /export type IComponentProps =[\n]?[\s]?[\s]?[|]?/,
  );
  const addInterfaceOutput = rootProjectInterfaces.replace(
    prevExport[0],
    `export type IComponentProps = ${createdVariantInterface} |`,
  );
  tree.write(rootProjectInterfacesPath, addInterfaceOutput);
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

  let rootProjectStyles = tree.read(rootProjectStylesPath).toString();
  const importStyles = `${rootProjectStyles}\n@import "../../../../variants/${type}/${variant}/src/index";`;
  tree.write(rootProjectStylesPath, importStyles);
}
