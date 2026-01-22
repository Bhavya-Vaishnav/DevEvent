// `app/events/create/page.tsx`
import CreateEventForm from './CreateEventForm'
import { redirect } from 'next/navigation'
import {createEvent} from "@/lib/actions/event.actions";

export default function Page() {
    async function CreateEvent(formData: FormData) {
        'use server'

        const title = formData.get('title')?.toString()?.trim() ?? ''
        const description = formData.get('description')?.toString()?.trim() ?? ''
        const date = formData.get('date')?.toString() ?? ''
        const time = formData.get('time')?.toString() ?? ''
        const location = formData.get('location')?.toString()?.trim() ?? ''
        const imageUrl = formData.get('imageUrl')?.toString()?.trim() ?? undefined

        const start = date && time ? new Date(`${date}T${time}`).toISOString() : null

        const payload = {
            title,
            description,
            start,
            location,
            imageUrl,
        }

        try {
            // call your server-side DB function (import path above)
            await createEvent(payload)
            // redirect to events list (optional)
            redirect('/events')
        } catch (err) {
            console.error('CreateEvent error:', err)
            // keep on page or handle error UI via session/flash etc.
        }
    }

    return <CreateEventForm action={CreateEvent} />
}
