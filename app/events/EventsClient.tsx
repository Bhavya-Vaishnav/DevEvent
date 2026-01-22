"use client";

import { useState } from "react";
import Image from "next/image";
import Events from "@/components/Events";

interface Props {
    events: any[];
}

export default function EventsClient({ events }: Props) {
    const [query, setQuery] = useState("");

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section className="container mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-6 gap-2">
                <h1 className="text-3xl font-bold">All Events</h1>

                <div className="flex items-center gap-2 border border-gray-700 rounded-full px-4 py-1 bg-[#0D1117]/90">
                    <Image
                        src="/icons/search.png"
                        alt="search"
                        width={20}
                        height={20}
                        className="invert opacity-70"
                    />
                    <input
                        type="text"
                        placeholder="Search events..."
                        className="py-2 sm:w-56 md:w-64 bg-transparent outline-none"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>

            <Events events={filteredEvents} />
        </section>
    );
}
