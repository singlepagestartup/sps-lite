import {
  formatFiles,
  getProjects,
  ProjectConfiguration,
  readCachedProjectGraph,
  readProjectConfiguration,
  Tree,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import { V1GeneratorSchema } from "./schema";

export async function v1Generator(tree: Tree, options: V1GeneratorSchema) {
  await renameApi({ tree });
  await deleteTestTargetInComponent({ tree });
  await deleteBuildTargetInFrontendApi({ tree });
  await deleteUnusedTSCongifs({ tree });
  await deleteFilesAndIncludeInTSConfigs({ tree });
}

export default v1Generator;

async function deleteFilesAndIncludeInTSConfigs({ tree }: { tree: Tree }) {
  const projects = getProjects(tree);

  const componentApiAndReduxProjects = [];
  projects.forEach((project) => {
    if (project.root.includes("/model")) {
      if (
        project.root.includes("/api") ||
        project.root.includes("/redux") ||
        project.root.includes("/component")
      ) {
        componentApiAndReduxProjects.push(project);
      }
    }
  });

  for (const project of componentApiAndReduxProjects) {
    await deleteFilesAndIncludeInTSConfig({ tree, project });
  }
}

async function deleteFilesAndIncludeInTSConfig({
  tree,
  project,
}: {
  tree: Tree;
  project: ProjectConfiguration;
}) {
  const projectFiles = getAllFiles({
    tree,
    root: project.root,
  });

  for (const projectFile of projectFiles) {
    if (projectFile.path.includes("tsconfig.json")) {
      updateJson(tree, projectFile.path, (json) => {
        delete json.files;
        delete json.include;

        return json;
      });
    }
  }

  await formatFiles(tree);
}

async function deleteTestTargetInComponent({ tree }: { tree: Tree }) {
  const projects = getProjects(tree);

  const componentProjects = [];
  projects.forEach((project) => {
    if (project.root.includes("/model")) {
      componentProjects.push(project);
    }
  });

  for (const project of componentProjects) {
    await deleteTestTarget({ tree, project });
  }
}

async function deleteBuildTargetInFrontendApi({ tree }: { tree: Tree }) {
  const projects = getProjects(tree);

  const frontendApiProjects = [];
  projects.forEach((project) => {
    if (
      project.root.includes("/model") &&
      project.root.includes("/frontend/api")
    ) {
      frontendApiProjects.push(project);
    }
  });

  for (const project of frontendApiProjects) {
    await deleteBuildTarget({ tree, project });
  }
}

async function deleteTestTarget({
  tree,
  project,
}: {
  tree: Tree;
  project: ProjectConfiguration;
}) {
  if (!project.targets.test) {
    return;
  }

  const filteredTargets = Object.keys(project.targets).reduce((acc, target) => {
    if (target !== "test") {
      acc[target] = project.targets[target];
    }
    return acc;
  }, {});

  updateProjectConfiguration(tree, project.name, {
    root: project.root,
    sourceRoot: project.sourceRoot,
    projectType: "library",
    tags: [],
    targets: filteredTargets,
  });

  await formatFiles(tree);
}

async function deleteBuildTarget({
  tree,
  project,
}: {
  tree: Tree;
  project: ProjectConfiguration;
}) {
  if (!project.targets["tsc:build"]) {
    return;
  }

  const filteredTargets = Object.keys(project.targets).reduce((acc, target) => {
    if (target !== "tsc:build") {
      acc[target] = project.targets[target];
    }
    return acc;
  }, {});

  updateProjectConfiguration(tree, project.name, {
    root: project.root,
    sourceRoot: project.sourceRoot,
    projectType: "library",
    tags: [],
    targets: filteredTargets,
  });

  await formatFiles(tree);
}

async function deleteUnusedTSCongifs({ tree }: { tree: Tree }) {
  const projects = getProjects(tree);

  const arrayProjects = [];
  projects.forEach((project) => {
    if (project.root.includes("/modules")) {
      arrayProjects.push(project);
    }
  });

  for (const project of arrayProjects) {
    await deleteTSLibConfig({ tree, project });
    await deleteTSSpecConfig({ tree, project });
  }
}

async function deleteTSSpecConfig({
  tree,
  project,
}: {
  tree: Tree;
  project: ProjectConfiguration;
}) {
  if (project.targets.test) {
    return;
  }

  const projectFiles = getAllFiles({
    tree,
    root: project.root,
  });

  for (const projectFile of projectFiles) {
    if (projectFile.path.includes("tsconfig.spec.json")) {
      tree.delete(projectFile.path);
    }

    if (projectFile.path.includes("tsconfig.json")) {
      updateJson(tree, projectFile.path, (json) => {
        json.references = json.references?.filter(
          (ref: any) => !ref.path.includes("tsconfig.spec.json"),
        );

        return json;
      });
    }
  }

  await formatFiles(tree);
}

async function deleteTSLibConfig({
  tree,
  project,
}: {
  tree: Tree;
  project: ProjectConfiguration;
}) {
  if (project.targets["tsc:build"]) {
    return;
  }

  const projectFiles = getAllFiles({
    tree,
    root: project.root,
  });

  for (const projectFile of projectFiles) {
    if (projectFile.path.includes("tsconfig.lib.json")) {
      tree.delete(projectFile.path);
    }

    if (projectFile.path.includes("tsconfig.json")) {
      updateJson(tree, projectFile.path, (json) => {
        json.references = json.references?.filter(
          (ref: any) => !ref.path.includes("tsconfig.lib.json"),
        );

        return json;
      });
    }
  }

  await formatFiles(tree);
}

async function renameApi({ tree }: { tree: Tree }) {
  const projects = getProjects(tree);

  const apiProjects = [];
  projects.forEach((project) => {
    if (project.root.includes("/frontend/api")) {
      apiProjects.push(project);
    }
  });

  for (const project of apiProjects) {
    renameClientToRtk(tree, project.root);
    renameServerToFetch(tree, project.root);

    updateClientImportToRtk(tree, project.root);
    updateServerImportToFetch(tree, project.root);

    updateClientExportToRtk(tree, project.root);
    updateServerExportToFetch(tree, project.root);

    const graph = readCachedProjectGraph();
    const dependenciesProjectNames = Object.keys(graph.dependencies);
    const toUpdateImportsProjects = [];

    dependenciesProjectNames.forEach((dependencyProjectName) => {
      graph.dependencies[dependencyProjectName].forEach((dependency) => {
        if (dependency.target === project.name) {
          toUpdateImportsProjects.push(dependency.source);
        }
      });
    });

    for (const toUpdateImportsProject of toUpdateImportsProjects) {
      const toUpdateImportsProjectConfig = readProjectConfiguration(
        tree,
        toUpdateImportsProject,
      );

      const projectFiles = getAllFiles({
        tree,
        root: toUpdateImportsProjectConfig.root,
      });

      for (const projectFile of projectFiles) {
        if (projectFile.content?.includes(project.name)) {
          updateApiImport(tree, projectFile, project);
        }
      }
    }
  }

  await formatFiles(tree);
}

function renameClientToRtk(tree: Tree, projectRoot: string) {
  const clientFolder = projectRoot + "/src/lib/client";

  if (!tree.exists(clientFolder)) {
    return;
  }

  const rtkFolder = projectRoot + "/src/lib/rtk";

  tree.rename(clientFolder, rtkFolder);
}

function renameServerToFetch(tree: Tree, projectRoot: string) {
  const clientFolder = projectRoot + "/src/lib/server";

  if (!tree.exists(clientFolder)) {
    return;
  }

  const rtkFolder = projectRoot + "/src/lib/fetch";

  tree.rename(clientFolder, rtkFolder);
}

function updateClientImportToRtk(tree: Tree, projectRoot: string) {
  const rtkFolder = projectRoot + "/src/lib/rtk";

  if (!tree.exists(rtkFolder)) {
    return;
  }

  const filePath = projectRoot + "/src/index.ts";

  const fileContent = tree.read(filePath).toString("utf-8");

  const replacedImport = fileContent.replace(
    /import { api as client, subscription } from ".\/lib\/client";/g,
    `import { api as rtk, subscription } from "./lib/rtk";`,
  );

  tree.write(filePath, replacedImport);
}

function updateServerImportToFetch(tree: Tree, projectRoot: string) {
  const fetchFolder = projectRoot + "/src/lib/fetch";

  if (!tree.exists(fetchFolder)) {
    return;
  }

  const filePath = projectRoot + "/src/index.ts";

  const fileContent = tree.read(filePath).toString("utf-8");

  const replacedImport = fileContent.replace(
    /import { api as server } from ".\/lib\/server";/g,
    `import { api as fetch } from "./lib/fetch";`,
  );

  tree.write(filePath, replacedImport);
}

function updateClientExportToRtk(tree: Tree, projectRoot: string) {
  const filePath = projectRoot + "/src/index.ts";

  const fileContent = tree.read(filePath).toString("utf-8");

  if (
    !fileContent.includes(
      'import { api as rtk, subscription } from "./lib/rtk";',
    )
  ) {
    return;
  }

  const replacedExport = fileContent.replace(/client,/g, `rtk,`);

  tree.write(filePath, replacedExport);
}

function updateServerExportToFetch(tree: Tree, projectRoot: string) {
  const filePath = projectRoot + "/src/index.ts";

  const fileContent = tree.read(filePath).toString("utf-8");

  if (!fileContent.includes('import { api as fetch } from "./lib/fetch";')) {
    return;
  }

  const replacedExport = fileContent.replace(/server,/g, `fetch,`);

  tree.write(filePath, replacedExport);
}

export function getAllFiles({
  tree,
  root,
}: {
  tree: Tree;
  root: string;
}): { path: string; content: string }[] {
  const files = [];

  const projectFiles = tree.children(root);
  projectFiles.forEach((file) => {
    if (tree.isFile(`${root}/${file}`)) {
      files.push({
        path: `${root}/${file}`,
        content: tree.read(`${root}/${file}`).toString("utf-8"),
      });
    }

    files.push([...getAllFiles({ tree, root: `${root}/${file}` })]);
  });

  const flatted = files.flat(Infinity);
  return flatted;
}

function updateApiImport(
  tree: Tree,
  file: { path: string; content: string },
  project: any,
) {
  if (!file.content.includes(`import { api } from "${project.name}";`)) {
    return;
  }

  if (file.content.includes(`await api.server.`)) {
    const replaceApiServer = file.content.replace(
      /await api.server./g,
      `await api.fetch.`,
    );

    tree.write(file.path, replaceApiServer);
  }

  if (file.content.includes(`api.client.`)) {
    const replaceApiClient = file.content.replace(/api.client./g, `api.rtk.`);

    tree.write(file.path, replaceApiClient);
  }
}
