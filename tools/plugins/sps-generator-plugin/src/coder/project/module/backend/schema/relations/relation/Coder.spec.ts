import { ExportAll } from "./Coder";

describe("Coder", () => {
  describe(`ExportAll`, () => {
    const libName =
      "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";

    const exportRoute = new ExportAll({ libName });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export * from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
      export * from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export * from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });
  });
});
