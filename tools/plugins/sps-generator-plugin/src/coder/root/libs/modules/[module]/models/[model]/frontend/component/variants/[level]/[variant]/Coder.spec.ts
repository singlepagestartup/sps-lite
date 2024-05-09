import { ImportVariant, ExportVariant } from "./Coder";

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

  describe(`ExportVariant`, () => {
    const kebabCasedVariant = "admin-table";
    const pascalCasedVariant = "AdminTable";
    const importPath = new ExportVariant({
      pascalCasedVariant,
      kebabCasedVariant,
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

    it(`should match the regex 2`, () => {
      const kebabCasedVariant = "admin";
      const pascalCasedVariant = "Admin";
      const importPath = new ExportVariant({
        pascalCasedVariant,
        kebabCasedVariant,
      });

      const regex = importPath.onRemove.regex;

      const string = `import { Component as Simple } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-simple";
      import { Component as Admin } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin";

      export const variants = {
        simple: Simple,
        admin: Admin
      };`;

      expect(string).toMatch(regex);
    });
  });
});
