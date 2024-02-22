import { createTreeWithEmptyWorkspace } from "@nx/devkit/testing";
import { Tree, readProjectConfiguration } from "@nx/devkit";

import { modelFrontendComponentVariantGenerator } from "./generator";
import { ModelFrontendComponentVariantGeneratorSchema } from "./schema";

describe("model-frontend-component-variant generator", () => {
  let tree: Tree;
  const options: ModelFrontendComponentVariantGeneratorSchema = {
    name: "test",
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it("should run successfully", async () => {
    await modelFrontendComponentVariantGenerator(tree, options);
    const config = readProjectConfiguration(tree, "test");
    expect(config).toBeDefined();
  });
});
