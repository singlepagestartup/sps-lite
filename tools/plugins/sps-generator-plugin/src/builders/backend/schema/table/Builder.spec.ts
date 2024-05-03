import { Field } from "./Builder";

describe("Builder", () => {
  describe(`Field regex pattern`, () => {
    const name = "class_name";
    const type = "text";
    const field = new Field({ name, type });

    it(`should match the regex 1`, () => {
      const regex = field.onRemove.regex;

      const string = `export const Table = pgTable(modelNameSnakeCasedPluralized, {
        className: pgCore.text("class_name"),
        id: pgCore.uuid("id").primaryKey().defaultRandom(),
        title: pgCore.text("title").notNull().default("Page"),`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = field.onCreate.regex;

      const string = `export const Table = pgTable(modelNameSnakeCasedPluralized, {
        id: pgCore.uuid("id").primaryKey().defaultRandom(),
        title: pgCore.text("title").notNull().default("Page"),`;

      expect(string).toMatch(regex);
    });
  });
});
