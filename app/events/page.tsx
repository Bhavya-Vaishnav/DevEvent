export const dynamic = "force-dynamic";

import EventsClient from "./EventsClient";
import { getAllEvents } from "@/lib/actions/event.actions";
import { events as fallbackEvents } from "@/lib/constants";

export default async function EventsPage() {
    let rawEvents;

    try {
        rawEvents = await getAllEvents();
    } catch (error) {
        console.error("Failed to fetch events, using fallback data:", error);
        rawEvents = null;
    }

    const safeEvents = rawEvents && rawEvents.length > 0
        ? rawEvents.map(event => ({
            id: event._id.toString(),
            title: event.title,
            image: event.image,
            slug: event.slug,
            location: event.location,
            date: event.date,
            time: event.time,
            category: (event as any).category || "",
            mode: (event as any).mode || "",
            tags: (event as any).tags || [],
        }))
        : fallbackEvents.map(event => ({
            id: event.slug,
            title: event.title,
            image: event.image,
            slug: event.slug,
            location: event.location,
            date: event.date,
            time: event.time,
            category: event.category || "",
            mode: event.mode || "",
            tags: event.tags || [],
        }));

    return <EventsClient events={safeEvents} />;
}
