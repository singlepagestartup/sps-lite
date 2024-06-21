import { ImportContracts, ExportNamedInterface } from "./Coder";

describe("Coder", () => {
  describe(`ImportContracts`, () => {
    const relationNamePascalCased = "WidgetsToModules";
    const importPath =
      "@sps/sps-website-builder-relations-widgets-to-modules-contracts";

    const exportRoute = new ImportContracts({
      relationNamePascalCased,
      importPath,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { IRelation as INavbarToWidget } from "@sps/sps-website-builder-relations-navbars-to-widgets-contracts";
      import { IRelation as IPageToWidget } from "@sps/sps-website-builder-relations-pages-to-widgets-contracts";
      import { IRelation as IWidgetsToModules } from "@sps/sps-website-builder-relations-widgets-to-modules-contracts";
      
      export interface IModel extends IParentModel {
        widgetsToModules: IWidgetsToModules[];`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { IRelation as INavbarToWidget } from "@sps/sps-website-builder-relations-navbars-to-widgets-contracts";
      import { IRelation as IPageToWidget } from "@sps/sps-website-builder-relations-pages-to-widgets-contracts";
      import {
          IRelation as IWidgetsToModules
      } from "@sps/sps-website-builder-relations-widgets-to-modules-contracts";
      
      export interface IModel extends IParentModel {
        widgetsToModules: IWidgetsToModules[];`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ExportNamedInterface`, () => {
    const relationNamePascalCased = "WidgetsToModules";
    const relationNamePropertyCased = "widgetsToModules";

    const exportRoute = new ExportNamedInterface({
      relationNamePascalCased,
      relationNamePropertyCased,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export interface IModel extends IParentModel {
        widgetsToHeroSectionBlocks: IWidgetToHeroSectionBlock[];
        widgetsToNavbarBlocks: IWidgetToNavbarBlock[];
        footersToWidgets: IFooterToWidget[];
        navbarsToWidgets: INavbarToWidget[];
        pagesToWidgets: IPageToWidget[];
        widgetsToFooterBlocks: IWidgetToFooterBlock[];
        widgetsToSliderBlocks: IWidgetToSliderBlock[];
        widgetsToFeaturesSectionBlocks: IWidgetToFeaturesSectionBlock[];
        widgetsToModules: IWidgetsToModules[];
      }`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export interface IModel extends IParentModel {
        widgetsToHeroSectionBlocks: IWidgetToHeroSectionBlock[];
        widgetsToNavbarBlocks: IWidgetToNavbarBlock[];
        footersToWidgets: IFooterToWidget[];
        navbarsToWidgets: INavbarToWidget[];
        pagesToWidgets: IPageToWidget[];
        widgetsToFooterBlocks: IWidgetToFooterBlock[];
        widgetsToSliderBlocks: IWidgetToSliderBlock[];
        widgetsToFeaturesSectionBlocks: IWidgetToFeaturesSectionBlock[];
        widgetsToModules:
          IWidgetsToModules[];
      }`;

      expect(string).toMatch(regex);
    });
  });
});
