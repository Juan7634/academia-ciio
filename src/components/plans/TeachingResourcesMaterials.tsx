import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { StudyPlanFormValues } from "../../schema/StudyPlantI";
import { Textarea } from "../ui/textarea"
import { ShowErrorForm } from "../ShowErrorForm";


interface TeachingResourcesMaterialsProps {
    register: UseFormRegister<StudyPlanFormValues>
    errors : FieldErrors<StudyPlanFormValues>
}

export const TeachingResourcesMaterials = ({ register, errors }: TeachingResourcesMaterialsProps) => {

    const errorDescription = errors.description?.message

    return (
        <div className="pt-2  mt-2 border border-dashed p-2">
            <div className="bg-accent p-3 rounded">
                Se recomienda que en cada actividad se practique la autoevaluación y coevaluación con los estudiantes.
            </div>

            <div className="mt-4">
                <Textarea {...register('description')} placeholder="Describa las especificaciones." className={`${errorDescription && 'border-red-500'} `} />
                {
                    errorDescription && <ShowErrorForm message={errorDescription} />
                }                
            </div>
        </div>
    )
}
