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

export type IGeneratorProps = {};

export class Coder {
  parent: RelationsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project?: ProjectConfiguration;
  relationsSchemaProjectImportPath: string;
  nameStyles: ReturnType<typeof getNameStyles>;
  importPopulate: ImportPopulate;
  exportPopulate: ExportPopulate;
  importRelation: ImportRelation;
  exportRelation: ExportRelation;

  constructor(props: { parent: RelationsCoder; tree: Tree } & IGeneratorProps) {
    const relation =
      props.parent.parent.parent.parent.parent.parent.project.relations[0];

    const name = relation.project.relation.name;

    this.name = name;
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${props.parent.baseName}-${name}`;
    this.baseDirectory = `${props.parent.baseDirectory}/${name}`;

    const nameStyles = relation.project.relation.nameStyles;

    const relationsSchemaProjectImportPath =
      relation.project.relation.project.backend.project.schema.baseName;

    if (!relationsSchemaProjectImportPath) {
      throw new Error(`No relationsSchemaProjectImportPath found`);
    }

    this.nameStyles = nameStyles;

    this.relationsSchemaProjectImportPath = relationsSchemaProjectImportPath;
    this.importPopulate = new ImportPopulate({
      namePropertyCased: nameStyles.propertyCased.base,
      libName: this.baseName,
    });
    this.exportPopulate = new ExportPopulate({
      namePropertyCased: nameStyles.propertyCased.base,
    });
    this.importRelation = new ImportRelation({
      leftProjectRelationNamePropertyCased: nameStyles.propertyCased.base,
      libName: this.baseName,
    });
    this.exportRelation = new ExportRelation({
      leftProjectRelationNamePropertyCased: nameStyles.propertyCased.base,
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async update() {
    console.log("Update:", this.baseName);
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

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async attach({
    populatePath,
    schemaPath,
  }: {
    populatePath: string;
    schemaPath: string;
  }) {
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
    populatePath,
    schemaPath,
  }: {
    populatePath: string;
    schemaPath: string;
  }) {
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
