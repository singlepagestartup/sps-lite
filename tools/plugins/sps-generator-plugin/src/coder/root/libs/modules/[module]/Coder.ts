import { Tree } from "@nx/devkit";
import { Coder as ModelsCoder } from "./models/Coder";
import { Coder as ModuleCoder } from "../Coder";
import { IEditFieldProps } from "./models/[model]/backend/schema/table/Coder";

/**
 * Module Coder
 *
 * Can work in specific module
 */
export class Coder {
  name: string;
  root: string;
  baseName: string;
  baseDirectory: string;
  tree: Tree;
  parent: ModuleCoder;
  project: {
    models?: ModelsCoder;
  };

  constructor({
    tree,
    name,
    parent,
  }: {
    tree: Tree;
    name: string;
    parent: ModuleCoder;
  }) {
    this.baseName = `${parent.baseName}/${name}`;
    this.baseDirectory = `${parent.baseDirectory}/${name}`;
    this.name = name;
    this.tree = tree;
    this.parent = parent;

    const models = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      models,
    };
  }

  async init() {
    //
  }

  async createModel({ modelName }: { modelName: string }) {
    await this.project.models.createModel({
      modelName,
    });

    await this.project.models.project.model.project.backend.project.schema.project.root.attach(
      {
        indexPath: `${this.baseDirectory}/backend/schema/root/src/lib/index.ts`,
      },
    );
    await this.project.models.project.model.project.backend.project.model.attach(
      {
        indexPath: `${this.baseDirectory}/backend/models/root/src/lib/index.ts`,
      },
    );
    await this.project.models.project.model.project.backend.project.app.attach({
      routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
    });
  }

  async removeModel({ modelName }: { modelName: string }) {
    await this.project.models.init({ modelName });

    await this.project.models.project.model.project.backend.project.app.detach({
      routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
    });

    await this.project.models.project.model.project.backend.project.model.detach(
      {
        indexPath: `${this.baseDirectory}/backend/models/root/src/lib/index.ts`,
      },
    );

    await this.project.models.project.model.project.backend.project.schema.project.root.detach(
      {
        indexPath: `${this.baseDirectory}/backend/schema/root/src/lib/index.ts`,
      },
    );

    await this.project.models.removeModel({
      modelName,
    });
  }

  async addField(props: IEditFieldProps & { modelName: string }) {
    await this.project.models.addField(props);
  }

  async removeField(props: IEditFieldProps & { modelName: string }) {
    await this.project.models.init(props);

    await this.project.models.removeField(props);
  }
}
