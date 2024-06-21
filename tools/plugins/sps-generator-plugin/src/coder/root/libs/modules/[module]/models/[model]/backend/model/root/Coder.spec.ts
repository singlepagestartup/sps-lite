import { ExportModel, ImportModelAsAsPropertyModelName } from "./Coder";

describe("Coder", () => {
  describe(`ExportModel`, () => {
    const asPropertyModelName = "wideSlideRoute";

    const exportModel = new ExportModel({ asPropertyModelName });

    it(`should match the regex 1`, () => {
      const regex = exportModel.onRemove.regex;

      const string = `
      export const models = {layout,page,wideSlideRoute};`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportModel.onRemove.regex;

      const string = `
      export const models = {
        layout,
        wideSlideRoute,
        page,
      };`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ImportModelAsAsPropertyModelName`, () => {
    const importPath = "@sps/sps-website-builder-models-slide-backend-model";
    const asPropertyModelName = "wideSlideRoute";
    const importModel = new ImportModelAsAsPropertyModelName({
      importPath,
      asPropertyModelName,
    });

    it(`should match the regex 1`, () => {
      const regex = importModel.onRemove.regex;

      const string = `import { model as layout } from "@sps/sps-website-builder-models-layout-backend-model";
      import { model as wideSlideRoute } from "@sps/sps-website-builder-models-slide-backend-model";
      import { model as page } from "@sps/sps-website-builder-models-page-backend-model";`;

      expect(string).toMatch(regex);
    });
  });
});
