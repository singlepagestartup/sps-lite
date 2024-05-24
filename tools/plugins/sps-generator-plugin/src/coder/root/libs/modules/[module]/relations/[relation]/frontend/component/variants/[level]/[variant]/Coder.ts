import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
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
import { util as createSpsReactLibrary } from "../../../../../../../../../../../../utils/create-sps-react-library";
import { stat } from "fs/promises";
import pluralize from "pluralize";

export class Coder {
  parent: ComponentCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: ProjectConfiguration;
  moduleName: string;
  relationName: string;
  importVariant: ImportVariant;
  exportVariant: ExportVariant;
  importInterface: ImportInterface;
  exportInterface: ExportInterface;
  importStyles: ImportStyles;
  apiClientImportPath: string;
  apiServerImportPath: string;
  reduxImportPath: string;
  rootContractsImportPath: string;
  extendedContractsImportPath: string;
  template: string;

  constructor({
    parent,
    tree,
    name,
    level,
    template,
  }: {
    name: string;
    parent: ComponentCoder;
    tree: Tree;
    level: string;
    template?: string;
  }) {
    this.name = name;
    this.baseName = `${parent.baseName}-variants-${level}-${name}`;
    this.baseDirectory = `${parent.baseDirectory}/variants/${level}/${name}`;
    this.tree = tree;
    this.parent = parent;
    this.template = template;

    const apiClientImportPath =
      this.parent.parent.project.api.project.client.baseName;
    const apiServerImportPath =
      this.parent.parent.project.api.project.server.baseName;
    const reduxImportPath = this.parent.parent.project.redux.baseName;
    const rootContractsImportPath =
      this.parent.parent.parent.project.contracts.project.root.baseName;
    const extendedContractsImportPath =
      this.parent.parent.parent.project.contracts.project.extended.baseName;

    const moduleName = this.parent.parent.parent.parent.parent.name;
    const relationName = this.parent.parent.parent.name;

    const nameStyles = getNameStyles({
      name,
    });

    this.apiClientImportPath = apiClientImportPath;
    this.apiServerImportPath = apiServerImportPath;
    this.reduxImportPath = reduxImportPath;
    this.rootContractsImportPath = rootContractsImportPath;
    this.extendedContractsImportPath = extendedContractsImportPath;
    this.moduleName = moduleName;
    this.relationName = relationName;
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

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    const leftModelName =
      this.parent.parent.parent.parent.parent.project.models[1].project.model
        .name;
    const rightModel =
      this.parent.parent.parent.parent.parent.project.models[2];
    const rightModelName = rightModel.project.model.name;

    const rightModelRootFrontendComponentImportPath =
      rightModel.project.model.project.frontend.project.component.project.root
        .baseName;

    const templateDirectory = this.template
      ? path.join(__dirname, `templates/${this.template}`)
      : path.join(__dirname, `files`);

    await stat(templateDirectory);

    await createSpsReactLibrary({
      root: this.baseDirectory,
      name: this.baseName,
      tree: this.tree,
      generateFilesPath: templateDirectory,
      templateParams: {
        template: "",
        variant: this.name,
        module_name: this.moduleName,
        left_model_name_kebab_cased_pluralized: getNameStyles({
          name: leftModelName,
        }).kebabCased.pluralized,
        left_model_name_property_cased: getNameStyles({ name: leftModelName })
          .propertyCased.base,
        right_model_name_kebab_cased_pluralized: getNameStyles({
          name: rightModelName,
        }).kebabCased.pluralized,
        right_model_name_property_cased: getNameStyles({
          name: rightModelName,
        }).propertyCased.base,
        right_model_root_frontend_component_import_path:
          rightModelRootFrontendComponentImportPath,
        api_client_import_path: this.apiClientImportPath,
        api_server_import_path: this.apiServerImportPath,
        redux_import_path: this.reduxImportPath,
        root_contracts_import_path: this.rootContractsImportPath,
        extended_contracts_import_path: this.extendedContractsImportPath,
        relation_name: this.relationName,
        offset_from_root: offsetFromRootProject,
      },
    });

    await this.init();
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
