import { formatFiles, getProjects, Tree } from "@nx/devkit";
import { UnlinkModelFrontendComponentVariantGeneratorSchema } from "./schema";
import * as fs from "fs/promises";

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
  });

  await removeVariantFromRootVariants({
    rootProjectPath,
    tree,
    project,
    variant,
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
    rootProjectPath.join("/") + "/src/lib/startup/_index.scss";
  let rootProjectStyles = await tree.read(rootProjectStylesPath).toString();

  await fs.writeFile(
    rootProjectStylesPath,
    rootProjectStyles.replace(
      `@import "../../../../variants/${type}/${variant}/src/index";`,
      "",
    ),
  );
}

async function removeInterfaceFromRoot({
  rootProjectPath,
  tree,
  project,
  variant,
}: {
  rootProjectPath: string[];
  tree: Tree;
  project: any;
  variant: string;
}) {
  const rootProjectInterfacePath =
    rootProjectPath.join("/") + "/src/lib/startup/interface.ts";
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

  await fs.writeFile(
    rootProjectInterfacePath,
    rootProjectInterface.replace(importInterface[0], ``),
  );

  rootProjectInterface = await tree.read(rootProjectInterfacePath).toString();

  const cutInterfaceName = new RegExp(`as [a-zA-z]+ }`);
  const interfaceNameString = importInterface[0].match(cutInterfaceName);
  const interfaceName = interfaceNameString[0]
    .replace("as ", "")
    .replace(" }", "");

  // const exportInterfaceRegexPattern = `/(([|][\s]?${interfaceName})|(${interfaceName}[\s][|]))/gm`;

  const preExportInterface = rootProjectInterface.match(`[|] ${interfaceName}`);
  const pastExportInterface = rootProjectInterface.match(
    `${interfaceName} [|]`,
  );

  if (preExportInterface) {
    await fs.writeFile(
      rootProjectInterfacePath,
      rootProjectInterface.replace(preExportInterface[0], ``),
    );
  } else if (pastExportInterface) {
    await fs.writeFile(
      rootProjectInterfacePath,
      rootProjectInterface.replace(pastExportInterface[0], ``),
    );
  }
}

async function removeVariantFromRootVariants({
  rootProjectPath,
  tree,
  project,
  variant,
}: {
  rootProjectPath: string[];
  tree: Tree;
  project: any;
  variant: string;
}) {
  const rootProjectVariantsPath =
    rootProjectPath.join("/") + "/src/lib/startup/variants.ts";
  let rootProjectVariants = await tree.read(rootProjectVariantsPath).toString();

  const importVariantRegexPattern = new RegExp(
    `import { Component as [a-zA-z]+ } from "${project.name}";`,
  );
  const importVariant = rootProjectVariants.match(importVariantRegexPattern);
  await fs.writeFile(
    rootProjectVariantsPath,
    rootProjectVariants.replace(importVariant[0], ``),
  );
  rootProjectVariants = await tree.read(rootProjectVariantsPath).toString();
  const exportVariantRegexPattern = new RegExp(
    `(["])?${variant}(["])?: [a-zA-z]+([,])?`,
  );
  const exportVariant = rootProjectVariants.match(exportVariantRegexPattern);
  await fs.writeFile(
    rootProjectVariantsPath,
    rootProjectVariants.replace(exportVariant[0], ``),
  );
}
