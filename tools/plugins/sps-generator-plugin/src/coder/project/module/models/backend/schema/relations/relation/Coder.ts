import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
  names,
} from "@nx/devkit";
import pluralize from "pluralize";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { createSpsJsLibrary } from "../../../../../../../../utils/js-lib-utils";
import { util as getNameStyles } from "../../../../../../../utils/get-name-styles";
import { util as getModelByName } from "../../../../../../../utils/get-model-by-name";
import { util as getModuleByName } from "../../../../../../../utils/get-module-by-name";

export class Coder {
  root: string;
  libName: string;
  moduleSchemaRelationsProject: ProjectConfiguration;
  rightProjectSchemaImportPath: string;
  relationNameStyles: ReturnType<typeof getNameStyles>;
  rightModelStyles: ReturnType<typeof getNameStyles>;
  leftModelStyles: ReturnType<typeof getNameStyles>;
  leftProjectRelationName: string;

  constructor({
    relationName,
    leftProjectRelationName,
    moduleSchemaRelationsProject,
    leftSchemaProject,
    rightSchemaProject,
  }: {
    leftProjectRelationName: string;
    relationName: string;
    moduleSchemaRelationsProject: ProjectConfiguration;
    leftSchemaProject: ProjectConfiguration;
    rightSchemaProject: ProjectConfiguration;
  }) {
    const module = getModuleByName({ name: leftSchemaProject.name });
    const model = getModelByName({ name: leftSchemaProject.name });
    const rightProjectSchemaImportPath = rightSchemaProject.name;

    this.libName = `@sps/${module}-models-${model}-backend-schema-relations-${relationName}`;
    this.root = `libs/modules/${module}/models/${model}/backend/schema/relations/${leftProjectRelationName}`;

    const leftModelName = getModelByName({ name: leftSchemaProject.name });
    const rightModelName = getModelByName({ name: rightSchemaProject.name });

    const leftModelStyles = getNameStyles({ name: leftModelName });
    const rightModelStyles = getNameStyles({ name: rightModelName });

    this.rightProjectSchemaImportPath = rightProjectSchemaImportPath;
    this.relationNameStyles = getNameStyles({ name: relationName });
    this.moduleSchemaRelationsProject = moduleSchemaRelationsProject;
    this.leftModelStyles = leftModelStyles;
    this.rightModelStyles = rightModelStyles;
    this.leftProjectRelationName = leftProjectRelationName;
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        relation_name_kebab_cased: this.leftProjectRelationName,
        right_schema_project_import_path: this.rightProjectSchemaImportPath,
        module_schema_relations_project_import_path:
          this.moduleSchemaRelationsProject.name,
        left_schema_model_name: this.leftModelStyles.propertyCased.base,
        right_schema_model_name: this.rightModelStyles.propertyCased.base,
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
