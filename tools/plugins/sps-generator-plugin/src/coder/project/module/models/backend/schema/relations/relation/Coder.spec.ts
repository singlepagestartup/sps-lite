import { ImportConfig, ExportNamedConfig } from "./Coder";

describe("Coder", () => {
  describe(`ImportConfig`, () => {
    const leftProjectRelationNamePropertyCased = "pages";
    const libName =
      "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";

    const exportRoute = new ImportConfig({
      leftProjectRelationNamePropertyCased,
      libName,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { config as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
      import { config as pages }
      from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { config as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
      import { config as pages } from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ExportNamedConfig`, () => {
    const leftProjectRelationNamePropertyCased = "pages";

    const exportRoute = new ExportNamedConfig({
      leftProjectRelationNamePropertyCased,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export const config = {
        [layouts.name]: layouts,
        [pages.name]: pages,
      };`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export const config = {[layouts.name]: layouts, [pages.name]: pages };`;

      expect(string).toMatch(regex);
    });
  });
});
