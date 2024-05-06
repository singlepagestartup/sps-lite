import { util } from ".";

describe("get-model-by-name", () => {
  it("should take SPSWB from sps-website-builder", () => {
    const name = "sps-website-builder";

    const result = util({ name });

    expect(result.pascalCased).toBe("SPSWB");
  });

  it("should take sps_w_b from sps-website-builder", () => {
    const name = "sps-website-builder";

    const result = util({ name });

    expect(result.snakeCased).toBe("sps_w_b");
  });
});
