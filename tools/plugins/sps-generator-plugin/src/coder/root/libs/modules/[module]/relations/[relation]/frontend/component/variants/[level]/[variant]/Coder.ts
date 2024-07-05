import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
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
  moduleName?: string;
  relationName?: string;
  importVariant?: ImportVariant;
  exportVariant?: ExportVariant;
  importInterface?: ImportInterface;
  exportInterface?: ExportInterface;
  absoluteName: string;
  apiClientImportPath?: string;
  apiServerImportPath?: string;
  rootContractsImportPath?: string;
  extendedContractsImportPath?: string;
  template?: string;
  level: string;
  importPath: string;

  constructor(
    props: {
      parent: ComponentCoder;
      tree: Tree;
    } & IGeneratorProps,
  ) {
    this.tree = props.tree;
    this.parent = props.parent;
    this.template = props.template;
    this.name = props.name;
    this.level = props.level;
    this.baseName = `${this.parent.baseName}-variants-${props.level}-${this.name}`;
    this.baseDirectory = `${this.parent.baseDirectory}/variants/${props.level}/${this.name}`;
    this.absoluteName = `${this.parent.absoluteName}/variants/${props.level}/${this.name}`;

    this.importPath = this.absoluteName;

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async setReplacers() {
    const apiClientImportPath =
      this.parent.parent?.project.api.project.client.importPath;
    const apiServerImportPath =
      this.parent.parent.project.api.project.server.importPath;
    const rootContractsImportPath =
      this.parent.parent.parent.project.contracts.project.root.importPath;
    const extendedContractsImportPath =
      this.parent.parent.parent.project.contracts.project.extended.importPath;

    const moduleName = this.parent.parent.parent.parent.parent.name;
    const relationName = this.parent.parent.parent.name;
    const nameStyles = getNameStyles({
      name: this.name,
    });

    this.apiClientImportPath = apiClientImportPath;
    this.apiServerImportPath = apiServerImportPath;
    this.rootContractsImportPath = rootContractsImportPath;
    this.extendedContractsImportPath = extendedContractsImportPath;
    this.moduleName = moduleName;
    this.relationName = relationName;
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
  }

  async migrate(props: { version: string }) {
    const migrator = new Migrator({
      coder: this,
    });

    const version = props.version as keyof typeof migrator.releases;
    await migrator.execute({ version });
  }

  async create() {
    await this.setReplacers();

    if (
      !this.apiClientImportPath ||
      !this.apiServerImportPath ||
      !this.rootContractsImportPath ||
      !this.extendedContractsImportPath
    ) {
      throw new Error(`The replacers are not set`);
    }

    if (this.project) {
      return;
    }

    const leftModelName =
      this.parent.parent.parent.parent.parent.project.models[0].project.model
        .name;
    const rightModel =
      this.parent.parent.parent.parent.parent.project.models[1];
    const rightModelName = rightModel.project.model.name;

    const rightModelRootFrontendComponentImportPath =
      rightModel.project.model.project.frontend.project.component.project.root
        .importPath;

    const apiModelImportPath =
      this.parent.parent.parent.project.frontend.project.api.project.model
        .importPath;

    const relationNameStyles = getNameStyles({
      name: this.parent.parent.parent.name,
    });

    const templateDirectory = this.template
      ? path.join(__dirname, `templates/${this.template}`)
      : path.join(__dirname, `files`);

    await stat(templateDirectory);

    if (!this.moduleName) {
      throw new Error(`Module name is not defined`);
    }

    await createSpsReactLibrary({
      root: this.baseDirectory,
      name: this.baseName,
      tree: this.tree,
      generateFilesPath: templateDirectory,
      templateParams: {
        template: "",
        variant: this.name,
        module_name: this.moduleName,
        relation_name_kebab_cased_pluralized:
          relationNameStyles.kebabCased.pluralized,
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
        root_contracts_import_path: this.rootContractsImportPath,
        extended_contracts_import_path: this.extendedContractsImportPath,
        relation_name: this.relationName || "",
        api_model_import_path: apiModelImportPath,
        level: this.level,
      },
    });

    const rootVariantsPath = `${this.parent.baseDirectory}/root/src/lib/${this.level}/variants.ts`;
    const rootInterfacePath = `${this.parent.baseDirectory}/root/src/lib/${this.level}/interface.ts`;

    await this.attach({
      variantsPath: rootVariantsPath,
      interfacePath: rootInterfacePath,
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async remove() {
    await this.setReplacers();

    const project = getProjects(this.tree).get(this.baseName);

    if (!project) {
      return;
    }

    const rootVariantsPath = `${this.parent.baseDirectory}/root/src/lib/${this.level}/variants.ts`;
    const rootInterfacePath = `${this.parent.baseDirectory}/root/src/lib/${this.level}/interface.ts`;

    await this.detach({
      variantsPath: rootVariantsPath,
      interfacePath: rootInterfacePath,
    });

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
    this.setReplacers();

    if (
      !this.importVariant ||
      !this.importInterface ||
      !this.exportVariant ||
      !this.exportInterface
    ) {
      throw new Error(`The replacers are not set`);
    }

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
    } catch (error: any) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
  }

  async detach({
    variantsPath,
    interfacePath,
  }: {
    variantsPath: string;
    interfacePath: string;
  }) {
    this.setReplacers();

    if (
      !this.importVariant ||
      !this.importInterface ||
      !this.exportVariant ||
      !this.exportInterface
    ) {
      throw new Error(`The replacers are not set`);
    }

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: variantsPath,
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
        pathToFile: variantsPath,
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
        pathToFile: interfacePath,
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
        pathToFile: interfacePath,
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
  constructor(props: {
    pascalCasedVariant: string;
    kebabCasedVariant: string;
  }) {
    const place = `export const variants = {`;
    const placeRegex = new RegExp(`export const variants = {`);

    const content = `"${props.kebabCasedVariant}":${props.pascalCasedVariant},`;
    const contentRegex = new RegExp(
      `${doubleQuote}${props.kebabCasedVariant}${doubleQuote}:${space}${props.pascalCasedVariant}${comma}`,
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
