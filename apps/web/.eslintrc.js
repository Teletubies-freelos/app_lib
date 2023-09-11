module.exports = {
  extends: ["custom/next"],
  rules: {
    "import/no-unresolved": "off",
    "unicorn/filename-case": "off",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "no-console": "warn",
  },
};
