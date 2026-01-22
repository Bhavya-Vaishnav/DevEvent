import React from 'react'
import EventCard from "@/components/EventCard";
import {IEvent} from "@/database";
import {cacheLife} from "next/cache";
import ExploreBtn from "@/components/ExploreBtn";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ;
const Page = async() => {
    'use cache';
    cacheLife('hours');
    const response = await fetch(`${BASE_URL}/api/events`, {
        next: { revalidate: 3600 }
    });
    const events=await response.json();
    return (
        <section>
            <h1 className="text-center">The Hub for Every Dev <br/> Event You Can't Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>
            <ExploreBtn className="content-center"/>
            <div className="mt-10 space-y-7">
                <h3>Featured Events</h3>
                <ul className="events list-none">
                    {events && events.length>0 && events.map((event:IEvent)=>(
                        <li key={event.title}>
                            <EventCard {...event} eventId={event.id ?? event.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Page
