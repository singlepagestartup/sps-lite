import { replaceValue } from "./utils";

describe("replaceValue", () => {
  let world: any;

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

  it("should replace the __world.project.id__ in the '/users/__world.project.id__/apply/' by world.users.id value", () => {
    world.user = {
      id: 3,
    } as any;

    const value = replaceValue({
      world,
      value: "/users/__world.user.id__/apply/",
    }); //?

    expect(value).toEqual("/users/3/apply/");
  });

  it("should replace the __world.users[0].id__ in the '/users/__world.users[0].id__/apply/' by world.users[0].id value", () => {
    world.users = [
      {
        id: 1,
      },
    ];

    const value = replaceValue({
      world,
      value: "/users/__world.users[0].id__/apply/",
    }); //?

    expect(value).toEqual("/users/1/apply/");
  });

  it("should replace __random__@example.com with tester<number>@example.com", () => {
    const value = replaceValue({
      world,
      value: "__random__@example.com",
    }); //?

    expect(value).not.toContain("__random__");
    expect(value).toMatch(/\d{4,6}@example\.com/);
  });

  it("should replace __random__ with tester in __random__", () => {
    const value = replaceValue({
      world,
      value: "__random__",
    }); //?

    expect(value).not.toContain("__random__");
    expect(value).toMatch(/\d{4,6}/);
  });

  it("should replace __world.tasks[0].id__ with path", () => {
    world.tasks = [
      {
        id: "1",
      },
    ];

    const value = replaceValue({
      world,
      value: "__world.tasks[0].id__",
    }); //?

    expect(value).toEqual("1");
  });

  it("should replace __faker.lore.lines__ with faker function", () => {
    const value = replaceValue({
      world,
      value: "__faker.lorem.lines__",
    }); //?

    expect(typeof value).toEqual("string");
    expect(value).not.toEqual("__faker.lorem.lines__");
  });

  it("should replace __strapi.attribute.currency__ with type of strapi_combobox to special CSS path", () => {
    const value = replaceValue({
      world,
      value: "__strapi.attribute.currency__",
      type: "strapi_combobox",
    }); //?

    expect(value).toEqual('div:has( > :text-is("currency"))');
  });

  it("should replace __strapi.attribute.currency__ with type of strapi_file to special CSS path", () => {
    const value = replaceValue({
      world,
      value: "__strapi.attribute.media__",
      type: "strapi_file",
    }); //?

    expect(value).toEqual(
      'div:has( > :text-is("media")) div :has( > :text-matches("Click"))',
    );
  });

  it("should replace __strapi.attribute.full_description__ with type of strapi_richtext to special CSS path", () => {
    const value = replaceValue({
      world,
      value: "__strapi.attribute.full_description__",
      type: "strapi_richtext",
    }); //?

    expect(value).toEqual('div:has( > :text-is("full_description")) + div');
  });

  it("should replace __env.LOGIN__ with params from process.env", () => {
    process.env.LOGIN = "tester";

    const value = replaceValue({
      world,
      value: "__env.LOGIN__",
    }); //?

    expect(value).toEqual("tester");
  });

  it("should replace __env.BACKEND_URL__/admin with params from process.env", () => {
    process.env.BACKEND_URL = "http://localhost:1337";

    const value = replaceValue({
      world,
      value: "__env.BACKEND_URL__/admin",
    }); //?

    expect(value).toEqual("http://localhost:1337/admin");
  });
});
