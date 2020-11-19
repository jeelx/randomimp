/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // Stop running tests after `n` failures
  bail: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: false,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/javascript/",
    "/src/typescript/interface/",
    "/src/test/",
    "/src/stories/",
    "/src/resources/"

  ],
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // A list of reporter names that Jest uses when writing coverage reports
   coverageReporters: [
  //   "json",
     "text",
     "lcov",
  //   "clover"
   ],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    "node_modules"
  ],
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "\\.(css|scss)": "identity-obj-proxy"
  },
  // Activates notifications for test results
  notify: true,

  // An enum that specifies notification mode. Requires { notify: true }
  notifyMode: "always",
  // Use this configuration option to add custom reporters to Jest
  reporters: ["default"],
  setupFilesAfterEnv: [
    '<rootDir>/setupJest.js'
  ],
  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  testRegex: "(/^spec/.*|\\.(test|spec))\\.(ts)$",
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(j|t)s?$": "babel-jest"
  },
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    //"node_modules/(?!(lit-element|lit-html)/)"
  ],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
  // Whether to use watchman for file crawling
  //watchman: true
};
