"use client";

import dynamic from "next/dynamic";

const LightRays = dynamic(() => import("./LightRays"), {
    ssr: false,
});

export default function BackgroundEffects() {
    return (
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen mx-auto">
            <LightRays
                raysOrigin="top-center"
                raysColor="#5dfeca"
                raysSpeed={0.5}
                lightSpread={1}
                rayLength={1.4}
                followMouse={true}
                mouseInfluence={0.02}
                noiseAmount={0.0}
                distortion={0.01}
            />
        </div>
    );
}
