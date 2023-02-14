require('dotenv').config();

module.exports = {
    testEnvironment: 'node',
    testTimeout: 30000,
    roots: ['<rootDir>'],
    moduleFileExtensions: ['js', 'ts', 'json'],
    moduleNameMapper: {},
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.cache',
        '<rootDir>/build',
        '<rootDir>/.tmp',
    ],
};
