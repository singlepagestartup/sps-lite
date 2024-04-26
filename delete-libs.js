// script for removing libs dependencies from package.json

const fs = require("fs");
const path = require("path");

function deleteLibs() {
  const toDeleteLibs = [
    "sps-billing-plugin",
    "@sps/shared-frontend-utils-server",
    "@sps/shared-utils",
  ];
  const packageJsonPath = path.resolve(__dirname, "package.json");

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  Object.keys(packageJson.dependencies).forEach((key) => {
    if (toDeleteLibs.includes(key)) {
      delete packageJson.dependencies[key];
    }
  });

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n",
  );
}

deleteLibs();
