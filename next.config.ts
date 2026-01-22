import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    typescript:{
        ignoreBuildErrors: true,
    },
    cacheComponents:false,
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'res.cloudinary.com'}
        ]
    },
    experimental: {
        turbopackFileSystemCacheForDev: true,
    }
};

export default nextConfig;
