import { Field, Variant } from "./Coder";

describe("Coder", () => {
  describe(`Field regex pattern`, () => {
    const name = "class_name";
    const type = "text";
    const field = new Field({ name, type });

    it(`should match the regex 1`, () => {
      const regex = field.onRemove.regex;

      const string = `export const Table = pgTable(
        table,
        {
          className: pgCore.text("class_name"),
          id: pgCore.uuid("id").primaryKey().defaultRandom(),
          title: pgCore.text("title").notNull().default("Page"),`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = field.onCreate.regex;

      const string = `export const Table = pgTable(table, {
        id: pgCore.uuid("id").primaryKey().defaultRandom(),
        title: pgCore.text("title").notNull().default("Page"),`;

      expect(string).toMatch(regex);
    });
  });

  describe(`Variant regex pattern`, () => {
    const variant = "admin-table-form";
    const field = new Variant({ variant });

    it(`should match the regex 1`, () => {
      const regex = field.onRemove.regex;

      const string = `export const variants = ["admin-table-form", "admin", "form"];`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = field.onCreate.regex;

      const string = `export const variants = [
          "admin-table-form",
          "admin",
          "form",
        ];`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 3`, () => {
      const regex = field.onCreate.regex;

      const string = `export const variants = ["admin-table-form"];`;

      expect(string).toMatch(regex);
    });
  });
});
