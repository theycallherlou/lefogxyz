import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    testTransformMode: {
      web: ['tsx']
    }
  },
  esbuild: {
    loader: 'tsx',
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  }
});
