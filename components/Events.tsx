"use client";

import EventCard from "./EventCard";

export default function Events({ events }: { events: any[] }) {
    if (!events.length) {
        return <p>No events found</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map(event => (
                <EventCard
                    key={event.id}
                    title={event.title}
                    image={event.image}
                    slug={event.slug}
                    location={event.location}
                    date={event.date}
                    time={event.time}
                />
            ))}
        </div>
    );
}
