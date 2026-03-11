import React from 'react'
import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import {events as fallbackEvents} from "@/lib/constants";
import { getAllEvents } from "@/lib/actions/event.actions";

export const dynamic = "force-dynamic";

const Page = async() => {
    let events: any[] = [];

    try {
        events = await getAllEvents() as any[];
    } catch (error) {
        console.error("Failed to fetch events from DB, using fallback data:", error);
    }

    // Fallback to dummy data if API fails or returns empty
    if (!events || events.length === 0) {
        events = fallbackEvents;
    }

    return (
        <section>
            <h1 className="text-center">The Hub for Every Dev <br/> Event You Can't Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>
            <ExploreBtn className="content-center"/>
            <div className="mt-10 space-y-7">
                <h3>Featured Events</h3>
                <ul className="events list-none">
                    {events && events.length>0 && events.map((event: any)=>(
                        <li key={event.title}>
                            <EventCard
                                title={event.title}
                                image={event.image}
                                slug={event.slug}
                                location={event.location}
                                date={event.date}
                                time={event.time}
                                category={event.category}
                                eventId={event.id ?? event._id ?? event.slug}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Page
