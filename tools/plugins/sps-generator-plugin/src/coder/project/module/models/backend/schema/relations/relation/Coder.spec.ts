import {
  ImportConfig,
  ExportNamedConfig,
  ImportPopulate,
  ExportPopulate,
  ImportRelation,
  ExportRelation,
} from "./Coder";

describe("Coder", () => {
  describe(`ImportConfig`, () => {
    const leftProjectRelationNamePropertyCased = "pages";
    const libName =
      "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";

    const exportRoute = new ImportConfig({
      leftProjectRelationNamePropertyCased,
      libName,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { config as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
      import { config as pages }
      from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { config as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
      import { config as pages } from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ExportNamedConfig`, () => {
    const leftProjectRelationNamePropertyCased = "pages";

    const exportRoute = new ExportNamedConfig({
      leftProjectRelationNamePropertyCased,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export const config = {
        [layouts.name]: layouts,
        [pages.name]: pages,
      };`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export const config = {[layouts.name]: layouts, [pages.name]: pages };`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ImportPopulate`, () => {
    const leftProjectRelationNamePropertyCased = "pages";
    const libName =
      "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";

    const exportRoute = new ImportPopulate({
      leftProjectRelationNamePropertyCased,
      libName,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { populate as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
      import { populate as pages }
      from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { populate as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
      import { populate as pages } from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ExportPopulate`, () => {
    const leftProjectRelationNamePropertyCased = "pages";

    const exportRoute = new ExportPopulate({
      leftProjectRelationNamePropertyCased,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export const populate = {
        ...layouts,
        ...pages,
      };`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export const populate = { ...layouts, ...pages };`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ImportRelation`, () => {
    const leftProjectRelationNamePropertyCased = "pages";
    const libName =
      "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";

    const exportRoute = new ImportRelation({
      leftProjectRelationNamePropertyCased,
      libName,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { relation as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
      import { relation as pages }
      from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { relation as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
      import { relation as pages } from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ExportRelation`, () => {
    const leftProjectRelationNamePropertyCased = "pages";

    const exportRoute = new ExportRelation({
      leftProjectRelationNamePropertyCased,
    });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export const Relations = relations(Table, (helpers) => {
        return {
          ...layouts(helpers),
          ...pages(helpers),
        };
      });`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `export const Relations = relations(Table, (helpers) => { return { ...layouts(helpers), ...pages(helpers) }; });`;

      expect(string).toMatch(regex);
    });
  });
});
