import {
  ImportVariant,
  ExportVariant,
  ImportInterface,
  ExportInterface,
  ImportStyles,
} from "./Coder";

describe("Coder", () => {
  describe(`ImportVariant`, () => {
    const libName =
      "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";
    const pascalCasedVariant = "AdminTable";
    const importPath = new ImportVariant({
      libName,
      pascalCasedVariant,
    });

    it(`should match the regex 1`, () => {
      const regex = importPath.onRemove.regex;

      const string = `import { Component as Simple } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-simple";
      import { Component as AdminTable } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";

      export const variants = {
        simple: Simple,
        "admin-table": AdminTable
      };`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ExportVariant`, () => {
    const kebabCasedVariant = "admin-table";
    const pascalCasedVariant = "AdminTable";
    const importPath = new ExportVariant({
      pascalCasedVariant,
      kebabCasedVariant,
    });

    it(`should match the regex 1`, () => {
      const regex = importPath.onRemove.regex;

      const string = `import { Component as Simple } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-simple";
      import { Component as AdminTable } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";

      export const variants = {
        simple: Simple,
        "admin-table": AdminTable
      };`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const kebabCasedVariant = "admin";
      const pascalCasedVariant = "Admin";
      const importPath = new ExportVariant({
        pascalCasedVariant,
        kebabCasedVariant,
      });

      const regex = importPath.onRemove.regex;

      const string = `import { Component as Simple } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-simple";
      import { Component as Admin } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin";

      export const variants = {
        simple: Simple,
        admin: Admin
      };`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ImportInterface`, () => {
    const libName =
      "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";
    const pascalCasedVariant = "AdminTable";
    const importPath = new ImportInterface({
      libName,
      pascalCasedVariant,
    });

    it(`should match the regex 1`, () => {
      const regex = importPath.onRemove.regex;

      const string = `import { IComponentProps as ISimpleComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-simple";
      import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";

      export type IComponentProps =
        | IAdminTableComponentProps
        | IAdminSelectInputComponentProps
        | IAdminFormComponentProps;`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = importPath.onRemove.regex;

      const string = `import { IComponentProps as ISimpleComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-simple";
      import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";

      export type IComponentProps = IAdminTableComponentProps | IAdminSelectInputComponentProps | IAdminFormComponentProps;`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ExportInterface`, () => {
    const pascalCasedVariant = "AdminTable";
    const exportInterface = new ExportInterface({
      pascalCasedVariant,
    });

    it(`should match the regex 1`, () => {
      const regex = exportInterface.onRemove.regex;

      const string = `
      export type IComponentProps =
        | IAdminTableComponentProps
        | IAdminSelectInputComponentProps
        | IAdminFormComponentProps;`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportInterface.onRemove.regex;

      const string = `
      export type IComponentProps = IAdminTableComponentProps | IAdminSelectInputComponentProps | IAdminFormComponentProps;`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ImportStyles`, () => {
    const level = "sps-lite";
    const kebabCasedVariant = "admin-table";
    const importPath = new ImportStyles({
      level,
      kebabCasedVariant,
    });

    it(`should match the regex 1`, () => {
      const regex = importPath.onRemove.regex;

      const string = `@import "../../../../variants/sps-lite/simple/src/index";

      @import "../../../../variants/sps-lite/admin-table/src/index";`;

      expect(string).toMatch(regex);
    });
  });
});
