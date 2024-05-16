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

  nameStyles: ReturnType<typeof getNameStyles>;
  importConfig: ImportConfig;
  exportNamedConfig: ExportNamedConfig;
  importPopulate: ImportPopulate;
  exportPopulate: ExportPopulate;
  importRelation: ImportRelation;
  exportRelation: ExportRelation;

  constructor({ parent, tree }: { parent: RelationsCoder; tree: Tree }) {
    const relation =
      parent.parent.parent.parent.parent.parent.project.relations[0];

    const name = relation.project.relation.name;

    this.name = name;
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}-${name}`;
    this.baseDirectory = `${parent.baseDirectory}/${name}`;

    const nameStyles = relation.project.relation.nameStyles;

    const relationsSchemaProjectImportPath =
      relation.project.relation.project.backend.project.schema.baseName;

    if (!relationsSchemaProjectImportPath) {
      throw new Error(`No relationsSchemaProjectImportPath found`);
    }

    this.nameStyles = nameStyles;

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
        module_schema_relations_project_import_path:
          this.relationsSchemaProjectImportPath,
      },
    });
  }

  async attach({
    // configPath,
    populatePath,
    schemaPath,
  }: {
    // configPath: string;
    populatePath: string;
    schemaPath: string;
  }) {
    // console.log(`🚀 ~ configPath:`, configPath);
    // const rootRelationsSchemaConfigFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/config.ts`;

    // await addToFile({
    //   toTop: true,
    //   pathToFile: configPath,
    //   content: this.importConfig.onCreate.content,
    //   tree: this.tree,
    // });

    // await replaceInFile({
    //   tree: this.tree,
    //   pathToFile: configPath,
    //   regex: this.exportNamedConfig.onCreate.regex,
    //   content: this.exportNamedConfig.onCreate.content,
    // });

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
    // configPath,
    populatePath,
    schemaPath,
  }: {
    // configPath: string;
    populatePath: string;
    schemaPath: string;
  }) {
    // const rootRelationsSchemaConfigFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/config.ts`;

    // try {
    //   await replaceInFile({
    //     tree: this.tree,
    //     pathToFile: configPath,
    //     regex: this.importConfig.onRemove.regex,
    //     content: "",
    //   });
    // } catch (error) {
    //   if (!error.message.includes(`No expected value`)) {
    //     throw error;
    //   }
    // }

    // try {
    //   await replaceInFile({
    //     tree: this.tree,
    //     pathToFile: configPath,
    //     regex: this.exportNamedConfig.onRemove.regex,
    //     content: "",
    //   });
    // } catch (error) {
    //   if (!error.message.includes(`No expected value`)) {
    //     throw error;
    //   }
    // }

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
