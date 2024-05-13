// Add any custom config to be passed to Jest
const config = {
  testTimeout: 30000,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["<rootDir>/**/*.spec.ts"],
  coverageDirectory: "<rootDir>/artifacts/coverage",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = config;
