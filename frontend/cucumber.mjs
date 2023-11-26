const getWorldParams = () => {
  const params = {
    foo: "bar",
  };

  return params;
};

const config = {
  requireModule: ["ts-node/register"],
  require: ["tests/features/**/!(*.spec).ts"],
  format: [
    "html:tests/features/artifacts/reports/report.html",
    "summary",
    "progress-bar",
  ],
  formatOptions: { snippetInterface: "async-await" },
  worldParameters: getWorldParams(),
};

if (process.env.BDD_ALLURE) {
  config.format.push("./tests/features/utils/allure-reporter.ts");
} else if (process.env.BDD_CUCUMBER_PRETTY) {
  config.format.push("@cucumber/pretty-formatter");
}

export default config;
