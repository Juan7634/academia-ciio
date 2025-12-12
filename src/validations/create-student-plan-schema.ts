import { z } from "zod";

const activitySchema = z.object({
    unit: z.string().min(1, "La unidad es obligatoria"),
    activity: z.string().min(1, "La actividad es obligatoria"),
    tool: z.string().min(1, "La herramienta es obligatoria"),
    studentDevelop: z.string().min(1, "Este campo es obligatorio"),
    date: z.date()
});

const evaluationCriteriaSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    value: z
    .number('El valor es obligatorio')
    .min(1, "El valor debe ser mayor o igual a 1")
    .max(100, "El valor debe ser menor o igual a 100"),

});

const evaluationActivitySchema = z.object({
    name: z.string().min(1, 'El nombre de la actividad es obligatorio'),
});

const productSchema = z.object({
    name: z.string().min(1, 'El nombre del producto es obligatorio'),
});

export const studyPlanSchema = z.object({
    activities: z.array(activitySchema).min(1,'Debe agregar al menos una competencia'),
    products: z.array(productSchema).min(1,'Debe tener al menos un producto de criterio de evaluación'),
    evaluationCriteria: z.array(evaluationCriteriaSchema).min(1,'Debe tener al menos un rubro de evaluación'),
    evaluationActivities: z.array(evaluationActivitySchema).min(1, 'Debe tener al menos una actividad de evaluación'),
    description: z.string().min(5,'Debe ingresar al menos una pequeña descripción...'),
});
