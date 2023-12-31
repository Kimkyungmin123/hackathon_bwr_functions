module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  compilerOptions: {
    module: "ESNext",
    // ...
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",

  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    quotes: ["error", "double"],
    "import/no-unresolved": 0,
    indent: ["error", 2],
  },
  parserOptions: {
    project: "./tsconfig.json", // Check if this path is correct
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
};
