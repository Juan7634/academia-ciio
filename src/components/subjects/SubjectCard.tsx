
import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { BookOpen, Plus, Eye, BookA } from "lucide-react"
import { Badge } from "../ui/badge"
import { Link } from "react-router"
import type { SubjectI } from "../../schema/SubjectI"
import { subjectStatusData } from "../constants/subject-status"

interface SubjectCardProps {
    subject: SubjectI,
    plan?: string
}

export const SubjectCard = ({ subject, plan }: SubjectCardProps) => {

    return (
        <Card className="group hover:shadow-lg transition-all duration-200 border-border/50 hover:border-primary/20">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4 relative">
                    <div className="flex gap-3 mt-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div className="grow">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {subject.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">CRN : {subject.crn}</p>
                        </div>
                    </div>
                    <div className="absolute -top-4 -right-4">
                        {subject.status && <Badge className={subjectStatusData[subject.status.code]}>{subject.status.name}</Badge>}
                    </div>
                </div>

            </CardHeader>
            <CardContent className="space-y-4">

                <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Carrera</p>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-muted rounded-lg text-xs">
                            <BookA className="w-3 h-3" />
                            <span>
                                {subject.career}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Academia</p>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-muted rounded-lg text-xs">
                            <BookA className="w-3 h-3" />
                            <span>
                                {subject.academy}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="pt-2 border-t border-border">
                    {plan ? (
                        <Link to={`/dashboard/planes/${subject.id}`}>
                            <Button variant="outline" className="w-full gap-2 bg-transparent cursor-pointer">
                                <Eye className="w-4 h-4" />
                                Ver Plan de Estudio
                            </Button>
                        </Link>
                    ) : (
                        <Link to={'/app/plans/create'}>
                        <Button variant="default" className="w-full gap-2 cursor-pointer" >
                            <Plus className="w-4 h-4" />
                            Crear Plan de Estudio
                        </Button>
                        </Link>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
