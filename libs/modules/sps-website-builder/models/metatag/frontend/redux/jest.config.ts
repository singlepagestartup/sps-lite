/* eslint-disable */
export default {
  displayName: "@sps/sps-website-builder-models-metatag-frontend-redux",
  preset: "../../../../../../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/react/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory:
    "../../../../../../../coverage/libs/modules/sps-website-builder/models/metatag/frontend/redux",
};
