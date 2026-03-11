'use client'

import { useState } from "react"
import { createEventFromForm } from "@/lib/actions/event.actions"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { DateAndTime } from "@/components/DateTime";

export default function CreateEventForm() {
    const [mode, setMode] = useState<"online" | "offline" | "hybrid">("offline")
    const showVenue = mode === "offline" || mode === "hybrid"

    return (
        <section className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
            <p className="text-gray-400 text-sm mb-8">Fill in the details below to publish your event on DevEvent.</p>

            <form action={createEventFromForm} className="raw-form">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* LEFT COLUMN — Event Details */}
                    <div className="rounded-xl border border-gray-700/50 bg-[#0D1117]/70 backdrop-blur-xl p-6 space-y-5">
                        <h2 className="text-lg font-semibold text-white">Event Details</h2>

                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Event Title <span className="text-red-400">*</span></label>
                            <input
                                name="title"
                                placeholder="e.g. React Summit 2026"
                                required
                                className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Short Description <span className="text-red-400">*</span></label>
                            <input
                                name="description"
                                placeholder="A brief one-liner about the event"
                                required
                                className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Image URL <span className="text-red-400">*</span></label>
                            <input
                                name="image"
                                placeholder="https://example.com/event-banner.jpg"
                                required
                                className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Full Overview <span className="text-red-400">*</span></label>
                            <textarea
                                name="overview"
                                rows={4}
                                required
                                placeholder="Detailed description of the event, what attendees can expect..."
                                className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors resize-none"
                            />
                        </div>

                        <DateAndTime />
                    </div>

                    {/* RIGHT COLUMN — Logistics */}
                    <div className="rounded-xl border border-gray-700/50 bg-[#0D1117]/70 backdrop-blur-xl p-6 space-y-5">
                        <h2 className="text-lg font-semibold text-white">Logistics</h2>

                        {/* Category */}
                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Category <span className="text-red-400">*</span></label>
                            <select
                                name="category"
                                required
                                className="w-full focus:border-[#59deca] transition-colors"
                                defaultValue=""
                            >
                                <option value="" disabled>Select a category</option>
                                <option value="conference">Conference</option>
                                <option value="hackathon">Hackathon</option>
                                <option value="meetup">Meetup</option>
                                <option value="workshop">Workshop</option>
                                <option value="webinar">Webinar</option>
                            </select>
                        </div>

                        {/* Event Mode */}
                        <div className="space-y-2">
                            <label className="text-sm text-gray-300">Event Mode <span className="text-red-400">*</span></label>

                            <RadioGroup
                                name="mode"
                                defaultValue="offline"
                                onValueChange={(value) =>
                                    setMode(value as "online" | "offline" | "hybrid")
                                }
                                className="flex gap-3"
                            >
                                {["online", "offline", "hybrid"].map((value) => (
                                    <label
                                        key={value}
                                        className="flex items-center gap-2 rounded-full border border-gray-700 px-4 py-1.5 text-sm cursor-pointer hover:border-[#59deca] transition-colors"
                                    >
                                        <RadioGroupItem value={value} />
                                        {value.charAt(0).toUpperCase() + value.slice(1)}
                                    </label>
                                ))}
                            </RadioGroup>
                        </div>

                        {/* Location (always shown) */}
                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">
                                Location {(mode === "offline" || mode === "hybrid") && <span className="text-red-400">*</span>}
                            </label>
                            <input
                                name="location"
                                placeholder={mode === "online" ? "e.g. Online / Zoom" : "e.g. San Francisco, CA"}
                                required={mode === "offline" || mode === "hybrid"}
                                className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors"
                            />
                        </div>

                        {/* Venue (only for offline/hybrid) */}
                        {showVenue && (
                            <div className="space-y-1">
                                <label className="text-sm text-gray-300">Venue</label>
                                <input
                                    name="venue"
                                    placeholder="e.g. Moscone Center, Hall B"
                                    className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors"
                                />
                            </div>
                        )}

                        {/* Target Audience */}
                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Target Audience <span className="text-red-400">*</span></label>
                            <input
                                name="audience"
                                placeholder="e.g. Frontend Developers, Students, All Levels"
                                required
                                className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors"
                            />
                        </div>

                        {/* Agenda */}
                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Agenda <span className="text-red-400">*</span></label>
                            <textarea
                                name="agenda"
                                rows={3}
                                required
                                placeholder={"Opening Keynote\nWorkshop: React Patterns\nNetworking Lunch\nPanel Discussion"}
                                className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors resize-none"
                            />
                            <p className="text-xs text-gray-500">One item per line</p>
                        </div>

                        {/* Tags */}
                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Tags <span className="text-red-400">*</span></label>
                            <input
                                name="tags"
                                required
                                placeholder="e.g. react, javascript, frontend"
                                className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors"
                            />
                            <p className="text-xs text-gray-500">Comma separated</p>
                        </div>

                        {/* Organizer */}
                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Organizer <span className="text-red-400">*</span></label>
                            <input
                                name="organizer"
                                required
                                placeholder="e.g. Google Developer Groups"
                                className="w-full rounded-md bg-[#182830]/60 border border-gray-700 px-3 py-2.5 text-sm outline-none focus:border-[#59deca] transition-colors"
                            />
                        </div>

                        <Button type="submit" className="w-full mt-4 text-black font-semibold text-base">
                            Publish Event
                        </Button>
                    </div>

                </div>
            </form>
        </section>
    )
}
