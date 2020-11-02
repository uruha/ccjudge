module.exports = {
    verbose: true,
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/'
    ],
    moduleFileExtensions: ['js', 'ts'],
    collectCoverage: true,
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1'
    },
    globals: {
        'ts-jest': {
            'tsconfig': 'tsconfig.json'
        }
    }
};