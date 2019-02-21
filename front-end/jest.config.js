module.exports = {
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/src/components/**/*.tsx",
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "roots": [
    "<rootDir>/src"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/setupEnzyme.ts",
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "testURL": "http://localhost/",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
}