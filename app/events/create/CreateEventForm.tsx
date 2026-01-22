'use client'

import { useState } from "react"
import { createEventFromForm } from "@/lib/actions/event.actions"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import {DateAndTime} from "@/components/DateTime";

export default function CreateEventForm() {
    const [mode, setMode] = useState<"online" | "offline" | "hybrid">("online")
    const showLocation = mode === "offline" || mode === "hybrid"

    return (
        <section className="container mx-auto px-4 py-12">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8">Create New Event</h1>

            <form action={createEventFromForm} className="raw-form">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* LEFT CARD — EVENT DETAILS */}
                    <div className="rounded-xl border border-border/60 bg-background/60 backdrop-blur-md p-6 space-y-5">
                        <h2 className="text-lg font-semibold">Event Details</h2>

                        <div className="space-y-1">
                            <label className="text-sm">Event Title</label>
                            <input
                                name="title"
                                placeholder="Event Title"
                                required
                                className="w-full rounded-md bg-secondary px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm">Short Description</label>
                            <input
                                name="description"
                                placeholder="Short Description"
                                className="w-full rounded-md bg-secondary px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm">Image</label>
                            <input
                                name="image"
                                placeholder="Image URL"
                                className="w-full rounded-md bg-secondary px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm">Full Overview</label>
                            <textarea
                                name="overview"
                                rows={4}
                                placeholder="Full Overview"
                                className="w-full rounded-md bg-secondary px-3 py-2 text-sm outline-none resize-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <DateAndTime/>
                        </div>
                    </div>

                    {/* RIGHT CARD — LOGISTICS */}
                    <div className="rounded-xl border border-border/60 bg-background/60 backdrop-blur-md p-6 space-y-5">
                        <h2 className="text-lg font-semibold">Logistics</h2>

                        {/* MODE */}
                        <div className="space-y-2">
                            <label className="text-sm">Event Mode</label>

                            <RadioGroup
                                name="mode"
                                defaultValue="online"
                                onValueChange={(value) =>
                                    setMode(value as "online" | "offline" | "hybrid")
                                }
                                className="flex gap-3"
                            >
                                {["online", "offline", "hybrid"].map((value) => (
                                    <label
                                        key={value}
                                        className="flex items-center gap-2 rounded-full  px-4 py-1.5 text-sm cursor-pointer"
                                    >
                                        <RadioGroupItem value={value} />
                                        {value.charAt(0).toUpperCase() + value.slice(1)}
                                    </label>
                                ))}
                            </RadioGroup>
                        </div>

                        {/* LOCATION — CONDITIONAL */}
                        {showLocation && (
                            <div className="space-y-1">
                                <label className="text-sm">Location</label>
                                <input
                                    name="location"
                                    placeholder="City / Venue"
                                    required
                                    className="w-full rounded-md bg-secondary px-3 py-2 text-sm outline-none"
                                />
                            </div>
                        )}

                        <div className="space-y-1">
                            <label className="text-sm">Target Audience</label>
                            <input
                                name="audience"
                                placeholder="Target Audience"
                                className="w-full rounded-md bg-secondary px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm">Agenda</label>
                            <textarea
                                id="agenda"
                                name="agenda"
                                rows={2}
                                placeholder="Agenda (one item per line)"
                                className="w-full rounded-md bg-secondary px-3 py-2 text-sm outline-none resize-none"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm">Tags</label>
                            <input
                                name="tags"
                                placeholder="Tags (comma separated)"
                                className="w-full rounded-md bg-secondary px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm">Organizer</label>
                            <input
                                name="organizer"
                                placeholder="Organizer"
                                className="w-full rounded-md bg-secondary px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        {/* SUBMIT — UNCHANGED */}
                        <Button type="submit" className="w-full mt-4 text-black">
                            Publish Event
                        </Button>
                    </div>

                </div>
            </form>
        </section>
    )
}
