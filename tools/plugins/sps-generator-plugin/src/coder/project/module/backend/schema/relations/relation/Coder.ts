import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
} from "@nx/devkit";
import path from "path";
import { createSpsJsLibrary } from "tools/plugins/sps-generator-plugin/src/utils/js-lib-utils";
import * as nxWorkspace from "@nx/workspace";
import { util as getModelByName } from "../../../../../../utils/get-model-by-name";
import { util as getNameStyles } from "../../../../../../utils/get-name-styles";
import { util as getModuleCuttedStyles } from "../../../../../../utils/get-module-cutted-styles";

export class Coder {
  libName: string;
  root: string;
  leftProjectImportPath: string;
  rightProjectImportPath: string;
  leftModelStyles: ReturnType<typeof getNameStyles>;
  rightModelStyles: ReturnType<typeof getNameStyles>;
  moduleStyles: ReturnType<typeof getModuleCuttedStyles>;
  relationNameStyles: ReturnType<typeof getNameStyles>;

  constructor({
    module,
    relationName,
    leftSchemaProject,
    rightSchemaProject,
  }: {
    module: string;
    relationName: string;
    leftSchemaProject: ProjectConfiguration;
    rightSchemaProject: ProjectConfiguration;
  }) {
    const libName = `@sps/${module}-backend-schema-relations-${relationName}`;
    const root = `libs/modules/${module}/backend/schema/relations/${relationName}`;

    const leftProjectImportPath = leftSchemaProject.name;
    const rightProjectImportPath = rightSchemaProject.name;

    const leftModelName = getModelByName({ name: leftSchemaProject.name });
    const rightModelName = getModelByName({ name: rightSchemaProject.name });

    const leftModelStyles = getNameStyles({ name: leftModelName });
    const rightModelStyles = getNameStyles({ name: rightModelName });

    this.libName = libName;
    this.root = root;
    this.leftProjectImportPath = leftProjectImportPath;
    this.rightProjectImportPath = rightProjectImportPath;
    this.leftModelStyles = leftModelStyles;
    this.rightModelStyles = rightModelStyles;
    this.moduleStyles = getModuleCuttedStyles({ name: module });
    this.relationNameStyles = getNameStyles({ name: relationName });
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        left_schema_project_import_path: this.leftProjectImportPath,
        left_schema_table_name: this.leftModelStyles.pascalCased.base,
        left_schema_model_name: this.leftModelStyles.propertyCased.base,
        left_schema_model_name_snake_cased:
          this.leftModelStyles.snakeCased.base,
        right_schema_project_import_path: this.rightProjectImportPath,
        right_schema_table_name: this.rightModelStyles.pascalCased.base,
        right_schema_model_name: this.rightModelStyles.propertyCased.base,
        right_schema_model_name_snake_cased:
          this.rightModelStyles.snakeCased.base,
        module_name_cutted_snake_cased: this.moduleStyles.snakeCased,
        module_name_cutted_pascal_cased: this.moduleStyles.pascalCased,
        relation_name_snake_cased: this.relationNameStyles.snakeCased.base,
        relation_name_pascal_cased: this.relationNameStyles.pascalCased.base,
      },
    });
  }

  async delete({ tree }: { tree: Tree }) {
    const project = getProjects(tree).get(this.libName);
    if (!project) {
      return;
    }

    await nxWorkspace.removeGenerator(tree, {
      projectName: this.libName,
      skipFormat: true,
      forceRemove: true,
    });

    await formatFiles(tree);
  }
}
