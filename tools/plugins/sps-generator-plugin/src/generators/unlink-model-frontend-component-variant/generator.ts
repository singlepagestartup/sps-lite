import { formatFiles, getProjects, Tree } from "@nx/devkit";
import { UnlinkModelFrontendComponentVariantGeneratorSchema } from "./schema";

export async function unlinkModelFrontendComponentVariantGenerator(
  tree: Tree,
  options: UnlinkModelFrontendComponentVariantGeneratorSchema,
) {
  const projects = getProjects(tree);
  const project = projects.get(options.project);

  if (!project.name.includes("variants")) {
    console.error("Only variants can be unlinked");
    return;
  }

  const projectRoot = project?.root.split("/");
  const type = projectRoot?.[projectRoot.length - 2];
  const variant = projectRoot?.[projectRoot.length - 1];

  const variantPathIndex = projectRoot?.findIndex((dir) => dir === "variants");
  const rootProjectPath = [...projectRoot?.slice(0, variantPathIndex), "root"];

  await removeStylesFromRoot({
    rootProjectPath,
    tree,
    project,
    variant,
    type,
  });

  await removeInterfaceFromRoot({
    rootProjectPath,
    tree,
    project,
    variant,
    type,
  });

  await removeVariantFromRootVariants({
    rootProjectPath,
    tree,
    project,
    variant,
    type,
  });

  await formatFiles(tree);
}

export default unlinkModelFrontendComponentVariantGenerator;

async function removeStylesFromRoot({
  rootProjectPath,
  tree,
  project,
  variant,
  type,
}: {
  rootProjectPath: string[];
  tree: Tree;
  project: any;
  variant: string;
  type: string;
}) {
  const rootProjectStylesPath =
    rootProjectPath.join("/") + `/src/lib/${type}/_index.scss`;
  let rootProjectStyles = await tree.read(rootProjectStylesPath).toString();
  const removeImportScssOutput = rootProjectStyles.replace(
    `@import "../../../../variants/${type}/${variant}/src/index";`,
    "",
  );

  tree.write(rootProjectStylesPath, removeImportScssOutput);
}

async function removeInterfaceFromRoot({
  rootProjectPath,
  tree,
  project,
  variant,
  type,
}: {
  rootProjectPath: string[];
  tree: Tree;
  project: any;
  variant: string;
  type: string;
}) {
  const rootProjectInterfacePath =
    rootProjectPath.join("/") + `/src/lib/${type}/interface.ts`;
  let rootProjectInterface = await tree
    .read(rootProjectInterfacePath)
    .toString();

  // console.log(`🚀 ~ rootProjectInterface:`, rootProjectInterface);

  const importInterfaceRegexPattern = new RegExp(
    `import { IComponentProps as [a-zA-z]+ } from "${project.name}";`,
  );
  const importInterface = rootProjectInterface.match(
    importInterfaceRegexPattern,
  );
  const removeImportInterfaceOutput = rootProjectInterface.replace(
    importInterface[0],
    ``,
  );
  tree.write(rootProjectInterfacePath, removeImportInterfaceOutput);

  rootProjectInterface = await tree.read(rootProjectInterfacePath).toString();

  const cutInterfaceName = new RegExp(`as [a-zA-z]+ }`);
  const interfaceNameString = importInterface[0].match(cutInterfaceName);
  const interfaceName = interfaceNameString[0]
    .replace("as ", "")
    .replace(" }", "");

  const preExportInterface = rootProjectInterface.match(`[|] ${interfaceName}`);
  const pastExportInterface = rootProjectInterface.match(
    `${interfaceName} [|]`,
  );

  if (preExportInterface) {
    const removePreExportInterfaceOutput = rootProjectInterface.replace(
      preExportInterface[0],
      ``,
    );
    tree.write(rootProjectInterfacePath, removePreExportInterfaceOutput);
  } else if (pastExportInterface) {
    const removePastExportInterfaceOutput = rootProjectInterface.replace(
      pastExportInterface[0],
      ``,
    );
    tree.write(rootProjectInterfacePath, removePastExportInterfaceOutput);
  }
}

async function removeVariantFromRootVariants({
  rootProjectPath,
  tree,
  project,
  variant,
  type,
}: {
  rootProjectPath: string[];
  tree: Tree;
  project: any;
  variant: string;
  type: string;
}) {
  const rootProjectVariantsPath =
    rootProjectPath.join("/") + `/src/lib/${type}/variants.ts`;
  let rootProjectVariants = await tree.read(rootProjectVariantsPath).toString();

  const importVariantRegexPattern = new RegExp(
    `import { Component as [a-zA-z]+ } from "${project.name}";`,
  );
  const importVariant = rootProjectVariants.match(importVariantRegexPattern);
  const removeImportVariantOutput = rootProjectVariants.replace(
    importVariant[0],
    ``,
  );
  tree.write(rootProjectVariantsPath, removeImportVariantOutput);

  rootProjectVariants = await tree.read(rootProjectVariantsPath).toString();
  const exportVariantRegexPattern = new RegExp(
    `(["])?${variant}(["])?: [a-zA-z]+([,])?`,
  );
  const exportVariant = rootProjectVariants.match(exportVariantRegexPattern);
  const removeExportVariantOutput = rootProjectVariants.replace(
    exportVariant[0],
    ``,
  );
  tree.write(rootProjectVariantsPath, removeExportVariantOutput);
}
