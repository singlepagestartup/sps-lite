import { FsTree } from "nx/src/generators/tree";
import { Coder } from "./Coder";
import path from "path";

describe("Coder", () => {
  it("should create an instance", () => {
    const tree = new FsTree(path.join(__dirname, "mock"), true, "1");
    const moduleName = "sps-website-builder";
    const leftModelName = "page";
    const rightModelName = "slider";

    const coder = new Coder({
      tree,
      moduleName,
      models: [
        {
          name: leftModelName,
        },
        {
          name: rightModelName,
        },
      ],
    });

    expect(coder.project.root.name).toBe("root");
    expect(coder.project.root.project.libs.name).toBe("libs");
    expect(coder.project.root.project.libs.project.modules.name).toBe(
      "modules",
    );
    expect(
      coder.project.root.project.libs.project.modules.project.module.name,
    ).toBe(moduleName);
    expect(
      coder.project.root.project.libs.project.modules.project.module.project
        .models[0].project.model.name,
    ).toBe(leftModelName);
    expect(
      coder.project.root.project.libs.project.modules.project.module.project
        .models[1].project.model.name,
    ).toBe(rightModelName);
  });
});
