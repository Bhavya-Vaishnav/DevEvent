import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    cacheComponents:true,
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'res.cloudinary.com'}
        ]
    },
    experimental: {
        turbopackFileSystemCacheForDev: true,
        cacheComponents:true
    }
};

export default nextConfig;
