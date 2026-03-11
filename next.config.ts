import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    typescript:{
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    experimental: {
        turbopackFileSystemCacheForDev: true,
    }
};

export default nextConfig;
