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
        <div className="flex gap-6 w-full">

            {/* DATE */}
            <div className="flex flex-col gap-1 flex-1">
                <Label htmlFor="date-picker" className="text-sm text-gray-300">
                    Date <span className="text-red-400">*</span>
                </Label>

                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            id="date-picker"
                            variant="outline"
                            className="w-full bg-[#182830]/60 border-gray-700 justify-between font-normal text-sm py-2.5 h-auto hover:bg-[#182830]/80 hover:border-[#59deca] transition-colors text-white"
                        >
                            <span className={date ? "text-white" : "text-gray-500"}>
                                {date ? date.toLocaleDateString() : "Select date"}
                            </span>
                            <ChevronDownIcon className="size-4 text-gray-400" />
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
            <div className="flex flex-col gap-1 flex-1">
                <Label htmlFor="time-picker" className="text-sm text-gray-300">
                    Time <span className="text-red-400">*</span>
                </Label>

                <Input
                    type="time"
                    id="time-picker"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-[#182830]/60 border-gray-700 py-2.5 h-auto text-sm text-white appearance-none focus:border-[#59deca] transition-colors"
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
