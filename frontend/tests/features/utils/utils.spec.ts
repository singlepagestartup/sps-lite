import { replaceValue } from "./utils";
import { ICustomWorld } from "./custom-world";

describe("replaceValue", () => {
  let world: ICustomWorld;

  beforeEach(() => {
    // Initialize the world object before each test
    world = {
      debug: false,
      attach: jest.fn(),
      log: jest.fn(),
      parameters: {},
    };
  });

  it("should replace the __world.user.email__ in the '/auth/reset-password/?code=examplecode123&email=__world.user.email__' by world.user.email value", () => {
    world.user = {
      email: "tester@example.com",
    } as any;

    const value = replaceValue({
      world,
      value:
        "/auth/reset-password/?code=examplecode123&email=__world.user.email__",
    });

    expect(value).toEqual(
      "/auth/reset-password/?code=examplecode123&email=tester@example.com",
    );
  });

  it("should replace __random__@example.com with tester<number>@example.com", () => {
    const value = replaceValue({
      world,
      value: "__random__@example.com",
    }); //?

    expect(value).not.toContain("__random__");
    expect(value).toMatch(/tester\d{5,6}@example\.com/);
  });

  it("should replace __random__ with tester in __random__", () => {
    const value = replaceValue({
      world,
      value: "__random__",
    }); //?

    expect(value).not.toContain("__random__");
    expect(value).toMatch(/tester\d{5,6}/);
  });
});
