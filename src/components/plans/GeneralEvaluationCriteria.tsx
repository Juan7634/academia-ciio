import type { Control, FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { EvaluationCriteria } from "./EvaluationCriteria"
import type { StudyPlanFormValues } from "../../schema/StudyPlantI";
import { EvaluationActivities } from "./EvaluationActivities";
import { EvaluationProducts } from "./EvaluationProducts";

interface GeneralEvaluationCriteriaProps {
    register: UseFormRegister<StudyPlanFormValues>
    control: Control<StudyPlanFormValues>,
    setValue: UseFormSetValue<StudyPlanFormValues>;
    watch: UseFormWatch<StudyPlanFormValues>
    errors : FieldErrors<StudyPlanFormValues>
    
}

export const GeneralEvaluationCriteria = ({
    register,
    control,    
    watch, 
    errors
}: GeneralEvaluationCriteriaProps) => {
    return (
        <div className="grid grid-cols-12 mt-4 gap-4">
            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                <EvaluationCriteria
                    register={register} control={control}
                    watch={watch}
                    errors={errors}
                />
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                <EvaluationActivities
                    register={register} control={control}
                    watch={watch}
                    errors={errors}
                />
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                <EvaluationProducts
                    register={register} control={control}
                    watch={watch}
                    errors={errors}

                />
            </div>
        </div>
    )
}
