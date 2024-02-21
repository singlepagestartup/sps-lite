/* eslint-disable */
export default {
  displayName: "@sps/sps-file-storage-file-contracts-extended",
  preset: "../../../../../../../jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory:
    "../../../../../../../coverage/libs/modules/sps-file-storage/models/file/contracts/extended",
};