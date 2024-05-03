import { ExportTableAndVaritantEnumTable } from "./Builder";

describe("Builder", () => {
  describe(`ExportTableAndVaritantEnumTable`, () => {
    const modelNamePascalCased = "Slide";
    const libName = "@sps/sps-website-builder-models-slide-backend-schema";
    const exportSchema = new ExportTableAndVaritantEnumTable({
      modelNamePascalCased,
      libName,
    });

    it(`should match the regex 1`, () => {
      const regex = exportSchema.onRemove.regex;

      const string = `export {
        Table as SlideTable,
        Relations as SlideRelations,
        VariantEnumTable as SlideVariantEnumTable,
      } from "@sps/sps-website-builder-models-slide-backend-schema";
      export {
        Relations,
        populate,
        transformData,
        config,
      } from "@sps/sps-website-builder-models-page-backend-schema-relations";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportSchema.onRemove.regex;

      const string = `export { Table as SlideTable, Relations as SlideRelations, VariantEnumTable as SlideVariantEnumTable } from "@sps/sps-website-builder-models-slide-backend-schema";
      export { Relations, populate, transformData, config } from "@sps/sps-website-builder-models-page-backend-schema-relations";`;

      expect(string).toMatch(regex);
    });
  });
});
