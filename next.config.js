/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { typescript: true } }]
    });

    return config;
  }
};
