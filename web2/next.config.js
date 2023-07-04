/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        encoding: false,
        tls: false,
        "pino-pretty": false
      };
    }

    return config;
  },
};

module.exports = nextConfig;
