import { useFieldArray, type Control, type UseFormRegister, type UseFormWatch } from "react-hook-form";
import { GroupContainer } from "../GroupContainer";
import { ListPlus, Trash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import type { StudyPlanFormValues } from "../../schema/StudyPlantI";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Input } from "../ui/input";


interface EvaluationActivitiesProps {
    register: UseFormRegister<StudyPlanFormValues>
    control: Control<StudyPlanFormValues>,    
    watch: UseFormWatch<StudyPlanFormValues>
}

export const EvaluationActivities = ({ register, control, watch }: EvaluationActivitiesProps) => {

    const { fields: fieldEvaluationActivities, remove, append } = useFieldArray({
        control,
        name: "evaluationActivities"
    });

    return (
        <GroupContainer
            label="Actividades"
        >
            <Table >
                <TableHeader className="bg-muted border ">
                    <TableRow >
                        <TableHead className="border text-center font-bold" >Nombre</TableHead>
                        <TableHead className="border text-center font-bold">Acción</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        fieldEvaluationActivities.map((field, index) => (
                            <TableRow key={index}>
                                <TableCell className="border">
                                    {field.name === '' ? (
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Input
                                                    {...register(`evaluationActivities.${index}.name`)}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {
                                                    watch(`evaluationActivities.${index}.name`)
                                                }
                                            </TooltipContent>
                                        </Tooltip>
                                    ) :
                                        (
                                            <p>{field.name}</p>
                                        )}
                                </TableCell>

                                <TableCell className="border text-center" >
                                    {
                                        field.name === '' && (
                                            <Button variant="destructive" className="cursor-pointer" onClick={() => { remove(index) }}>
                                                <Trash />
                                            </Button>

                                        )
                                    }
                                </TableCell>

                            </TableRow>
                        ))
                    }

                </TableBody>
                
            </Table>

            <div className="mt-4">
                <Button type="button" variant={'outline'} onClick={() => append({
                    name: "",
                })}>
                    <ListPlus />
                    Agregar actividad
                </Button>

            </div>
        </GroupContainer>
    )
}
