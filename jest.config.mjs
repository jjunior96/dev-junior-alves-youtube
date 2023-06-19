import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/utils/**',
    '!src/**/mock.{ts,tsx}',
    '!src/middleware.ts',
    '!src/@types/**',
    '!src/constants/**',
    '!src/pages/**',
    '!src/app/**',
    '!src/providers/**',
    '!src/styles/**',
    '!src/scripts/**',
    '!src/types/**',
    '!src/models/**',
    '!src/**/types.ts',
    '!src/**/styles.ts'
  ],
  // Define the test coverage threshold minimum for this project
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // },
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: [
    '<rootDir>/src/**/*.test.{ts,tsx}',
    '<rootDir>/src/**/*.spec.{ts,tsx}'
  ],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  testEnvironment: 'jest-environment-jsdom'
};

export default createJestConfig(config);
