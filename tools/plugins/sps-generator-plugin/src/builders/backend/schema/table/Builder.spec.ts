import { ExportTable, Field } from "./Builder";

describe("Builder", () => {
  describe(`ExportTable regex pattern`, () => {
    const exportSchema = new ExportTable();

    it(`should match the regex 1`, () => {
      const regex = exportSchema.regex;

      const string = `export const Table = pgTable(modelNameSnakeCasedPluralized, {
        id: pgCore.uuid("id").primaryKey().defaultRandom(),`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportSchema.regex;

      const string = `export const Table = pgTable(
        modelNameSnakeCasedPluralized,
        {
        id: pgCore.uuid("id").primaryKey().defaultRandom(),`;

      expect(string).toMatch(regex);
    });
  });

  describe(`Field regex pattern`, () => {
    const first = "class_name";
    const second = "text";
    const field = new Field(first, second);

    it(`should match the regex 1`, () => {
      const regex = field.regex;

      const string = `export const Table = pgTable("pages", {
        className: pgCore.text("class_name"),
        id: pgCore.uuid("id").primaryKey().defaultRandom(),
        title: pgCore.text("title").notNull().default("Page"),`;

      expect(string).toMatch(regex);
    });
  });
});
