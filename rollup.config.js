import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/nestable.js',
    format: 'umd',
    name: 'Nestable'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};