import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    rules: {
      // Content-heavy marketing site — apostrophes in JSX text are intentional
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
