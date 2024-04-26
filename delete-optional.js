// script for removing optionalDependencies from package.json and package-lock.json

const fs = require("fs");
const path = require("path");

function deleteOptional() {
  const packageJsonPath = path.resolve(__dirname, "package.json");
  const packageLockJsonPath = path.resolve(__dirname, "package-lock.json");

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const packageLockJson = JSON.parse(
    fs.readFileSync(packageLockJsonPath, "utf8"),
  );

  if (packageJson.optionalDependencies) {
    delete packageJson.optionalDependencies;
  }
  if (packageLockJson.packages?.[""]?.optionalDependencies) {
    delete packageLockJson.packages[""].optionalDependencies;
  }

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n",
  );
  fs.writeFileSync(
    packageLockJsonPath,
    JSON.stringify(packageLockJson, null, 2) + "\n",
  );
}

deleteOptional();
