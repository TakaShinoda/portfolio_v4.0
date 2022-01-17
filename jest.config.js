// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // テスト環境のnext.config.jsと.envファイルを読み込むために、Next.jsアプリのパスを提供
  dir: './',
})

// Jestに渡すカスタムコンフィグを追加
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // TypeScriptでbaseUrlをルートディレクトリに設定している場合、aliasを動作させるためには以下のようにする必要がある
  moduleDirectories: ['node_modules', '<rootDir>/'],
//   roots: ['<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfigは、next/jestが非同期でNext.jsの設定を読み込めるようにするためにこのようにエクスポートされる
module.exports = createJestConfig(customJestConfig)