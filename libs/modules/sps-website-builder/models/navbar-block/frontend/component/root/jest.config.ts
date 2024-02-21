/* eslint-disable */
export default {
  displayName: "@sps/sps-website-builder-navbar-block-frontend-component",
  preset: "../../../../../../../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/react/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory:
    "../../../../../../../../coverage/libs/modules/sps-website-builder/models/navbar-block/frontend/component/root",
};