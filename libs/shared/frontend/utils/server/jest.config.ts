/* eslint-disable */
export default {
  displayName: "@sps/shared-frontend-utils-server",
  preset: "../../../../../jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory:
    "../../../../../coverage/libs/shared/frontend/utils/server",
};
