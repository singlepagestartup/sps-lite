const nxPreset = require("@nx/jest/preset").default;

module.exports = {
  ...nxPreset,
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  setupFiles: [`${__dirname}/jest.setup.ts`],
};
