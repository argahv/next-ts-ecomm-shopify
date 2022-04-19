const { withFrameworkConfig } = require("./framework/common/config");

/** @type {import('next').NextConfig} */
const nextConfig = withFrameworkConfig({
  framework: {
    name: "shopify_local",
  },
  reactStrictMode: true,
  // internationalization
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
});

module.exports = nextConfig;
