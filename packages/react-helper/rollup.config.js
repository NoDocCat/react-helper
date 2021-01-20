import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import cleaner from "rollup-plugin-cleaner";

const plugins = [typescript(), cleaner({ targets: ["./dist/"] })];

// 构建模式执行压缩
if (!process.env.ROLLUP_WATCH) {
  plugins.push(terser());
}

export default {
  input: "./src/index.ts",
  output: {
    dir: "./dist",
    format: "es",
    sourcemap: true,
  },
  plugins,
};
