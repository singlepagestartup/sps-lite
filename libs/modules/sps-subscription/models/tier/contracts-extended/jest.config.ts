/* eslint-disable */
export default {
  displayName: "@sps/sps-subscription-tier-contracts-extended",
  preset: "../../../../../../jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory:
    "../../../../../../coverage/libs/modules/sps-subscription/models/tier/contracts-extended",
};
