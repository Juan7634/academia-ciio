import type { EvaluationCriteriaI } from "../schema/StudyPlantI"

export const getTotalPercentaje = (data: EvaluationCriteriaI[]): number => {
    return data
        ?.map(item => Number(item.value) || 0)
        .reduce((acc, val) => acc + val, 0);
}
