"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DateAndTime() {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    const [time, setTime] = React.useState("")

    return (
        <div className="flex gap-10">

            {/* DATE */}
            <div className="flex flex-col gap-3">
                <Label htmlFor="date-picker" className="px-1">
                    Date
                </Label>

                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            id="date-picker"
                            className="w-32 bg-background/60 justify-between font-normal hover:bg-background/60"
                        >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent
                        align="start"
                        className="bg-background/60 backdrop-blur-xl border border-border/60 rounded-xl"
                    >
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(d) => {
                                setDate(d)
                                setOpen(false)
                            }}
                        />
                    </PopoverContent>
                </Popover>

                {/* ✅ HIDDEN INPUT FOR DATE */}
                <input
                    type="hidden"
                    name="date"
                    value={date ? date.toISOString().split("T")[0] : ""}
                />
            </div>

            {/* TIME */}
            <div className="flex flex-col gap-3">
                <Label htmlFor="time-picker" className="px-1">
                    Time
                </Label>

                <Input
                    type="time"
                    id="time-picker"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-background appearance-none"
                />

                {/* ✅ HIDDEN INPUT FOR TIME */}
                <input
                    type="hidden"
                    name="time"
                    value={time}
                />
            </div>
        </div>
    )
}
