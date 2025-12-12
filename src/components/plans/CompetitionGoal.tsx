import {
    Table,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    type UseFormRegister,
    type Control,
    useFieldArray,
    type UseFormSetValue,
    type UseFormWatch,
    Controller,
    type FieldErrors

} from "react-hook-form"
import { TableBody, TableCell } from "../ui/table"
import { ActivityFieldTable } from "./ActivityFieldTable";
import type { StudyPlanFormValues } from "../../schema/StudyPlantI";
import { competitionGoalData, defaultActivitiesValues } from "../constants/create-subject-form";
import { DatePickerComponent } from "../DatePickerComponent";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";


interface CompetitionGoalProps {
    register: UseFormRegister<StudyPlanFormValues>
    control: Control<StudyPlanFormValues>,
    setValue: UseFormSetValue<StudyPlanFormValues>;
    watch: UseFormWatch<StudyPlanFormValues>
    errors : FieldErrors<StudyPlanFormValues>
}

const keyMap = {
    unit: "unit",
    activity: "activity",
    studentDevelop: "studentDevelop",
    tool: "tool"
} as const;

export const CompetitionGoal = ({ control, register, setValue , errors}: CompetitionGoalProps) => {

    const { fields: fieldsActivities, remove, append } = useFieldArray({
        control,
        name: "activities"
    });

    return (
        <div className="mt-4">
            <Table >
                <TableHeader className="bg-muted border ">
                    <TableRow >
                        <TableHead className="border text-center font-bold" >Unidad</TableHead>
                        <TableHead className="border text-center font-bold">Actividades</TableHead>
                        <TableHead className="border text-center font-bold">Capacidades, habilidades o valores por desarrollar</TableHead>
                        <TableHead className="border text-center font-bold" >Instrumento o estrategia de evaluación</TableHead>
                        <TableHead className="border text-center font-bold" >Fecha</TableHead>
                        <TableHead className="border text-center font-bold" >Acción</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                {fieldsActivities.flatMap((field, index) => {
                        
                        return (
                            <TableRow key={index} >
                                {
                                    (Object.keys(keyMap) as (keyof typeof keyMap)[])
                                        .filter(k => field[k] !== undefined)
                                        .map((activityKey) => {
                                            const data = competitionGoalData[keyMap[activityKey]];

                                            return (
                                                <ActivityFieldTable
                                                    key={`${field.id}-${activityKey}`}
                                                    register={register}
                                                    name={`activities.${index}.${activityKey}`}
                                                    data={data}
                                                    setValue={setValue}
                                                    errors={errors}
                                                    index={index}
                                                />
                                            );
                                        })}
                                <TableCell className="text-center align-top">
                                    <Controller
                                        control={control}
                                        name={`activities.${index}.date`}
                                        render={({ field }) => (
                                            <DatePickerComponent
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                </TableCell>

                                <TableCell className="text-center">
                                    <Button variant="destructive" className="cursor-pointer" onClick={() => { remove(index) }}>
                                        <Trash />
                                    </Button>
                                </TableCell>



                            </TableRow>

                        )
                    })}


                </TableBody>
            </Table>

            <div className="mt-3">
                <Button variant={'outline'} type="button" onClick={() => {
                    append(defaultActivitiesValues)
                }}>
                    Agregar columna
                </Button>
            </div>
        </div>
    )
}
