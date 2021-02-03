module.exports = {
  preset: "ts-jest",
  bail: true,
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.spec.ts?(x)"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/src/index.ts"],
};
