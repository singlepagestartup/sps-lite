import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getProjects,
  moveFilesToNewDirectory,
  offsetFromRoot,
  Tree,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import { copyFile, moveGenerator } from "@nx/workspace";
import { V2GeneratorSchema } from "./schema";
import { Linter } from "@nx/eslint";
import path from "path";
import {
  libraryGenerator as reactLibraryGenerator,
  SupportedStyles,
} from "@nx/react";
import { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";

export async function v2Generator(tree: Tree, options: V2GeneratorSchema) {
  const projects = getProjects(tree);

  const apiProjects = [];
  projects.forEach((project) => {
    if (!project.name.includes("models-order-frontend")) {
      return;
    }

    if (project.root.includes("/frontend/api")) {
      apiProjects.push(project);
    }
  });

  for (const project of apiProjects) {
    const modelFileContent = tree
      .read(`${project.root}/src/lib/model.ts`)
      .toString();

    const oldApiDir = project.root.replace("frontend/api", "frontend/old-api");

    moveGenerator(tree, {
      projectName: project.name,
      destination: oldApiDir,
      updateImportPath: false,
      newProjectName: project.name.replace("api", "old-api"),
      projectNameAndRootFormat: "as-provided",
    });

    tree.delete(`${project.root}/jest.config.ts`);

    const origins = ["server", "client"] as const;

    for (const origin of origins) {
      await createFrontendApi({
        tree,
        baseName: project.name,
        baseDirectory: project.root,
        origin,
      });

      // copy old api /lib/fetch and /lib/model.ts to new api
      moveFilesToNewDirectory(
        tree,
        `${oldApiDir}/src/lib/${origin === "server" ? "fetch" : "rtk"}`,
        `${project.root}/${origin}/src/lib/${origin === "server" ? "fetch" : "rtk"}`,
      );

      if (modelFileContent) {
        tree.write(
          `${project.root}/${origin}/src/lib/model.ts`,
          modelFileContent,
        );
      }
      // moveFilesToNewDirectory(
      //   tree,
      //   `${oldApiDir}/src/lib/model.ts`,
      //   `${project.root}/${origin}/src/lib/model.ts`,
      // );
    }
  }

  console.log(`🚀 ~ v2Generator ~ apiProjects:`, apiProjects);

  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: "library",
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, "files"), projectRoot, options);
  await formatFiles(tree);
}

export default v2Generator;

async function createFrontendApi({
  tree,
  baseDirectory,
  baseName,
  origin,
}: {
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  origin: "server" | "client";
}) {
  const apiLibraryName = `${baseName}-${origin}`;
  const directory = `${baseDirectory}/${origin}`;

  const libraryOptions = {
    name: apiLibraryName,
    directory,
    linter: "none" as Linter.EsLint,
    minimal: true,
    style: "none" as SupportedStyles,
    projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
    strict: true,
  };

  await reactLibraryGenerator(tree, libraryOptions);

  updateProjectConfiguration(tree, apiLibraryName, {
    root: directory,
    sourceRoot: `${directory}/src`,
    projectType: "library",
    tags: [],
    targets: {
      lint: {},
    },
  });

  generateFiles(tree, path.join(__dirname, `files/${origin}`), directory, {
    template: "",
  });

  updateJson(tree, `${directory}/tsconfig.json`, (json) => {
    json.references = [];
    delete json.files;
    delete json.include;

    return json;
  });

  tree.delete(`${directory}/tsconfig.lib.json`);
}
