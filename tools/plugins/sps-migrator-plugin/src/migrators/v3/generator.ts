import {
  formatFiles,
  getProjects,
  readJson,
  Tree,
  updateJson,
} from "@nx/devkit";
import * as path from "path";
import { V3GeneratorSchema } from "./schema";

export async function v3Generator(tree: Tree, options: V3GeneratorSchema) {
  deleteCommonjsFromProjects(tree);

  updateJson(tree, "single-page-startup.json", (json) => {
    json.version = "3";

    return json;
  });

  await formatFiles(tree);
}

export default v3Generator;

// turbopack throws error if type: 'commonjs' exists in package.json
function deleteCommonjsFromProjects(tree) {
  const projects = getProjects(tree);

  projects.forEach((project) => {
    // check is package.json exists in project
    if (!tree.exists(path.join(project.root, "package.json"))) {
      return;
    }

    // read project package.json file
    const projectPackageJson = readJson(
      tree,
      path.join(project.root, "package.json"),
    );

    if (projectPackageJson.type === "commonjs") {
      delete projectPackageJson.type;
      tree.write(
        path.join(project.root, "package.json"),
        JSON.stringify(projectPackageJson, null, 2),
      );
    }
  });
}
