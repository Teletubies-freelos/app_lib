/**
 * @type {import('next').NextConfig}
 */
const options = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "export",
  assetPrefix: "./",
};

module.exports = options;
