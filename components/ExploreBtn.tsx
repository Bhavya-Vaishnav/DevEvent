"use client"
import Image from "next/image";
interface ExploreBtnProps {
    targetId?: string;
    className?: string;
    children?: React.ReactNode;
}
export default function ExploreBtn({
                                       targetId = 'featured-events',
                                       children = 'Explore Events',
                                   }: ExploreBtnProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    };

    return (
        <button
            type="button" id="explore-btn" className="mt-7 mx-auto"
            onClick={handleClick}
        >
            {children}
            <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}></Image>
        </button>
    );
}

