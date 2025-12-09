import { useFieldArray, type Control, type UseFormRegister,  type UseFormWatch } from "react-hook-form";
import { GroupContainer } from "../GroupContainer";
import { ListPlus, Trash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import type { StudyPlanFormValues } from "../../schema/StudyPlantI";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Input } from "../ui/input";

interface EvaluationProductsProps {
    register: UseFormRegister<StudyPlanFormValues>
    control: Control<StudyPlanFormValues>,
    watch: UseFormWatch<StudyPlanFormValues>

}

export const EvaluationProducts = ({ register, control, watch }: EvaluationProductsProps) => {

    const { fields: fieldEvaluationProducts, remove, append } = useFieldArray({
        control,
        name: "products"
    });

    return (
        <GroupContainer
            label="Productos"
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
                        fieldEvaluationProducts.map((field, index) => (
                            <TableRow key={index}>
                                <TableCell className="border">
                                    {field.name === '' ? (
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Input
                                                    {...register(`products.${index}.name`)}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {
                                                    watch(`products.${index}.name`)
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
                    Agregar productos
                </Button>

            </div>
        </GroupContainer>
    )
}
