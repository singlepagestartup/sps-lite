import {
  ProjectConfiguration,
  Tree,
  generateFiles,
  getProjects,
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
  importStyles: ImportStyles;

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

    const moduleName = this.parent.parent.parent.parent.parent.name;
    const modelName = this.parent.parent.parent.name;
    const nameStyles = getNameStyles({
      name,
    });

    this.moduleName = moduleName;
    this.modelName = modelName;
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
    this.importStyles = new ImportStyles({
      level,
      kebabCasedVariant: nameStyles.kebabCased.base,
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
    indexScssPath,
  }: {
    variantsPath: string;
    interfacePath: string;
    indexScssPath: string;
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

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: interfacePath,
        regex: new RegExp(`[|](\\s+)+?[|]`),
        content: "|",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    await addToFile({
      toTop: true,
      pathToFile: indexScssPath,
      content: this.importStyles.onCreate.content,
      tree: this.tree,
    });
  }

  async detach({
    variantsPath,
    interfacePath,
    indexScssPath,
  }: {
    variantsPath: string;
    interfacePath: string;
    indexScssPath: string;
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

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: indexScssPath,
        regex: this.importStyles.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
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
      `I${pascalCasedVariant}ComponentProps${space}[|]`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ImportStyles extends RegexCreator {
  constructor({
    level,
    kebabCasedVariant,
  }: {
    level: string;
    kebabCasedVariant: string;
  }) {
    const place = "";
    const placeRegex = new RegExp("");

    const content = `@import "../../../../variants/${level}/${kebabCasedVariant}/src/index";`;

    const contentRegex = new RegExp(
      `@import "../../../../variants/${level}/${kebabCasedVariant}/src/index";`,
    );

    super({
      place,
      placeRegex,
      contentRegex,
      content,
    });
  }
}
