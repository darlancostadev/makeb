module.exports = {
	setupFilesAfterEnv: ['./jest.setup.js'],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	bail: 1,
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ['src/components/**/*.js(x)'],
	coverageReporters: ['lcov', 'text'],
	modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
