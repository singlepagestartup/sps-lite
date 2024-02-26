/* eslint-disable */
export default {
  displayName: "@sps/sps-crm-models-form-contracts",
  preset: "../../../../../../../jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory:
    "../../../../../../../coverage/libs/modules/sps-crm/models/form/contracts/root",
};
