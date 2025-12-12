import { Controller, useFieldArray, type Control, type FieldErrors, type UseFormRegister, type UseFormWatch } from "react-hook-form";
import type { StudyPlanFormValues } from "../../schema/StudyPlantI";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { GroupContainer } from "../GroupContainer";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CircleAlert, ListPlus, Trash } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { getTotalPercentaje } from "../../lib/total";
import { ShowErrorForm } from "../ShowErrorForm";


interface EvaluationCriteriaProps {
    register: UseFormRegister<StudyPlanFormValues>
    control: Control<StudyPlanFormValues>,
    watch: UseFormWatch<StudyPlanFormValues>
    errors: FieldErrors<StudyPlanFormValues>

}

const regexOnlyNumber = /^[0-9]+$/;

export const EvaluationCriteria = ({ register, control, watch, errors }: EvaluationCriteriaProps) => {

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
                    <TableRow>
                        <TableHead className="border text-center font-bold" >Nombre</TableHead>
                        <TableHead className="border text-center font-bold">Porcentaje</TableHead>
                        <TableHead className="border text-center font-bold">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {fieldsActivities.map((field, index) => {
                        const errorValue = errors.evaluationCriteria?.[index]?.value?.message;
                        const errorName = errors.evaluationCriteria?.[index]?.name?.message;
                        return (
                            <TableRow key={index}>
                                <TableCell className="border">
                                    {
                                        field.name === '' ? (
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Input
                                                        {...register(`evaluationCriteria.${index}.name`)}
                                                        className={`${errorValue && 'border-red-500'} `}
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

                                    {
                                        errorName && (
                                            <ShowErrorForm message={errorName} />
                                        )
                                    }



                                </TableCell>
                                <TableCell className="border ">


                                    <Controller
                                        control={control}
                                        name={`evaluationCriteria.${index}.value`}
                                        render={({ field }) => (
                                            <div className=" flex">
                                                <Input
                                                    type="text"
                                                    value={field.value}
                                                    onChange={(val) => {
                                                        const value = val.target.value;
                                                        if (!regexOnlyNumber.test(value) && value !== "") return;
                                                        field.onChange(value)
                                                    }}
                                                    className={`${errorValue && 'border-red-500'} min-w-28 `}


                                                />
                                                {
                                                    errorValue && (
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <Button variant='link'>
                                                                    <CircleAlert className="text-red-500" />
                                                                </Button>
                                                            </TooltipTrigger>
                                                            <TooltipContent >
                                                                <ShowErrorForm classname="text-white!" message={errorValue} />
                                                            </TooltipContent>
                                                        </Tooltip>

                                                    )
                                                }
                                            </div>

                                        )}
                                    />

                                </TableCell>
                                <TableCell className="border text-center" >
                                    {
                                        field.name === '' && (
                                            <Button type="button" variant="destructive" className="cursor-pointer" onClick={() => { remove(index) }}>
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
