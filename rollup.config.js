import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js', // 入口文件
  output: {
    format: 'cjs',
    file: 'bin/index.js', // 打包后输出文件
    exports: 'auto'
  },
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs(),
    uglify(),
  ]
}