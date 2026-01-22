import type {Metadata} from "next";
import {Schibsted_Grotesk, Martian_Mono} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import BackgroundEffects from "@/components/BackgroundEffects";

const schibstedGrotesk = Schibsted_Grotesk({
    variable: "--font-schibsted-sans",
    subsets: ["latin"],
});

const martianMono = Martian_Mono({
    variable: "--font-martian-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DevEvent",
    description: "The Hub for Every Dev Event You Mustn't Miss",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
        >
        <BackgroundEffects />
        <main>
            <NavBar/>
            {children}
        </main>
        </body>
        </html>
    );
}
