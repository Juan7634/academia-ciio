import { TableCell } from "../ui/table"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import type { UseFormRegister, UseFormSetValue } from "react-hook-form"
import type { ComboBoxValueI, StudyPlanFormValues } from "../../schema/StudyPlantI"


interface ActivityFieldTableProps {
    register: UseFormRegister<StudyPlanFormValues>,
    data: Array<ComboBoxValueI>
    name: `activities.${number}.${"unit" | "activity" | "tool" | "studentDevelop"}`;
    setValue: UseFormSetValue<StudyPlanFormValues>;
}

export const ActivityFieldTable = ({
    register,
    data,
    name,
    setValue

}: ActivityFieldTableProps) => {

    const [open, setOpen] = useState<boolean>(false)
    const [value, setLocalValue] = useState<string>("")

    return (

        <TableCell className="text-center">
            <input type="hidden" {...register(name)} value={value} />

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full max-w-[300px] justify-between"
                    >
                        <span className="truncate flex-1 text-left">
                            {value
                                ? data.find((item) => item.value === value)?.label
                                : "Select una opción..."}
                        </span>
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto max-w-[700px] p-0">
                    <Command>
                        <CommandInput placeholder="Buscar opción..." className="h-9" />
                        <CommandList>
                            <CommandEmpty>Opción no encontrada.</CommandEmpty>
                            <CommandGroup>
                                {data.map((item) => (
                                    <CommandItem
                                        key={item.value}
                                        value={item.value}
                                        onSelect={(currentValue: any) => {
                                            setLocalValue(currentValue === value ? "" : currentValue)
                                            setValue(name, currentValue)
                                            setOpen(false)
                                        }}
                                        className=" border-b my-3 cursor-pointer"
                                    >
                                        {item.label}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === item.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

        </TableCell>

    )
}
