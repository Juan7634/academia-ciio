import { useForm, type SubmitHandler } from "react-hook-form"
import { CompetitionGoal } from "../../components/plans/CompetitionGoal"
import { IdentificationData } from "../../components/plans/IdentificationData"
import { StudentGoal } from "../../components/plans/StudentGoal"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { defaultActivitiesValues, defaultEvaluationActivityValues, defaultEvaluationCriteriaValues, defaultEvaluationProductsValues } from "../../components/constants/create-subject-form"
import { Button } from "../../components/ui/button"
import { GeneralEvaluationCriteria } from "../../components/plans/GeneralEvaluationCriteria"
import { TeachingResourcesMaterials } from "../../components/plans/TeachingResourcesMaterials"
import { Separator } from '../../components/ui/separator';
import { studyPlanSchema } from "../../validations/create-student-plan-schema"
import type { StudyPlanFormValues } from "../../schema/StudyPlantI"
import { toast } from "sonner"
import { ArrowLeft, Save, SendHorizontal } from "lucide-react"
import { Link } from "react-router"


export const CreateStudyPlanPage = () => {

    const { control, register, setValue, watch, handleSubmit, formState: { errors } } = useForm<StudyPlanFormValues>({
        resolver: zodResolver(studyPlanSchema),
        defaultValues: {
            activities: defaultActivitiesValues,
            evaluationCriteria: defaultEvaluationCriteriaValues,
            products: defaultEvaluationProductsValues,
            evaluationActivities: defaultEvaluationActivityValues,
            description: ""
        }
    });

    const onSubmit: SubmitHandler<StudyPlanFormValues> = (data) => {
        console.log(data);
    }

    const handleErrors = () => {
        toast.error('Existen errores en el formulario, por favor verifica');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, handleErrors)}>

            <header className="w-full flex flex-col items-center lg:flex-row lg:justify-between gap-6 mb-4">
                <div className="flex gap-3 w-full lg:w-auto">
                    <Link to="/app/subjects" className="cursor-pointer">
                        <Button variant={'ghost'}>
                            <ArrowLeft />
                        </Button>
                    </Link>
                    <div>
                        <h3 className="font-bold text-xl ">
                            Administración Del Capital Y Fuentes Del Financiamiento
                        </h3>
                        <p>ARQ-401</p>
                    </div>
                </div>

                <div>
                    <div className="flex gap-4">
                        <Button type="submit" variant={'outline'}>
                            <Save />
                            Guardar como borrador
                        </Button>
                        <Button type="submit">
                            <SendHorizontal />
                            Enviar a revisión
                        </Button>
                    </div>
                </div>
            </header>

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

                    <Accordion
                        type="multiple"
                        collapsible
                        className="w-full"
                        defaultValue={["item-1"]}
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
                                <CompetitionGoal register={register} control={control} setValue={setValue} watch={watch} errors={errors} />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="cursor-pointer mb-2">
                            <AccordionTrigger className="bg-primary/10 w-full px-4">
                                4. Criterios generales de evaluación (desempeño)
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <GeneralEvaluationCriteria
                                    register={register} control={control} setValue={setValue} watch={watch} errors={errors}
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
                                    errors={errors}
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>




                </CardContent>

            </Card>
        </form>
    )
}
