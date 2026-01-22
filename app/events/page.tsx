export const dynamic = "force-dynamic";

import EventsClient from "./EventsClient";
import { getAllEvents } from "@/lib/actions/event.actions";

export default async function EventsPage() {
    const events = await getAllEvents();

    const safeEvents = events.map(event => ({
        id: event._id.toString(),
        title: event.title,
        image: event.image,
        slug: event.slug,
        location: event.location,
        date: event.date,
        time: event.time,
    }));

    return <EventsClient events={safeEvents} />;
}
