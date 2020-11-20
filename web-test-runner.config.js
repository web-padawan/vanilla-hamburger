const { esbuildPlugin } = require('@web/dev-server-esbuild');
const { visualRegressionPlugin } = require('@web/test-runner-visual-regression/plugin');

module.exports = {
  nodeResolve: true,
  plugins: [
    esbuildPlugin({ ts: true }),
    visualRegressionPlugin({
      baseDir: 'test/visual/screenshots',
      diffOptions: {
        threshold: 0.2
      },
      update: process.env.UPDATE_REFS === 'true'
    })
  ],
  coverageConfig: {
    threshold: {
      statements: 98,
      branches: 75,
      functions: 100,
      lines: 98
    }
  }
};
