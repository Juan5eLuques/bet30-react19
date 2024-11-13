import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'a7a.nyc3.digitaloceanspaces.com',
          port: '',
          pathname: '**',
        },
        {
          protocol : 'https',
          hostname : 'a7a.nyc3.cdn.digitaloceanspaces.com',
          port :'',
          pathname : '**'
        },
      ],
    },

    eslint: {
      ignoreDuringBuilds: true, // Ignora errores de linting durante el build
    },

    reactStrictMode: true,

};

export default nextConfig;
