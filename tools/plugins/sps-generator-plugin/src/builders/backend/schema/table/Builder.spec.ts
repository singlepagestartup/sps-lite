import { ExportTable, Field } from "./Builder";

describe("Builder", () => {
  describe(`ExportTable regex pattern`, () => {
    const first = "pages";
    const exportSchema = new ExportTable(first);

    it(`should match the regex 1`, () => {
      const regex = exportSchema.regex;

      const string = `export const Table = pgTable("${first}", {
        id: uuid("id").primaryKey().defaultRandom(),`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportSchema.regex;

      const string = `export const Table = pgTable(
        "${first}",
        {
        id: uuid("id").primaryKey().defaultRandom(),`;

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
        className: text("class_name"),
        id: uuid("id").primaryKey().defaultRandom(),
        title: text("title").notNull().default("Page"),`;

      expect(string).toMatch(regex);
    });
  });
});
