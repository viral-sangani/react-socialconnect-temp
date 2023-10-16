/** @type {import('next').NextConfig} */

process.on("warning", (warning) => {
  if (
    warning.name === "DeprecationWarning" &&
    warning.message.includes("Buffer()")
  ) {
    // Do nothing to suppress this specific warning
  } else {
    console.warn(warning.name, warning.message, warning.stack);
  }
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        encoding: false,
        util: false,
      };
    }
    config.module.exprContextCritical = false;
    return config;
  },
};

module.exports = nextConfig;
