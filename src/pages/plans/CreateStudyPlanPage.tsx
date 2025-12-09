import { useForm, type SubmitHandler } from "react-hook-form"
import { CompetitionGoal } from "../../components/plans/CompetitionGoal"
import { IdentificationData } from "../../components/plans/IdentificationData"
import { StudentGoal } from "../../components/plans/StudentGoal"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import type { StudyPlanFormValues } from "../../schema/StudyPlantI"
import { defaultActivitiesValues, defaultEvaluationActivityValues, defaultEvaluationCriteriaValues, defaultEvaluationProductsValues } from "../../components/constants/create-subject-form"
import { Button } from "../../components/ui/button"
import { GeneralEvaluationCriteria } from "../../components/plans/GeneralEvaluationCriteria"
import { TeachingResourcesMaterials } from "../../components/plans/TeachingResourcesMaterials"
import { Separator } from '../../components/ui/separator';



export const CreateStudyPlanPage = () => {

    const { control, register, setValue, watch, handleSubmit } = useForm<StudyPlanFormValues>({
        defaultValues: {
            activities: [defaultActivitiesValues],
            evaluationCriteria: defaultEvaluationCriteriaValues,
            products: defaultEvaluationProductsValues,
            evaluationActivities: defaultEvaluationActivityValues,
            description: ""
        }
    });

    const onSubmit: SubmitHandler<StudyPlanFormValues> = (data) => {
        console.log(data);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-col items-center">
                    <span className="mb-1 font-normal">
                        Planeación didáctica
                    </span>
                    <span className="text-primary font-bold text-lg">
                        Administración Del Capital Y Fuentes Del Financiamiento
                    </span>
                </CardTitle>
                <Separator />
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1" className="cursor-pointer mb-2">
                            <AccordionTrigger className="bg-primary/10 w-full px-4">
                                1. Datos de identificación
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <IdentificationData />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="cursor-pointer mb-2">
                            <AccordionTrigger className="bg-primary/10 w-full px-4">
                                2. ¿Qué se pretende lograr en el estudiante y con cuáles contenidos temáticos?
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <StudentGoal />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="cursor-pointer mb-2">
                            <AccordionTrigger className="bg-primary/10 w-full px-4">
                                3. ¿Comó se pretende lograr la competencia de la UA?
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <CompetitionGoal register={register} control={control} setValue={setValue} watch={watch} />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="cursor-pointer mb-2">
                            <AccordionTrigger className="bg-primary/10 w-full px-4">
                                4. Criterios generales de evaluación (desempeño)
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <GeneralEvaluationCriteria
                                    register={register} control={control} setValue={setValue} watch={watch}
                                />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="cursor-pointer ">
                            <AccordionTrigger className="bg-primary/10 w-full px-4">
                                5. Recursos y materiales didacticos
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <TeachingResourcesMaterials
                                    register={register}
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Separator className="my-4" />
                    <div >

                        <Button type="submit">
                            Enviar
                        </Button>
                    </div>

                </form>


            </CardContent>

        </Card>
    )
}
