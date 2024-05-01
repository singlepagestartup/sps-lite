import { ExportSchema } from "./Builder";

describe("Builder", () => {
  describe(`ExportSchema regex pattern`, () => {
    const first = "PageTable";
    const second = "PageVariantEnumTable";
    const third = "PagesToLayoutsTable";
    const fourth = "@sps/sps-website-builder-backend-schema-relations";
    const exportSchema = new ExportSchema(first, second, third, fourth);

    it(`should match the regex 1`, () => {
      const regex = exportSchema.regex;

      const string = `export {
        ${first},
        ${second},
        ${third}
    } from "${fourth}";
    export {
        PageTable,
        PageRelations,
      } from "@sps/sps-website-builder-models-page-backend-schema";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportSchema.regex;

      const string = `export { ${first}, ${second}, ${third} } from "${fourth}";
    export {
        PageTable,
        PageRelations,
      } from "@sps/sps-website-builder-models-page-backend-schema";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 3`, () => {
      const regex = exportSchema.regex;

      const string = `export { ${first}, ${second}, ${third} } from "${fourth}";
    export {
        PageTable,
        PageRelations,
      } from "@sps/sps-website-builder-models-page-backend-schema";`;

      expect(string).toMatch(regex);
    });
  });
});
