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
  transformIgnorePatterns: ["/node_modules/(?!(@bundled-es-modules)/).*/"],
  // testEnvironment: "jest-environment-jsdom",
  testEnvironment: "./jest.testEnvironment.mjs",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  coverageDirectory: "<rootDir>/tests/artifacts/coverage",
  moduleNameMapper: {
    "react-markdown": "<rootDir>/src/components/stubs/react-markdown/index.tsx",
  },
  globals: {
    fetch,
    Headers,
    Request,
    Response,
    FormData,
    Blob,
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
