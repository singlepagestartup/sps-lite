import { ExportNamedVariables } from "./Coder";

describe("Coder", () => {
  describe(`ExportNamedVariables`, () => {
    const moduleNamePascalCased = "SPSWB";
    const relationNamePascalCased = "SlidesToPages";
    const libName =
      "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";

    const exportRoute = new ExportNamedVariables({
      moduleNamePascalCased,
      relationNamePascalCased,
      libName,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export {
        Table as SPSWBPagesToLayouts,
        Relations as SPSWBPagesToLayoutsRelations,
      } from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
      export {
        Table as SPSWBSlidesToPages,
        Relations as SPSWBSlidesToPagesRelations,
      } from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export { Table as SPSWBPagesToLayouts, Relations as SPSWBPagesToLayoutsRelations } from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
      export { Table as SPSWBSlidesToPages, Relations as SPSWBSlidesToPagesRelations } from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });
  });
});
