// lib/actions/event.actions.ts
'use server';
import {unstable_noStore as noStore} from "next/cache";
import {redirect} from "next/navigation";
import Event, {IEvent} from '@/database/event.model';
import connectDB from "@/lib/mongodb";

export type EventItem = {
    _id: string;
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    category: string;
    mode: string;
    tags: string[];
};
export const getSimilarEventsBySlug = async (slug: string) => {
    noStore();
    try {
        await connectDB();
        const event = await Event.findOne({slug});
        return await (Event.find({_id: {$ne: event._id}, tags: {$in: event.tags}}).lean()) as unknown as IEvent[];
    } catch {
        return [];
    }
}

export async function getAllEvents(): Promise<EventItem[]> {
    noStore();
    try {
        await connectDB();
        const events = (await Event.find().sort({createdAt: -1}).lean()) as unknown as EventItem[];
        return events || [];
    } catch (e) {
        console.error("getAllEvents error:", e);
        return [];
    }
}

export const createEvent = async (event: Partial<IEvent>): Promise<IEvent | null> => {
    noStore();
    try {
        await connectDB();
        const created = await Event.create(event);
        return (created && (created.toObject ? created.toObject() : created)) as IEvent;
    } catch (e) {
        console.error('createEvent error:', e);
        return null;
    }
};

export async function createEventFromForm(formData: FormData) {
    noStore();

    const getString = (key: string) => {
        const v = formData.get(key);
        if (typeof v === 'string') return v.trim();
        if (v == null) return '';
        return String(v).trim();
    };

    const title = getString('title');
    const description = getString('description');
    const overview = getString('overview');
    const image = getString('image');
    const venue = getString('venue');
    const location = getString('location');
    const date = getString('date');
    const time = getString('time');
    const category = getString('category');
    const mode = getString('mode');
    const audience = getString('audience');
    const organizer = getString('organizer');

    const agendaRaw = getString('agenda');
    const agenda = agendaRaw ? agendaRaw.split(/\r?\n/).map(i => i.trim()).filter(Boolean) : [];

    const tagsRaw = getString('tags');
    const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];

    // Validate required fields
    const missing = [];
    if (!title) missing.push('title');
    if (!description) missing.push('description');
    if (!overview) missing.push('overview');
    if (!image) missing.push('image');
    if (!date) missing.push('date');
    if (!time) missing.push('time');
    if (!category) missing.push('category');
    if (!mode) missing.push('mode');
    if (!audience) missing.push('audience');
    if (!organizer) missing.push('organizer');
    if (agenda.length === 0) missing.push('agenda');
    if (tags.length === 0) missing.push('tags');

    if (missing.length > 0) {
        throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }

    const event: Partial<IEvent> = {
        title,
        description,
        overview,
        image,
        venue,
        location: location || (mode === 'online' ? 'Online' : ''),
        date,
        time,
        category,
        mode,
        audience,
        organizer,
        agenda,
        tags,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
    };

    const created = await createEvent(event);
    if (!created) {
        throw new Error('Event creation failed on the server');
    }
    if (!created.slug) {
        throw new Error('Created event missing slug');
    }

    redirect(`/events/${created.slug}`);
}
