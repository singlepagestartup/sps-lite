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
import { RegexCreator } from "tools/plugins/sps-generator-plugin/src/utils/regex-utils/RegexCreator";
import {
  space,
  comma,
  doubleQuote,
} from "../../../../../../../../../../../../utils/regex-utils/regex-elements";
import { util as getNameStyles } from "../../../../../../../../../../../utils/get-name-styles";
import {
  addToFile,
  replaceInFile,
} from "tools/plugins/sps-generator-plugin/src/utils/file-utils";

export class Coder {
  parent: ComponentCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: ProjectConfiguration;
  moduleName: string;
  modelName: string;
  importVariant: ImportVariant;
  exportVariant: ExportVariant;
  importInterface: ImportInterface;
  exportInterface: ExportInterface;

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

    const nameStyles = getNameStyles({
      name,
    });

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
    this.importVariant = new ImportVariant({
      pascalCasedVariant: nameStyles.pascalCased.base,
      libName: this.baseName,
    });
    this.exportVariant = new ExportVariant({
      pascalCasedVariant: nameStyles.pascalCased.base,
      kebabCasedVariant: nameStyles.kebabCased.base,
    });
    this.importInterface = new ImportInterface({
      pascalCasedVariant: nameStyles.pascalCased.base,
      libName: this.baseName,
    });
    this.exportInterface = new ExportInterface({
      pascalCasedVariant: nameStyles.pascalCased.base,
    });
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

  async attach({
    variantsPath,
    interfacePath,
  }: {
    variantsPath: string;
    interfacePath: string;
  }) {
    await addToFile({
      toTop: true,
      pathToFile: variantsPath,
      content: this.importVariant.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: variantsPath,
      regex: this.exportVariant.onCreate.regex,
      content: this.exportVariant.onCreate.content,
    });

    await addToFile({
      toTop: true,
      pathToFile: interfacePath,
      content: this.importInterface.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: interfacePath,
      regex: this.exportInterface.onCreate.regex,
      content: this.exportInterface.onCreate.content,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: interfacePath,
      regex: new RegExp(`[|](\\s+)+?[|]`),
      content: "|",
    });
  }

  async detach({
    variantsPath,
    interfacePath,
  }: {
    variantsPath: string;
    interfacePath: string;
  }) {
    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: variantsPath,
        regex: this.importVariant.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: variantsPath,
        regex: this.exportVariant.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: interfacePath,
        regex: this.importInterface.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: interfacePath,
        regex: this.exportInterface.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
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

export class ImportVariant extends RegexCreator {
  constructor({
    pascalCasedVariant,
    libName,
  }: {
    pascalCasedVariant: string;
    libName: string;
  }) {
    const place = "";
    const placeRegex = new RegExp("");

    const content = `import { Component as ${pascalCasedVariant} } from "${libName}";`;

    const contentRegex = new RegExp(
      `import${space}{${space}Component${space}as${space}${pascalCasedVariant}${space}}${space}from${space}"${libName}";`,
    );

    super({
      place,
      placeRegex,
      contentRegex,
      content,
    });
  }
}

export class ExportVariant extends RegexCreator {
  constructor({
    pascalCasedVariant,
    kebabCasedVariant,
  }: {
    pascalCasedVariant: string;
    kebabCasedVariant: string;
  }) {
    const place = `export const variants = {`;
    const placeRegex = new RegExp(`export const variants = {`);

    const content = `"${kebabCasedVariant}":${pascalCasedVariant},`;
    const contentRegex = new RegExp(
      `${doubleQuote}${kebabCasedVariant}${doubleQuote}:${space}${pascalCasedVariant}${comma}`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ImportInterface extends RegexCreator {
  constructor({
    pascalCasedVariant,
    libName,
  }: {
    pascalCasedVariant: string;
    libName: string;
  }) {
    const place = "";
    const placeRegex = new RegExp("");

    const content = `import { IComponentProps as I${pascalCasedVariant}ComponentProps } from "${libName}";`;

    const contentRegex = new RegExp(
      `import${space}{${space}IComponentProps${space}as${space}I${pascalCasedVariant}ComponentProps }${space}from${space}"${libName}";`,
    );

    super({
      place,
      placeRegex,
      contentRegex,
      content,
    });
  }
}

export class ExportInterface extends RegexCreator {
  constructor({ pascalCasedVariant }: { pascalCasedVariant: string }) {
    const place = `export type IComponentProps =`;
    const placeRegex = new RegExp(`export type IComponentProps =${space}[|]?`);

    const content = `I${pascalCasedVariant}ComponentProps |`;
    const contentRegex = new RegExp(
      `I${pascalCasedVariant}ComponentProps${space}|`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
