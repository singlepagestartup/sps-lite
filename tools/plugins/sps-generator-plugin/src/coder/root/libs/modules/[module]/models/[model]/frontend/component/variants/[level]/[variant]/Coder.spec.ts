import { ImportVariant } from "./Coder";

describe("Coder", () => {
  describe(`ImportVariant`, () => {
    const libName =
      "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";
    const pascalCasedVariant = "AdminTable";
    const importPath = new ImportVariant({
      libName,
      pascalCasedVariant,
    });

    it(`should match the regex 1`, () => {
      const regex = importPath.onRemove.regex;

      const string = `import { Component as Simple } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-simple";
      import { Component as AdminTable } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";

      export const variants = {
        simple: Simple,
        "admin-table": AdminTable
      };`;

      expect(string).toMatch(regex);
    });
  });
});
