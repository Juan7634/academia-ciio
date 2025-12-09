import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"

interface DatePickerComponentProps {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
}

export const DatePickerComponent = ({ value, onChange }: DatePickerComponentProps) => {

    const [open, setOpen] = useState(false)

    return (

        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    id="date"
                    className="w-48 justify-between font-normal"
                >
                    {value ? value.toLocaleDateString() : "Selecciona la fecha"}
                    <ChevronDownIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar
                    mode="single"
                    selected={value}
                    captionLayout="dropdown"
                    onSelect={(date: Date) => {
                        onChange(date)
                        setOpen(false)
                    }}
                />
            </PopoverContent>
        </Popover>
    )
}
