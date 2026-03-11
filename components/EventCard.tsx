import Link from "next/link";
import Image from "next/image";

type EventCardProps = {
    eventId?: string;
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    category?: string;
};

const categoryColors: Record<string, string> = {
    conference: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    hackathon: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    meetup: "bg-green-500/20 text-green-300 border-green-500/30",
    workshop: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    webinar: "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

const EventCard = (Props: EventCardProps) => {
    const { eventId, title, image, slug, location, date, time, category } = Props;

    const catStyle = category ? categoryColors[category.toLowerCase()] || "bg-gray-500/20 text-gray-300 border-gray-500/30" : "";

    return (
        <Link href={`/events/${slug}`} id="event-card">
            <div className="relative">
                <Image src={image} alt={title} width={410} height={300} className="poster" />
                {category && (
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm capitalize ${catStyle}`}>
                        {category}
                    </span>
                )}
            </div>

            <div className="flex flex-row gap-2">
                <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
                <p>{location}</p>
            </div>
            <p className="title">{title}</p>
            <div className="datetime">
                <div>
                    <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
                    <p>{date}</p>
                </div>
                <div>
                    <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
                    <p>{time}</p>
                </div>
            </div>
        </Link>
    )
}
export default EventCard
