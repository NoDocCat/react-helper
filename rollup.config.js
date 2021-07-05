import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "./src/index.ts",
  output: { file: pkg.main, format: "es", sourcemap: true },
  external: ["react"],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["node_modules", "dist", "**/*.spec.ts", "**/*.spec.tsx"],
      },
    }),
  ],
};
