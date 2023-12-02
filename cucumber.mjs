const getWorldParams = () => {
  const params = {};

  return params;
};

const config = {
  requireModule: ["ts-node/register"],
  require: ["./bdd/**/!(*.spec).ts"],
  format: ["html:bdd/artifacts/reports/report.html", "summary", "progress-bar"],
  formatOptions: { snippetInterface: "async-await" },
  worldParameters: getWorldParams(),
};

if (process.env.BDD_ALLURE) {
  config.format.push("./bdd/utils/allure-reporter.ts");
} else if (process.env.BDD_CUCUMBER_PRETTY) {
  config.format.push("@cucumber/pretty-formatter");
}

export default config;
