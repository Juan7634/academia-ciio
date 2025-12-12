import { useFieldArray, type Control, type FieldErrors, type UseFormRegister, type UseFormWatch } from "react-hook-form";
import { GroupContainer } from "../GroupContainer";
import { ListPlus, Trash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import type { StudyPlanFormValues } from "../../schema/StudyPlantI";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Input } from "../ui/input";
import { ShowErrorForm } from "../ShowErrorForm";


interface EvaluationActivitiesProps {
    register: UseFormRegister<StudyPlanFormValues>
    control: Control<StudyPlanFormValues>,
    watch: UseFormWatch<StudyPlanFormValues>
    errors: FieldErrors<StudyPlanFormValues>

}

export const EvaluationActivities = ({ register, control, watch , errors}: EvaluationActivitiesProps) => {

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
                        fieldEvaluationActivities.map((field, index) => {

                            const errorName = errors.evaluationActivities?.[index]?.name?.message;

                            return (<TableRow key={index}>
                                <TableCell className="border">
                                    {field.name === '' ? (
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Input
                                                    {...register(`evaluationActivities.${index}.name`)}
                                                    className={`${errorName && 'border-red-500'} `}
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

                                    {
                                        errorName && (
                                            <ShowErrorForm message={errorName} />
                                        )
                                    }
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

                            </TableRow>)
                        }
                        )
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
