/* eslint-disable */
export default {
  displayName: "@sps/sps-migrator-plugin",
  preset: "../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../../coverage/tools/plugins/sps-migrator-plugin",
};
