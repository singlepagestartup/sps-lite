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
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = {
  name: string;
  level: string;
  template?: string;
};

export class Coder {
  parent: ComponentCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project?: ProjectConfiguration;
  absoluteName: string;
  moduleName: string;
  modelName: string;
  importVariant: ImportVariant;
  exportVariant: ExportVariant;
  importInterface: ImportInterface;
  exportInterface: ExportInterface;
  template?: string;
  level: string;
  importPath: string;

  constructor({
    parent,
    tree,
    name,
    level,
    template,
  }: {
    parent: ComponentCoder;
    tree: Tree;
  } & IGeneratorProps) {
    this.name = name;
    this.baseName = `${parent.baseName}-variants-${level}-${name}`;
    this.baseDirectory = `${parent.baseDirectory}/variants/${level}/${name}`;
    this.absoluteName = `${parent.absoluteName}/variants/${level}/${name}`;
    this.tree = tree;
    this.parent = parent;
    this.template = template;
    this.level = level;

    this.importPath = this.absoluteName;

    const moduleName = this.parent.parent.parent.parent.parent.name;
    const modelName = this.parent.parent.parent.name;
    const nameStyles = getNameStyles({
      name,
    });

    this.moduleName = moduleName;
    this.modelName = modelName;
    this.importVariant = new ImportVariant({
      pascalCasedVariant: nameStyles.pascalCased.base,
      importPath: this.importPath,
    });

    this.exportVariant = new ExportVariant({
      pascalCasedVariant: nameStyles.pascalCased.base,
      kebabCasedVariant: nameStyles.kebabCased.base,
    });

    this.importInterface = new ImportInterface({
      pascalCasedVariant: nameStyles.pascalCased.base,
      importPath: this.importPath,
    });

    this.exportInterface = new ExportInterface({
      pascalCasedVariant: nameStyles.pascalCased.base,
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async migrate(props: { version: string }) {
    const migrator = new Migrator({
      coder: this,
    });

    const version = props.version as keyof typeof migrator.releases;

    await migrator.execute({ version });
  }

  async create() {
    if (this.project) {
      return;
    }

    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);
    const apiClientImportPath =
      this.parent.parent.project.api.project.client.importPath;
    const apiServerImportPath =
      this.parent.parent.project.api.project.server.importPath;
    const modelNamePluralized =
      this.parent.parent.project.api.project.model.modelName;
    const rootContractsImportPath =
      this.parent.parent.parent.project.contracts.project.root.importPath;
    const extendedContractsImportPath =
      this.parent.parent.parent.project.contracts.project.extended.importPath;
    const componentRootPath =
      this.parent.parent.project.component.project.root.baseDirectory;

    const apiModelImportPath =
      this.parent.parent.project.api.project.model.importPath;

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
        template_name: this.template ?? "default",
        variant: this.name,
        module_name: this.moduleName,
        model_name: this.modelName,
        level: this.level,
        api_client_import_path: apiClientImportPath,
        api_server_import_path: apiServerImportPath,
        offset_from_root: offsetFromRootProject,
        model_name_kebab_cased_pluralized: getNameStyles({
          name: this.modelName,
        }).kebabCased.pluralized,
        model_name_pluralized: modelNamePluralized,
        root_contracts_import_path: rootContractsImportPath,
        extended_contracts_import_path: extendedContractsImportPath,
        api_model_import_path: apiModelImportPath,
      },
    });

    await this.attach({
      variantsPath: path.join(
        componentRootPath,
        `/src/lib/${this.level}/variants.ts`,
      ),
      interfacePath: path.join(
        componentRootPath,
        `/src/lib/${this.level}/interface.ts`,
      ),
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async remove() {
    const project = getProjects(this.tree).get(this.baseName);
    const componentRootPath =
      this.parent.parent.project.component.project.root.baseDirectory;

    await this.detach({
      variantsPath: path.join(
        componentRootPath,
        `/src/lib/${this.level}/variants.ts`,
      ),
      interfacePath: path.join(
        componentRootPath,
        `/src/lib/${this.level}/interface.ts`,
      ),
    });

    if (!project) {
      return;
    }

    await nxWorkspace.removeGenerator(this.tree, {
      projectName: this.baseName,
      skipFormat: true,
      forceRemove: true,
    });
  }

  async attach(props: { variantsPath: string; interfacePath: string }) {
    await addToFile({
      toTop: true,
      pathToFile: props.variantsPath,
      content: this.importVariant.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: props.variantsPath,
      regex: this.exportVariant.onCreate.regex,
      content: this.exportVariant.onCreate.content,
    });

    await addToFile({
      toTop: true,
      pathToFile: props.interfacePath,
      content: this.importInterface.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: props.interfacePath,
      regex: this.exportInterface.onCreate.regex,
      content: this.exportInterface.onCreate.content,
    });

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: props.interfacePath,
        regex: new RegExp(`[|](\\s+)+?[|]`),
        content: "|",
      });
    } catch (error: any) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
  }

  async detach(props: { variantsPath: string; interfacePath: string }) {
    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: props.variantsPath,
        regex: this.importVariant.onRemove.regex,
        content: "",
      });
    } catch (error: any) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: props.variantsPath,
        regex: this.exportVariant.onRemove.regex,
        content: "",
      });
    } catch (error: any) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: props.interfacePath,
        regex: this.importInterface.onRemove.regex,
        content: "",
      });
    } catch (error: any) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: props.interfacePath,
        regex: this.exportInterface.onRemove.regex,
        content: "",
      });
    } catch (error: any) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
  }
}

export class ImportVariant extends RegexCreator {
  constructor(props: { pascalCasedVariant: string; importPath: string }) {
    const place = "";
    const placeRegex = new RegExp("");

    const content = `import { Component as ${props.pascalCasedVariant} } from "${props.importPath}";`;

    const contentRegex = new RegExp(
      `import${space}{${space}Component${space}as${space}${props.pascalCasedVariant}${space}}${space}from${space}"${props.importPath}";`,
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
  constructor(props: { pascalCasedVariant: string; importPath: string }) {
    const place = "";
    const placeRegex = new RegExp("");

    const content = `import { IComponentProps as I${props.pascalCasedVariant}ComponentProps } from "${props.importPath}";`;

    const contentRegex = new RegExp(
      `import${space}{${space}IComponentProps${space}as${space}I${props.pascalCasedVariant}ComponentProps }${space}from${space}"${props.importPath}";`,
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
  constructor(props: { pascalCasedVariant: string }) {
    const place = `export type IComponentProps =`;
    const placeRegex = new RegExp(`export type IComponentProps =${space}[|]?`);

    const content = `I${props.pascalCasedVariant}ComponentProps |`;
    const contentRegex = new RegExp(
      `I${props.pascalCasedVariant}ComponentProps${space}[|]`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
