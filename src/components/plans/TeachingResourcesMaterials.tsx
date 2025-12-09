import type {  UseFormRegister } from "react-hook-form";
import type { StudyPlanFormValues } from "../../schema/StudyPlantI";
import { Textarea } from "../ui/textarea"


interface TeachingResourcesMaterialsProps {
    register: UseFormRegister<StudyPlanFormValues>    
}

export const TeachingResourcesMaterials = ({ register }: TeachingResourcesMaterialsProps) => {
    return (
        <div className="pt-2  mt-2 border border-dashed p-2">
            <div className="bg-accent p-3 rounded">
                Se recomienda que en cada actividad se practique la autoevaluación y coevaluación con los estudiantes.
            </div>

            <div className="mt-4">
                <Textarea {...register('description')} placeholder="Describa las especificaciones." />
            </div>
        </div>
    )
}
