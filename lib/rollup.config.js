import vue from 'rollup-plugin-vue'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js'
    },
    external: ['vue'],
    plugins: [
      vue()
    ]
  },
  // SSR build.
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.js'
    },
    external: ['vue'],
    plugins: [
      vue({ template: { optimizeSSR: true } })
    ]
  }
]