import { util } from ".";

describe("get-model-by-name", () => {
  it("should take SPSWB from website-builder", () => {
    const name = "website-builder";

    const result = util({ name });

    expect(result.pascalCased).toBe("SPSWB");
  });

  it("should take sps_w_b from website-builder", () => {
    const name = "website-builder";

    const result = util({ name });

    expect(result.snakeCased).toBe("sps_w_b");
  });
});
