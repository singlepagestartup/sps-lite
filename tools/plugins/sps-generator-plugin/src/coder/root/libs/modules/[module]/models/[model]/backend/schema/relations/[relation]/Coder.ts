import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsTSLibrary } from "../../../../../../../../../../../utils/create-sps-ts-library";
import { util as getNameStyles } from "../../../../../../../../../../utils/get-name-styles";
import {
  addToFile,
  replaceInFile,
} from "tools/plugins/sps-generator-plugin/src/utils/file-utils";
import { RegexCreator } from "tools/plugins/sps-generator-plugin/src/utils/regex-utils/RegexCreator";
import {
  comma,
  space,
} from "tools/plugins/sps-generator-plugin/src/utils/regex-utils/regex-elements";
import { Coder as RelationsCoder } from "../Coder";

export class Coder {
  parent: RelationsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: ProjectConfiguration;
  relationsSchemaProjectImportPath: string;

  root: string;
  rightProjectSchemaImportPath: string;
  rightModelStyles: ReturnType<typeof getNameStyles>;
  nameStyles: ReturnType<typeof getNameStyles>;
  currentModelNameStyles: ReturnType<typeof getNameStyles>;
  importConfig: ImportConfig;
  exportNamedConfig: ExportNamedConfig;
  importPopulate: ImportPopulate;
  exportPopulate: ExportPopulate;
  importRelation: ImportRelation;
  exportRelation: ExportRelation;

  constructor({
    parent,
    tree,
    name,
  }: {
    parent: RelationsCoder;
    tree: Tree;
    name: string;
  }) {
    this.name = name;
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}-${name}`;
    this.baseDirectory = `${parent.baseDirectory}/${name}`;

    const currentModelName = parent.parent.parent.parent.name;

    let rightModelName: string;
    let rightProjectSchemaImportPath: string;
    const models = parent.parent.parent.parent.parent.parent.project.models;

    for (const model of models) {
      const modelName = model.project.model?.name;
      if (modelName && modelName !== currentModelName) {
        rightModelName = modelName;
        const schemaProject =
          model.project.model.project.backend.project.schema.project.table
            .baseName;

        if (schemaProject) {
          rightProjectSchemaImportPath = schemaProject;
        } else {
          throw new Error(`No schemaProject found for model ${modelName}`);
        }
      }
    }

    const nameStyles = getNameStyles({
      name,
    });

    this.rightProjectSchemaImportPath = rightProjectSchemaImportPath;
    const relationsSchemaProjectImportPath =
      parent.parent.parent.parent.parent.parent.project.relations[0].project
        .relation.project.backend.project.schema.baseName;

    if (!relationsSchemaProjectImportPath) {
      throw new Error(`No relationsSchemaProjectImportPath found`);
    }

    this.nameStyles = nameStyles;
    this.currentModelNameStyles = getNameStyles({ name: currentModelName });
    this.rightModelStyles = getNameStyles({ name: rightModelName });
    this.relationsSchemaProjectImportPath = relationsSchemaProjectImportPath;
    this.importConfig = new ImportConfig({
      leftProjectRelationNamePropertyCased: nameStyles.propertyCased.base,
      libName: this.baseName,
    });
    this.exportNamedConfig = new ExportNamedConfig({
      leftProjectRelationNamePropertyCased: nameStyles.propertyCased.base,
    });
    this.importPopulate = new ImportPopulate({
      leftProjectRelationNamePropertyCased: nameStyles.propertyCased.base,
      libName: this.baseName,
    });
    this.exportPopulate = new ExportPopulate({
      leftProjectRelationNamePropertyCased: nameStyles.propertyCased.base,
    });
    this.importRelation = new ImportRelation({
      leftProjectRelationNamePropertyCased: nameStyles.propertyCased.base,
      libName: this.baseName,
    });
    this.exportRelation = new ExportRelation({
      leftProjectRelationNamePropertyCased: nameStyles.propertyCased.base,
    });
  }

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        relation_name_kebab_cased: this.nameStyles.kebabCased.base,
        right_schema_project_import_path: this.rightProjectSchemaImportPath,
        module_schema_relations_project_import_path:
          this.relationsSchemaProjectImportPath,
        left_schema_model_name: this.currentModelNameStyles.propertyCased.base,
        right_schema_model_name: this.rightModelStyles.propertyCased.base,
      },
    });
  }

  async attach({
    configPath,
    populatePath,
    schemaPath,
  }: {
    configPath: string;
    populatePath: string;
    schemaPath: string;
  }) {
    // const rootRelationsSchemaConfigFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/config.ts`;

    await addToFile({
      toTop: true,
      pathToFile: configPath,
      content: this.importConfig.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: configPath,
      regex: this.exportNamedConfig.onCreate.regex,
      content: this.exportNamedConfig.onCreate.content,
    });

    // const rootRelationsSchemaPopulateFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/populate.ts`;

    await addToFile({
      toTop: true,
      pathToFile: populatePath,
      content: this.importPopulate.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: populatePath,
      regex: this.exportPopulate.onCreate.regex,
      content: this.exportPopulate.onCreate.content,
    });

    // const rootRelationsSchemaRelationsFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/schema.ts`;

    await addToFile({
      toTop: true,
      pathToFile: schemaPath,
      content: this.importRelation.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: schemaPath,
      regex: this.exportRelation.onCreate.regex,
      content: this.exportRelation.onCreate.content,
    });
  }

  async detach({
    configPath,
    populatePath,
    schemaPath,
  }: {
    configPath: string;
    populatePath: string;
    schemaPath: string;
  }) {
    // const rootRelationsSchemaConfigFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/config.ts`;

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: configPath,
        regex: this.importConfig.onRemove.regex,
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
        pathToFile: configPath,
        regex: this.exportNamedConfig.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    // const rootRelationsSchemaPopulateFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/populate.ts`;

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: populatePath,
        regex: this.importPopulate.onRemove.regex,
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
        pathToFile: populatePath,
        regex: this.exportPopulate.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    // const rootRelationsSchemaRelationsFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/schema.ts`;

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: schemaPath,
        regex: this.importRelation.onRemove.regex,
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
        pathToFile: schemaPath,
        regex: this.exportRelation.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
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
}

export class ImportConfig extends RegexCreator {
  constructor({
    libName,
    leftProjectRelationNamePropertyCased,
  }: {
    libName: string;
    leftProjectRelationNamePropertyCased: string;
  }) {
    const place = ``;
    const placeRegex = new RegExp(``);

    const content = `import { config as ${leftProjectRelationNamePropertyCased} } from "${libName}";`;
    const contentRegex = new RegExp(
      `import${space}{${space}config${space}as${space}${leftProjectRelationNamePropertyCased}${space}}${space}from${space}"${libName}";`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ExportNamedConfig extends RegexCreator {
  constructor({
    leftProjectRelationNamePropertyCased,
  }: {
    leftProjectRelationNamePropertyCased: string;
  }) {
    const place = `export const config = {`;
    const placeRegex = new RegExp(`export const config = {`);

    const content = `[${leftProjectRelationNamePropertyCased}.name]: ${leftProjectRelationNamePropertyCased},`;
    const contentRegex = new RegExp(
      `\\[${leftProjectRelationNamePropertyCased}.name\\]:${space}${leftProjectRelationNamePropertyCased}${comma}${space}`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ImportPopulate extends RegexCreator {
  constructor({
    libName,
    leftProjectRelationNamePropertyCased,
  }: {
    libName: string;
    leftProjectRelationNamePropertyCased: string;
  }) {
    const place = ``;
    const placeRegex = new RegExp(``);

    const content = `import { populate as ${leftProjectRelationNamePropertyCased} } from "${libName}";`;
    const contentRegex = new RegExp(
      `import${space}{${space}populate${space}as${space}${leftProjectRelationNamePropertyCased}${space}}${space}from${space}"${libName}";`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ExportPopulate extends RegexCreator {
  constructor({
    leftProjectRelationNamePropertyCased,
  }: {
    leftProjectRelationNamePropertyCased: string;
  }) {
    const place = `export const populate = {`;
    const placeRegex = new RegExp(`export const populate = {`);

    const content = `...${leftProjectRelationNamePropertyCased},`;
    const contentRegex = new RegExp(
      `\\.{3}${leftProjectRelationNamePropertyCased}${comma}${space}`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ImportRelation extends RegexCreator {
  constructor({
    libName,
    leftProjectRelationNamePropertyCased,
  }: {
    libName: string;
    leftProjectRelationNamePropertyCased: string;
  }) {
    const place = ``;
    const placeRegex = new RegExp(``);

    const content = `import { relation as ${leftProjectRelationNamePropertyCased} } from "${libName}";`;
    const contentRegex = new RegExp(
      `import${space}{${space}relation${space}as${space}${leftProjectRelationNamePropertyCased}${space}}${space}from${space}"${libName}";`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ExportRelation extends RegexCreator {
  constructor({
    leftProjectRelationNamePropertyCased,
  }: {
    leftProjectRelationNamePropertyCased: string;
  }) {
    const place = `export const Relations = relations(Table, (helpers) => { return {`;
    const placeRegex = new RegExp(
      `export const Relations = relations\\(Table, \\(helpers\\) => {${space}return {`,
    );

    const content = `...${leftProjectRelationNamePropertyCased}(helpers),`;
    const contentRegex = new RegExp(
      `${space}\\.{3}${leftProjectRelationNamePropertyCased}\\(helpers\\)${comma}${space}`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
