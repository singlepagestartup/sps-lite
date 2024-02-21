/* eslint-disable */
export default {
  displayName:
    "@sps/sps-crm-form-request-frontend-component-sps-lite-variants-simple",
  preset: "../../../../../../../../../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/react/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory:
    "../../../../../../../../../../coverage/libs/modules/sps-crm/models/form-request/frontend/component/variants/sps-lite/simple",
};
