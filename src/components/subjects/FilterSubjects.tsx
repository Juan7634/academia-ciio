import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Label } from "../ui/label";
import type { CalendarI } from "../../schema/CalendarI";
import type { CurriculumStatusI } from "../../schema/CurriculumStatusI";

const calendars: CalendarI[] = [
    {
        id: 1,
        name: "2025B"
    },
    {
        id: 2,
        name: "2026A"
    }
];

const statuses: CurriculumStatusI[] = [
    {
        id: 1,
        name: 'BORRADOR'
    }
    ,
    {
        id: 2,
        name: 'EN REVISION PRESIDENTE'
    },
    {
        id: 3,
        name: 'EN REVISION JEFE DEPARTAMENTO'
    },
    {
        id: 4,
        name: 'RECHAZADO'
    },
    {
        id: 5,
        name: 'ACEPTADO'
    }

]

export const FilterSubjects = () => {

    console.log(statuses);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Filtros</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-5">
                    <div className="space-y-2 col-span-1">
                        <Label htmlFor="search" className="text-xs text-muted-foreground">
                            Calendario
                        </Label>
                        <Select defaultValue="">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecciona el calendario" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Calendarios</SelectLabel>
                                    {
                                        calendars.map((calendar, index) => (
                                            <SelectItem key={index} value={calendar.id}>{calendar.name}</SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                
                    <div className="space-y-2 col-span-1">
                        <Label htmlFor="search" className="text-xs text-muted-foreground">
                            Estatus
                        </Label>
                        <Select defaultValue="">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecciona el calendario" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Estatus</SelectLabel>
                                    {
                                        statuses.map((status, index) => (
                                            <SelectItem key={index} value={status.id}>{status.name}</SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>


                </div>


            </CardContent>

        </Card >
    )
}
