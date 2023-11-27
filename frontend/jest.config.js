/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");
require("dotenv").config({
  path: (() => {
    return ".env.development";
  })(),
});

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  testTimeout: 30000,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/tests/e2e/",
  ],
  moduleNameMapper: {
    "react-markdown": "react-markdown/react-markdown.min.js",
  },
  testEnvironment: "jest-environment-jsdom",
  coverageDirectory: "<rootDir>/tests/artifacts/coverage",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
