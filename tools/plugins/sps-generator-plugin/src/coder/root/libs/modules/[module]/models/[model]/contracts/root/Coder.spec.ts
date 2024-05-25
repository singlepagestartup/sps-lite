import { ExportInterfaceField } from "./Coder";

describe("Coder", () => {
  describe(`ExportInterfaceField regex pattern`, () => {
    const name = "class_name";
    const type = "string";
    const isRequired = false;
    const field = new ExportInterfaceField({ name, type, isRequired });

    it(`onRemove | should match the regex 1`, () => {
      const regex = field.onRemove.regex;

      const string = `export interface IModel extends Omit<IParentModel, "variant"> {
        variant: (typeof variants)[number];
        className?: string;
      };`;

      expect(string).toMatch(regex);
    });

    it(`onRemove | should match the regex 2`, () => {
      const regex = field.onCreate.regex;

      const string = `export interface IModel {
        id: string;
        className: string;
        variant: (typeof variants)[number];
      }`;

      expect(string).toMatch(regex);
    });

    it(`onCreate | should match the regex 1`, () => {
      const regex = field.onCreate.regex;

      const string = `export interface IModel extends Omit<IParentModel, "variant"> {
        variant: (typeof variants)[number];
      };`;

      expect(string).toMatch(regex);
    });

    it(`onCreate | should match the regex 2`, () => {
      const regex = field.onCreate.regex;

      const string = `export interface IModel {
        id: string;
        variant: (typeof variants)[number];
      }`;

      expect(string).toMatch(regex);
    });
  });
});
