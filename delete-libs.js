// script for removing optionalDependencies from package.json and package-lock.json

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

  Object.keys(packageJson.optionalDependencies).forEach((key) => {
    if (toDeleteLibs.includes(key)) {
      delete packageJson.optionalDependencies[key];
    }
  });

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n",
  );
}

deleteLibs();
