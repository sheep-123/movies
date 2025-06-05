import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: 'snzypic.vip',
        //     pathname: '/upload/**',
        //   },
        // ],
        remotePatterns: [
            new URL('https://snzypic.vip/upload/**'),
            new URL('https://img.bfzypic.com/upload/**'),
            new URL('https://img.lzzyimg.com/upload/**'),
        ],
      },
};

export default nextConfig;
