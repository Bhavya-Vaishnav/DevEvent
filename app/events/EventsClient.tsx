"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Events from "@/components/Events";
import { CATEGORIES, MODES, SORT_OPTIONS } from "@/lib/constants";

interface EventData {
    id: string;
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    category?: string;
    mode?: string;
    tags?: string[];
}

interface Props {
    events: EventData[];
}

export default function EventsClient({ events }: Props) {
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedMode, setSelectedMode] = useState("all");
    const [sortBy, setSortBy] = useState("date-asc");

    const filteredAndSortedEvents = useMemo(() => {
        let result = events;

        // Text search filter
        if (query) {
            result = result.filter(event =>
                event.title.toLowerCase().includes(query.toLowerCase()) ||
                event.location.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Category filter
        if (selectedCategory !== "all") {
            result = result.filter(event =>
                event.category?.toLowerCase() === selectedCategory
            );
        }

        // Mode filter
        if (selectedMode !== "all") {
            result = result.filter(event =>
                event.mode?.toLowerCase() === selectedMode
            );
        }

        // Sort
        result = [...result].sort((a, b) => {
            switch (sortBy) {
                case "date-asc":
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                case "date-desc":
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                case "category":
                    return (a.category || "zzz").localeCompare(b.category || "zzz");
                case "newest":
                default:
                    return 0; // preserve original order (createdAt desc from server)
            }
        });

        return result;
    }, [events, query, selectedCategory, selectedMode, sortBy]);

    const pillBase = "px-4 py-1.5 rounded-full text-sm cursor-pointer border transition-all duration-200";
    const pillInactive = "border-gray-700 text-gray-400 hover:border-[#59deca] hover:text-white";
    const pillActive = "bg-[#59deca] text-black border-[#59deca] font-semibold";

    return (
        <section className="container mx-auto">
            {/* Header + Search */}
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

            {/* Filters & Sort Row */}
            <div className="flex flex-col gap-5 mb-8 p-5 rounded-xl border border-gray-700/50 bg-[#0D1117]/70 backdrop-blur-xl">
                {/* Category Filters */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="text-gray-400 text-sm font-medium min-w-[70px]">Category</span>
                    <div className="flex flex-row flex-wrap gap-2">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.value}
                                type="button"
                                className={`${pillBase} ${selectedCategory === cat.value ? pillActive : pillInactive}`}
                                onClick={() => setSelectedCategory(cat.value)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mode Filters */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="text-gray-400 text-sm font-medium min-w-[70px]">Mode</span>
                    <div className="flex flex-row flex-wrap gap-2">
                        {MODES.map(mode => (
                            <button
                                key={mode.value}
                                type="button"
                                className={`${pillBase} ${selectedMode === mode.value ? pillActive : pillInactive}`}
                                onClick={() => setSelectedMode(mode.value)}
                            >
                                {mode.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sort Dropdown */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="text-gray-400 text-sm font-medium min-w-[70px]">Sort by</span>
                    <select
                        className="px-4 py-1.5 rounded-lg text-sm border border-gray-700 bg-[#182830]/60 text-gray-400 cursor-pointer outline-none hover:border-[#59deca] focus:border-[#59deca] transition-all duration-200"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        {SORT_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value} className="bg-[#0d161a] text-gray-300">
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Results count */}
            <p className="text-gray-400 text-sm mb-4">
                {filteredAndSortedEvents.length} event{filteredAndSortedEvents.length !== 1 ? "s" : ""} found
            </p>

            <Events events={filteredAndSortedEvents} />
        </section>
    );
}
