const getWorldParams = () => {
  const params = {
    foo: "bar",
  };

  return params;
};

const config = {
  requireModule: ["ts-node/register"],
  require: ["tests/bdd/**/!(*.spec).ts"],
  format: [
    "html:tests/artifacts/reports/report.html",
    "summary",
    "progress-bar",
  ],
  formatOptions: { snippetInterface: "async-await" },
  worldParameters: getWorldParams(),
};

if (process.env.BDD_ALLURE) {
  config.format.push("./tests/bdd/bdd-utils/allure-reporter.ts");
} else if (process.env.BDD_CUCUMBER_PRETTY) {
  config.format.push("@cucumber/pretty-formatter");
}

export default config;
