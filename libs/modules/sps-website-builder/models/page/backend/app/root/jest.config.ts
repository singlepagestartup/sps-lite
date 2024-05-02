/* eslint-disable */
export default {
  displayName: "@sps/sps-website-builder-models-page-backend-app",
  preset: "../../../../../../../../jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
};
