
export interface ActivityI {
    unit: string
    activity: string
    tool: string
    studentDevelop: string
    date : Date
}

export interface EvaluationCriteriaI {
    name: string,
    value: number
}

export interface EvaluationActivityI {
    name: string
}

export interface ProductI {
    name: string
}

export interface ComboBoxValueI {
    label: string,
    value: string
}

export interface DataActivity {
    unit : ComboBoxValueI[],
    activity : ComboBoxValueI[],
    tool : ComboBoxValueI[],
    studentDevelop : ComboBoxValueI[]    
}

export type ActivityKeys = keyof DataActivity;

export interface StudyPlanFormValues {
    activities: ActivityI[],
    products: ProductI[]
    evaluationCriteria: EvaluationCriteriaI[]
    evaluationActivities: EvaluationActivityI[]
    description: string
}