import { util } from ".";

describe("get-model-name-variants", () => {
  it("should create wide slide from wide-slide in .base", () => {
    const name = "wide-slide";

    const result = util({ name });
    expect(result.base).toBe("wide slide");
  });

  it("should create wide_slide from wide-slide in .snakeCased.base", () => {
    const name = "wide-slide";

    const result = util({ name });
    expect(result.snakeCased.base).toBe("wide_slide");
  });

  it("should create wide_slides from wide-slide in .snakeCased.pluralized", () => {
    const name = "wide-slide";

    const result = util({ name });
    expect(result.snakeCased.pluralized).toBe("wide_slides");
  });

  it("should create WideSlide from wide-slide in .pascalCased.base", () => {
    const name = "wide-slide";

    const result = util({ name });
    expect(result.pascalCased.base).toBe("WideSlide");
  });

  it("should create WideSlides from wide-slide in .pascalCased.pluralized", () => {
    const name = "wide-slide";

    const result = util({ name });
    expect(result.pascalCased.pluralized).toBe("WideSlides");
  });

  it("should create wide-slide from wide-slide in .kebabCased.base", () => {
    const name = "wide-slide";

    const result = util({ name });
    expect(result.kebabCased.base).toBe("wide-slide");
  });

  it("should create wide-slides from wide-slide in .kebabCased.pluralized", () => {
    const name = "wide-slide";

    const result = util({ name });
    expect(result.kebabCased.pluralized).toBe("wide-slides");
  });

  it("should create wideSlide from wide-slide in .propertyCased.base", () => {
    const name = "wide-slide";

    const result = util({ name });
    expect(result.propertyCased.base).toBe("wideSlide");
  });

  it("should create wideSlides from wide-slide in .propertyCased.pluralized", () => {
    const name = "wide-slide";

    const result = util({ name });
    expect(result.propertyCased.pluralized).toBe("wideSlides");
  });
});
