import type { Config } from "jest";

require("dotenv").config();

module.exports = {
  testEnvironment: "node",
  testTimeout: 30000,
  preset: "ts-jest",
  roots: ["<rootDir>"],
  moduleFileExtensions: ["js", "ts"],
  moduleNameMapper: {},
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.cache",
    "<rootDir>/build",
    "<rootDir>/dist",
  ],
  setupFiles: ["<rootDir>/jest.setupFiles.ts"],
  coverageDirectory: "<rootDir>/tests/artifacts/coverage",
} as Config;
