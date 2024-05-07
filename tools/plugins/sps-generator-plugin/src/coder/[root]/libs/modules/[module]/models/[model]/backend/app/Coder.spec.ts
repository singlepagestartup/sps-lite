import { ExportRoute, ImportAppAsAsPropertyModelName } from "./Coder";

describe("Coder", () => {
  describe(`ExportRoute`, () => {
    const route = "/wide-slide-route";
    const asPropertyModelName = "wideSlideRoute";

    const exportRoute = new ExportRoute({ route, asPropertyModelName });

    it(`should match the regex 1`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { app as layouts } from "@sps/sps-website-builder-models-layout-backend-app";

      export const routes = {
        "/pages": pages,
        "/wide-slide-route": wideSlideRoute,
        "/layouts": layouts,
      };`;

      expect(string).toMatch(regex);
    });

    it(`should match the regex 2`, () => {
      const regex = exportRoute.onRemove.regex;

      const string = `import { app as layouts } from "@sps/sps-website-builder-models-layout-backend-app";

      export const routes = {
        "/pages": pages,
        "/wide-slide-route":
          wideSlideRoute,
        "/layouts": layouts,
      };`;

      expect(string).toMatch(regex);
    });
  });

  describe(`ImportPath`, () => {
    const libName = "@sps/sps-website-builder-models-slide-backend-app";
    const asPropertyModelName = "wideSlideRoute";
    const importPath = new ImportAppAsAsPropertyModelName({
      libName,
      asPropertyModelName,
    });

    it(`should match the regex 1`, () => {
      const regex = importPath.onRemove.regex;

      const string = `import { app as wideSlideRoute } from "@sps/sps-website-builder-models-slide-backend-app";
      import { app as layouts } from "@sps/sps-website-builder-models-layout-backend-app";`;

      expect(string).toMatch(regex);
    });
  });
});
