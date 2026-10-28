import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    ignores: [
      ".next/**",
      "dist/**",
      "node_modules/**",
      "src/components/ui/**",
      "src/lib/**",
      "src/hooks/**",
    ],
  },
];

export default config;
