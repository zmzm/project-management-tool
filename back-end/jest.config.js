const transform = { '^.+\\.ts$': 'ts-jest' };
const testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$';
const moduleFileExtensions = [
  'ts',
  'js',
  'json',
  'node',
];

module.exports = {
  transform,
  testRegex,
  moduleFileExtensions,
};
