/* eslint-disable @typescript-eslint/no-var-requires */
require(`dotenv`).config();

module.exports = {
  testTimeout: 30000,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/src/__mock__/fileMock.js`,
    "\\.(css|less)$": `<rootDir>/src/__mock__/styleMock.js`,
  },
  testPathIgnorePatterns: [`<rootDir>/.next/`, `<rootDir>/node_modules/`],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": `<rootDir>/node_modules/babel-jest`,
  },
};
