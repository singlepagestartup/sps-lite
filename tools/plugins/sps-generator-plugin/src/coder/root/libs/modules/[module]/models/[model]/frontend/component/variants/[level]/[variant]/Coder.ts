import {
  ProjectConfiguration,
  Tree,
  generateFiles,
  getProjects,
  names,
  offsetFromRoot,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import { type Linter } from "@nx/eslint";
import type { SupportedStyles } from "@nx/react/typings/style";
import type { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import { libraryGenerator } from "@nx/react";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { Coder as ComponentCoder } from "../../../Coder";

export class Coder {
  parent: ComponentCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: ProjectConfiguration;
  moduleName: string;
  modelName: string;

  constructor({
    parent,
    tree,
    name,
    level,
  }: {
    name: string;
    parent: ComponentCoder;
    tree: Tree;
    level: string;
  }) {
    this.name = name;
    this.baseName = `${parent.baseName}-variants-${level}-${name}`;
    this.baseDirectory = `${parent.baseDirectory}/variants/${level}/${name}`;
    this.tree = tree;
    this.parent = parent;

    // const libName = `${project.name}-variants-${type}-${variant}`;
    // const rootProjectPath = project?.root.split("/");
    // const moduleIndex = rootProjectPath?.findIndex((dir) => dir === "modules");
    const moduleName = this.parent.parent.parent.parent.parent.name;
    const modelName = this.parent.parent.parent.name;

    console.log(`🚀 ~ moduleName:`, moduleName);

    // const moduleName = rootProjectPath?.[moduleIndex + 1];
    // const modelIndex = rootProjectPath?.findIndex((dir) => dir === "models");
    // const modelName = rootProjectPath?.[modelIndex + 1];
    // const directory = `${rootProjectPath
    //   ?.slice(0, -1)
    //   .join("/")}/variants/${type}/${variant}`;
    // this.libName = libName;
    // this.root = directory;
    // this.variant = variant;
    this.moduleName = moduleName;
    this.modelName = modelName;
    // this.rootProjectPath = rootProjectPath;
    // this.type = type;
  }

  async create() {
    const libraryOptions = {
      name: this.baseName,
      directory: this.baseDirectory,
      linter: "none" as Linter.EsLint,
      minimal: true,
      style: "none" as SupportedStyles,
      projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
    };

    await libraryGenerator(this.tree, libraryOptions);

    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);
    updateProjectConfiguration(this.tree, this.baseName, {
      root: this.baseDirectory,
      sourceRoot: `${this.baseDirectory}/src`,
      projectType: "library",
      tags: [],
      targets: {
        lint: {},
      },
    });

    this.tree.delete(`${this.baseDirectory}/tsconfig.lib.json`);

    updateJson(this.tree, `${this.baseDirectory}/tsconfig.json`, (json) => {
      json.references = [];
      delete json.files;
      delete json.include;

      return json;
    });

    generateFiles(
      this.tree,
      path.join(__dirname, "files"),
      this.baseDirectory,
      {
        template: "",
        variant: this.name,
        module_name: this.moduleName,
        model_name: this.modelName,
        offset_from_root: offsetFromRootProject,
      },
    );

    // await this.addVariantToRoot({
    //   libraryOptions,
    //   variant: this.variant,
    //   projectRoot: this.rootProjectPath,
    //   tree: this.tree,
    //   type: this.type,
    // });

    // await this.addInterfaceToRoot({
    //   libraryOptions,
    //   variant: this.variant,
    //   projectRoot: this.rootProjectPath,
    //   tree: this.tree,
    //   type: this.type,
    // });

    // await this.addStylesToRoot({
    //   projectRoot: this.rootProjectPath,
    //   tree: this.tree,
    //   type: this.type,
    //   variant: this.variant,
    // });
  }

  async remove() {
    const project = getProjects(this.tree).get(this.baseName);

    if (!project) {
      return;
    }

    await nxWorkspace.removeGenerator(this.tree, {
      projectName: this.baseName,
      skipFormat: true,
      forceRemove: true,
    });
  }

  async addVariantToRoot({
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

  async addInterfaceToRoot({
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

  async addStylesToRoot({
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
}
