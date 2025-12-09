import { Controller, useFieldArray, type Control, type UseFormRegister, type UseFormWatch } from "react-hook-form";
import type { StudyPlanFormValues } from "../../schema/StudyPlantI";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { GroupContainer } from "../GroupContainer";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ListPlus, Trash } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { getTotalPercentaje } from "../../lib/total";


interface EvaluationCriteriaProps {
    register: UseFormRegister<StudyPlanFormValues>
    control: Control<StudyPlanFormValues>,
    watch: UseFormWatch<StudyPlanFormValues>

}

const regexOnlyNumber = /^[0-9]+$/;

export const EvaluationCriteria = ({ register, control, watch }: EvaluationCriteriaProps) => {

    const { fields: fieldsActivities, remove, append } = useFieldArray({
        control,
        name: "evaluationCriteria"
    });

    const total = getTotalPercentaje(watch('evaluationCriteria'));

    return (
        <GroupContainer
            label="Rubros de evaluación"
        >
            <Table >
                <TableHeader className="bg-muted border ">
                    <TableRow >
                        <TableHead className="border text-center font-bold" >Nombre</TableHead>
                        <TableHead className="border text-center font-bold">Porcentaje</TableHead>
                        <TableHead className="border text-center font-bold">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {fieldsActivities.map((field, index) => {

                        return (
                            <TableRow key={index}>
                                <TableCell className="border">
                                    {
                                        field.name === '' ? (
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Input
                                                        {...register(`evaluationCriteria.${index}.name`)}
                                                    />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {
                                                        watch(`evaluationCriteria.${index}.name`)
                                                    }
                                                </TooltipContent>
                                            </Tooltip>

                                        ) :
                                            <p>{field.name}</p>

                                    }

                                </TableCell>
                                <TableCell className="border">


                                    <Controller
                                        control={control}
                                        name={`evaluationCriteria.${index}.value`}
                                        render={({ field }) => (
                                            <Input
                                                type="text"
                                                value={field.value}
                                                onChange={(val) => {
                                                    const value = val.target.value;
                                                    
                                                    if (!regexOnlyNumber.test(value) && value !== "") return;
                                                    console.log('Hola 2', regexOnlyNumber.test(value))
                                                    field.onChange(value)
                                                }}
                                            />
                                        )}
                                    />

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
                        )

                    })}
                </TableBody>
            </Table>


            <div className="w-full bg-accent p-2">
                <div className="flex justify-between text-lg font-bold ">
                    <p>Total</p>
                    <p className={`${total > 100 && 'text-red-600'} `}>%{total}</p>
                </div>
                {total >= 100 && (
                    <p className="text-red-600 font-normal">El porcentaje total debe sumar 100%</p>
                )}
            </div>


            <div className="mt-4">
                <Button type="button" variant={'outline'} onClick={() => append({
                    name: "",
                    value: 0
                })}>
                    <ListPlus />
                    Agregar rublo
                </Button>

            </div>
        </GroupContainer>
    )
}
