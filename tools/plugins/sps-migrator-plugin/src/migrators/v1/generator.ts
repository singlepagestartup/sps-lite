import { formatFiles, getProjects, Tree } from "@nx/devkit";
import { V1GeneratorSchema } from "./schema";

export async function v1Generator(tree: Tree, options: V1GeneratorSchema) {
  const projects = getProjects(tree);

  const apiProjects = [];
  projects.forEach((project) => {
    if (project.root.includes("/frontend/api")) {
      if (!project.name.includes("invoice")) {
        return;
      }

      apiProjects.push(project);
    }
  });

  // tree.rename()
  for (const project of apiProjects) {
    renameClientToRtk(tree, project.root);
    renameServerToFetch(tree, project.root);

    updateClientImportToRtk(tree, project.root);
    updateServerImportToFetch(tree, project.root);

    updateClientExportToRtk(tree, project.root);
    updateServerExportToFetch(tree, project.root);
  }

  await formatFiles(tree);

  // console.log(`🚀 ~ v1Generator ~ projects:`, projects);
}

export default v1Generator;

function renameClientToRtk(tree: Tree, projectRoot: string) {
  const clientFolder = projectRoot + "/src/lib/client";

  if (!tree.exists(clientFolder)) {
    return;
  }

  const rtkFolder = projectRoot + "/src/lib/rtk";

  tree.rename(clientFolder, rtkFolder);

  tree.write(rtkFolder + "/index.ts", `export * from "./api";`);
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
