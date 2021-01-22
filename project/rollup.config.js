import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import cleaner from "rollup-plugin-cleaner";

const plugins = [typescript()];

// 构建模式执行压缩
if (!process.env.ROLLUP_WATCH) {
  plugins.push(terser());
  plugins.push(cleaner({ targets: ["./dist/"] }));
}

export default {
  input: "./src/index.ts",
  output: {
    dir: "./dist",
    format: "es",
    sourcemap: true,
  },
  external: ["react"],
  plugins,
};
