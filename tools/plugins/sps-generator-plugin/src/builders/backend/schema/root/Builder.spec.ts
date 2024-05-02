import { ExportSchema } from "./Builder";

describe("Builder", () => {
  describe(`ExportSchema regex pattern`, () => {
    const first = "Table as SlideTable";
    const second = "Relations as SlideRelations";
    const third = "VariantEnumTable as SlideVariantEnumTable";
    const fourth = "@sps/sps-website-builder-models-slide-backend-schema";
    const exportSchema = new ExportSchema(first, second, third, fourth);

    it(`should match the regex 1`, () => {
      const regex = exportSchema.regex;

      const string = `export {
        ${first},
        ${second},
        ${third}
    } from "${fourth}";
    export {
      Table as PageTable,
      Relations as PageRelations,
      VariantEnumTable as PageVariantEnumTable,
    } from "@sps/sps-website-builder-models-page-backend-schema";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportSchema.regex;

      const string = `export { ${first}, ${second}, ${third} } from "${fourth}";
      export {
        Table as PageTable,
        Relations as PageRelations,
        VariantEnumTable as PageVariantEnumTable,
      } from "@sps/sps-website-builder-models-page-backend-schema";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 3`, () => {
      const regex = exportSchema.regex;

      const string = `export { ${first}, ${second}, ${third} } from "${fourth}";
      export {
        Table as PageTable,
        Relations as PageRelations,
        VariantEnumTable as PageVariantEnumTable,
      } from "@sps/sps-website-builder-models-page-backend-schema";`;

      expect(string).toMatch(regex);
    });
  });
});
