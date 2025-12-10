"use client"
import Image from "next/image";

interface ExploreBtnProps {
    targetId?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function ExploreBtn({
                                       targetId = "featured-events",
                                       children = "Explore Events",
                                       className = "",
                                   }: ExploreBtnProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }
        if (typeof window !== "undefined") {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
    };

    return (
        <button
            type="button"
            id="explore-btn"
            onClick={handleClick}
            aria-label="Explore events"
            className={`
        mt-7
        mx-auto
        flex items-center justify-center gap-2
        rounded-full
        border border-gray-700
        bg-[#0D1117]/90
        text-white font-medium
        
        w-[55%] max-w-[420px]   /* mobile: nearly full width, but capped */
        mb-0

        md:w-auto md:px-8 md:py-3 md:text-lg

        /* optional extra classes from parent */
        ${className}
      `}
        >
            <span className="leading-none">{children}</span>

            <Image
                src="/icons/arrow-down.svg"
                alt="arrow-down"
                width={20}
                height={20}
                className="block md:w-5 md:h-5"
                priority={false}
            />
        </button>
    );
}
