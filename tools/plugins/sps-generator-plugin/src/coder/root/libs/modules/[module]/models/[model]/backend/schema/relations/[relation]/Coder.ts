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
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = {
  name: string;
};

export class Coder {
  parent: RelationsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project?: ProjectConfiguration;
  nameStyles: ReturnType<typeof getNameStyles>;
  importPopulate: ImportPopulate;
  exportPopulate: ExportPopulate;
  importRelation: ImportRelation;
  exportRelation: ExportRelation;
  importContracts: ImportContracts;
  exportNamedInterface: ExportNamedInterface;

  constructor(props: { parent: RelationsCoder; tree: Tree } & IGeneratorProps) {
    this.parent = props.parent;
    this.tree = props.tree;
    this.name = props.name;

    this.baseName = `${props.parent.baseName}-${this.name}`;
    this.baseDirectory = `${props.parent.baseDirectory}/${this.name}`;

    const nameStyles = getNameStyles({ name: this.name });

    this.nameStyles = nameStyles;

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async setReplacers() {
    this.importPopulate = new ImportPopulate({
      namePropertyCased: this.nameStyles.propertyCased.base,
      libName: this.baseName,
    });
    this.exportPopulate = new ExportPopulate({
      namePropertyCased: this.nameStyles.propertyCased.base,
    });
    this.importRelation = new ImportRelation({
      leftProjectRelationNamePropertyCased: this.nameStyles.propertyCased.base,
      libName: this.baseName,
    });
    this.exportRelation = new ExportRelation({
      leftProjectRelationNamePropertyCased: this.nameStyles.propertyCased.base,
    });
    this.importContracts = new ImportContracts({
      libName: this.baseName,
      relationNamePascalCased: getNameStyles({
        name: this.name,
      }).pascalCased.base,
    });
    this.exportNamedInterface = new ExportNamedInterface({
      relationNamePropertyCased: getNameStyles({
        name: this.name,
      }).propertyCased.base,
      relationNamePascalCased: getNameStyles({
        name: this.name,
      }).pascalCased.base,
    });
  }

  async update() {
    const migrator = new Migrator({
      coder: this,
    });

    const version = "0.0.156";
    await migrator.execute({ version });
  }

  async create() {
    if (this.project) {
      return;
    }

    await this.setReplacers();
    const relation =
      this.parent.parent.parent.parent.parent.parent.project.relations[0];

    const relationsSchemaProjectImportPath =
      relation.project.relation.project.backend.project.schema.baseName;

    const relationsPopulatePath = path.join(
      this.parent.parent.parent.project.schema.project.relations.project.root
        .baseDirectory,
      "/src/lib/populate.ts",
    );
    const relationsSchemaPath = path.join(
      this.parent.parent.parent.project.schema.project.relations.project.root
        .baseDirectory,
      "/src/lib/schema.ts",
    );
    const levelContractsPath = path.join(
      this.parent.parent.parent.parent.project.contracts.project.extended
        .baseDirectory,
      "/src/lib/interfaces/sps-lite.ts",
    );

    if (!relationsSchemaProjectImportPath) {
      throw new Error(`No relationsSchemaProjectImportPath found`);
    }

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        module_schema_relations_project_import_path:
          relationsSchemaProjectImportPath,
      },
    });

    await this.attach({
      populatePath: relationsPopulatePath,
      schemaPath: relationsSchemaPath,
      contractsPath: levelContractsPath,
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async attach({
    populatePath,
    schemaPath,
    contractsPath,
  }: {
    populatePath: string;
    schemaPath: string;
    contractsPath: string;
  }) {
    await this.setReplacers();

    await addToFile({
      toTop: true,
      pathToFile: contractsPath,
      content: this.importContracts.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: contractsPath,
      regex: this.exportNamedInterface.onCreate.regex,
      content: this.exportNamedInterface.onCreate.content,
    });

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
    populatePath,
    schemaPath,
    contractsPath,
  }: {
    populatePath: string;
    schemaPath: string;
    contractsPath: string;
  }) {
    await this.setReplacers();

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: contractsPath,
        regex: this.exportNamedInterface.onRemove.regex,
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
        pathToFile: contractsPath,
        regex: this.importContracts.onRemove.regex,
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
    await this.setReplacers();

    const project = getProjects(this.tree).get(this.baseName);

    if (!project) {
      return;
    }

    const relationsPopulatePath = path.join(
      this.parent.parent.parent.project.schema.project.relations.project.root
        .baseDirectory,
      "/src/lib/populate.ts",
    );
    const relationsSchemaPath = path.join(
      this.parent.parent.parent.project.schema.project.relations.project.root
        .baseDirectory,
      "/src/lib/schema.ts",
    );
    const levelContractsPath = path.join(
      this.parent.parent.parent.parent.project.contracts.project.extended
        .baseDirectory,
      "/src/lib/interfaces/sps-lite.ts",
    );

    await this.detach({
      populatePath: relationsPopulatePath,
      schemaPath: relationsSchemaPath,
      contractsPath: levelContractsPath,
    });

    await nxWorkspace.removeGenerator(this.tree, {
      projectName: this.baseName,
      skipFormat: true,
      forceRemove: true,
    });
  }
}

export class ImportPopulate extends RegexCreator {
  constructor({
    libName,
    namePropertyCased,
  }: {
    libName: string;
    namePropertyCased: string;
  }) {
    const place = ``;
    const placeRegex = new RegExp(``);

    const content = `import { populate as ${namePropertyCased} } from "${libName}";`;
    const contentRegex = new RegExp(
      `import${space}{${space}populate${space}as${space}${namePropertyCased}${space}}${space}from${space}"${libName}";`,
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
  constructor({ namePropertyCased }: { namePropertyCased: string }) {
    const place = `return {`;
    const placeRegex = new RegExp(`return {`);

    const content = `${namePropertyCased}: ${namePropertyCased}(params),`;
    const contentRegex = new RegExp(
      `${namePropertyCased}: ${namePropertyCased}\\(params\\)${comma}${space}`,
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

export class ImportContracts extends RegexCreator {
  constructor({
    libName,
    relationNamePascalCased,
  }: {
    libName: string;
    relationNamePascalCased: string;
  }) {
    const place = ``;
    const placeRegex = new RegExp(``);

    const content = `import { IRelation as I${relationNamePascalCased} } from "${libName}";`;
    const contentRegex = new RegExp(
      `import${space}{${space}IRelation${space}as${space}I${relationNamePascalCased}${space}}${space}from${space}"${libName}";`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ExportNamedInterface extends RegexCreator {
  constructor({
    relationNamePropertyCased,
    relationNamePascalCased,
  }: {
    relationNamePropertyCased: string;
    relationNamePascalCased: string;
  }) {
    const place = `export interface IModel extends IParentModel {`;
    const placeRegex = new RegExp(
      `export${space}interface${space}IModel${space}extends${space}IParentModel${space}{`,
    );

    const content = `${relationNamePropertyCased}: I${relationNamePascalCased}[];`;
    const contentRegex = new RegExp(
      `${relationNamePropertyCased}:${space}I${relationNamePascalCased}\\[\\];`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
