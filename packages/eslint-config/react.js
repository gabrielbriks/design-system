module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:prettier/recommended",
  ],
  plugins: ["react"],
  rules: {
    "react/self-closing-comp": "error",
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: true,
        endOfLine: "auto",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",

    "react/no-unknown-property": "error",
  },
  // settings: {
  //   react: {
  //     version: "detect",
  //   },
  //   "import/parsers": {
  //     [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
  //   },
  // },
  ignorePatterns: ["node_modules"],
};
