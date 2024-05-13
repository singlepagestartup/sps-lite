const getWorldParams = () => {
  const params = {};

  return params;
};

const config = {
  requireModule: ["ts-node/register"],
  require: ["tests/**/*.ts", "utils/**/!(*.spec).ts"],
  format: ["html:artifacts/reports/report.html", "summary", "progress-bar"],
  formatOptions: { snippetInterface: "async-await" },
  worldParameters: getWorldParams(),
};

if (process.env.BDD_ALLURE) {
  config.format.push("utils/allure-reporter.ts");
} else if (process.env.BDD_CUCUMBER_PRETTY) {
  config.format.push("@cucumber/pretty-formatter");
}

export default config;
